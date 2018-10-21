package zenwork.mimeograph.fragment

import java.io.File

/**
 * @author: florian
 * @since: 21/10/18
 * */
object ContentFactory {
    fun extractMarkdownContent(file: File): Fragment {
        val content: String = file.inputStream().bufferedReader().use { it.readText() }
        return FragmentFactory.createMarkdown(content, file)
    }
}
