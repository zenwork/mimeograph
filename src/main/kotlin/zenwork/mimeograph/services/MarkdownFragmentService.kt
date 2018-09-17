package zenwork.mimeograph.services

import zenwork.mimeograph.Fragment.Type.MD
import zenwork.mimeograph.FragmentFactory
import zenwork.mimeograph.FragmentsStore
import java.io.File

class MarkdownFragmentService() {
    private lateinit var store: FragmentsStore

    constructor(store: FragmentsStore) : this() {
        this.store = store
    }

    constructor(path: String) : this() {
        store = FragmentsStore()
        val path = File(path)
        if (path.exists()) {

            path.walk().forEach { file ->
                if (file.isFile) {
                    println("found MD file: $file")

                    val content: String = file.inputStream().bufferedReader().use { it.readText() }
                    store.add(FragmentFactory.create(content, MD))
                }
            }
        } else {
            println("Path to MD files not found: $path")
        }
    }

    fun titles(): String {
        var titles = "{"
        store.getAllKeys().forEach { titles = "$titles${addComma(titles)}\"${it.id}\":\"${store.get(it)?.title}\"" }
        titles = "$titles}"
        return titles
    }

    private fun addComma(titles: String) = if (titles == "{") "" else ","
}
