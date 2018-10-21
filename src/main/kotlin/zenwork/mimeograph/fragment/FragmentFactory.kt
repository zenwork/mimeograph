package zenwork.mimeograph.fragment

import zenwork.mimeograph.fragment.Fragment.Key
import zenwork.mimeograph.fragment.Fragment.Type.MD
import java.io.File

/**
 * Convert content to Fragment instance
 */
object FragmentFactory {

    /**
     * Create Markdown Fragment
     */
    fun createMarkdown(content: String, file: File): Fragment {
        val title = findMarkdownTitle(content)
        val key = Key(file, MD, replaceUnsafeCharacters(title))
        return Fragment(key, title, content)
    }

    /**
     * find first Markdown title(h1) starting with '#' notation
     */
    private fun findMarkdownTitle(content: String): String {
        return Regex("(?<=(^|\\r|\\n|\\r\\n))[#][^#].*").find(content)?.value.toString()
    }

    /**
     * create safe string which makes unique ID and safe URL slug
     */
    private fun replaceUnsafeCharacters(extractedTitle: String): String {

        return extractedTitle
                .toLowerCase()
                .replace("#", "")
                .replace(Regex(" & "), " and ")
                .replace(Regex("[^0-9a-zA-Z$-_.+!*'(),\\[\\]]"), "-")
                //not sure why these are not matched above
                .replace(Regex("[&=?]"), "-")
                //simplify
                .replace(Regex("[-]+"), "-")
                //remove trailing -
                .replace(Regex("-+$"), "")
                .replace(Regex("^-+"), "")

    }
}
