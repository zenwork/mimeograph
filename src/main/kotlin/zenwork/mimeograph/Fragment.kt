package zenwork.mimeograph

/**
 * @author: u002201
 * @since: 12.09.2018
 * */
data class Fragment(val key: Key, val content: String = "") {
    data class Key(val type: Type, val id: String)
    enum class Type { MD }
}
