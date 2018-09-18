package zenwork.mimeograph.services

import io.vertx.core.json.JsonObject
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

    fun titles(): String {
        val titles = JsonObject()

        store.getAllKeys().forEach {
            titles.put(it.id, store.get(it)?.title)

        }

        return titles.toString()
    }

}
