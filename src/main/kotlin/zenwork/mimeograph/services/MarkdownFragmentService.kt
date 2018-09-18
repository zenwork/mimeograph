package zenwork.mimeograph.services

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
        var titles = "{"
        store.getAllKeys().forEach { titles = "$titles${addComma(titles)}\"${it.id}\":\"${store.get(it)?.title}\"" }
        titles = "$titles}"
        return titles
    }

    private fun addComma(titles: String) = if (titles == "{") "" else ","
}
