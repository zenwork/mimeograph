package zenwork.mimeograph.services

import io.vertx.core.json.JsonObject
import zenwork.mimeograph.fragment.Fragment
import zenwork.mimeograph.fragment.Fragment.Type.MD
import zenwork.mimeograph.fragment.FragmentsStore
import zenwork.mimeograph.source.MarkdownSource

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

        store.getAllKeys().forEach {
            titles.put(it.id, store.get(it)?.title)

        }

        return titles.toString()
    }

    fun getTitle(title: String): String? {
        val fragment = store.get(Fragment.Key(MD, title))
        return fragment?.content
    }

}
