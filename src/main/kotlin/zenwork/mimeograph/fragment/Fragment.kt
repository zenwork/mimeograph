package zenwork.mimeograph.fragment

import java.io.File

/**
 * @author: u002201
 * @since: 12.09.2018
 * */
data class Fragment(val key: Key, val title: String = "", val content: String = "") {

    data class Key(val file: File, val type: Type, val id: String)
    enum class Type { MD }
}
