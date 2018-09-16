package zenwork.mimeograph

import zenwork.mimeograph.Fragment.Key
import zenwork.mimeograph.Fragment.Type

/**
 * @author: florian
 * @since: 16/09/18
 * */
class FragmentFactory {
    fun create(content: String, type: Type): Fragment {
        return Fragment(Key(type, extractFrom(content)), content)
    }

    private fun extractFrom(content: String): String {
        val extractedTitle = Regex("(?<=(^|\\r|\\n|\\r\\n))[#][^#].*").find(content)?.value.toString()
        return replaceUnsafeCharacters(extractedTitle)
    }

    fun replaceUnsafeCharacters(extractedTitle: String): String {

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
