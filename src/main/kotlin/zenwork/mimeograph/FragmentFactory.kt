package zenwork.mimeograph

import zenwork.mimeograph.Fragment.Key
import zenwork.mimeograph.Fragment.Type

/**
 * @author: florian
 * @since: 16/09/18
 * */
object FragmentFactory {
    fun create(content: String, type: Type): Fragment {
        val title = findTitle(content)
        val key = Key(type, replaceUnsafeCharacters(title))
        return Fragment(key, title, content)
    }

    fun findTitle(content: String): String {
        val extractedTitle = Regex("(?<=(^|\\r|\\n|\\r\\n))[#][^#].*").find(content)?.value.toString()
        return extractedTitle
    }

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
                .replace(Regex("-$"), "")
    }
}
