package zenwork.mimeograph.services

import io.vertx.core.json.JsonObject
import zenwork.mimeograph.fragment.ContentFactory
import zenwork.mimeograph.fragment.Fragment.Type.MD
import zenwork.mimeograph.fragment.FragmentsStore
import zenwork.mimeograph.source.MarkdownSource
import java.io.File
import java.nio.file.StandardWatchEventKinds.ENTRY_CREATE
import java.nio.file.StandardWatchEventKinds.ENTRY_DELETE
import java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY
import java.nio.file.WatchEvent

/**
 * Markdown Fragment Service
 */
class MarkdownFragmentService() {
    private var store: FragmentsStore = FragmentsStore()

    constructor(source: MarkdownSource) : this() {
        source.fetch().forEach { store.add(it) }
    }

    fun getTitles(): String {
        val titles = JsonObject()

        store.getAllKeys().forEach { file ->
            val fragment = store.get(file)
            titles.put(fragment!!.key.id, fragment.title)
        }

        return titles.toString()
    }

    fun getTitle(title: String): String? {
        val key: String
        when {
            title.endsWith(".md") -> key = title.substring(0, title.length - 3)
            else                  -> key = title
        }
        val fragment = store.getByWebId(MD, key)
        return fragment?.content
    }

    fun getActionUpdater(path: String): (WatchEvent<*>?) -> Unit {
        return { event: WatchEvent<*>? ->
            try {
                println("handling file event: ${event!!.kind()}")
                println("handling file event: ${event.context()}")
                val absolutePath = File(path, event.context().toString())
                if (event.kind() === ENTRY_MODIFY) {
                    val fragment = ContentFactory.extractMarkdownContent(absolutePath)
                    store.replace(fragment)
                }

                if (event.kind() === ENTRY_DELETE) {
                    store.remove(absolutePath)
                }

                if (event.kind() === ENTRY_CREATE) {
                    val fragment = ContentFactory.extractMarkdownContent(absolutePath)
                    store.add(fragment)
                }


            } catch (e: Exception) {
                println("unable to handle event [${event!!.kind()}][${event.context()}]: ${e.message}")
            }
        }
    }

}
