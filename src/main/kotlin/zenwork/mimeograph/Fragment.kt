package zenwork.mimeograph

/**
 * @author: u002201
 * @since: 12.09.2018
 * */
data class Fragment(val key: Key, val content: String = "") {

    data class Key(val type: FragmentType, val key: String) {
        enum class FragmentType { MD }
    }
}