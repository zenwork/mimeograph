package zenwork.mimeograph

/**
 * @author: u002201
 * @since: 12.09.2018
 * */
data class Fragment(val type: FragmentType, val content: String = "") {
    enum class FragmentType { MD }
}