package zenwork.mimeograph.fragment

import zenwork.mimeograph.fragment.Fragment.Type
import java.io.File
import kotlin.collections.Map.Entry

/**
 *  Fragment Store in memory implementation
 */
class FragmentsStore {

    private val fragments: MutableMap<File, Fragment> = mutableMapOf()

    fun get(key: Fragment.Key): Fragment? {
        return fragments[key.file]
    }

    fun get(file: File): Fragment? {
        return fragments[file]
    }

    fun getByWebId(md: Type, webId: String): Fragment? {
        val map = fragments
                .filter(fun(it: Entry<File, Fragment>): Boolean {
                    return it.value.key.type == md && it.value.key.id == webId
                })
        if (map.entries.isNotEmpty()) {
            return map.entries.first().value
        } else {
            return null
        }
    }

    fun add(fragment: Fragment) {
        println("add ${fragment.key}")
        if (fragments[fragment.key.file] == null) {
            fragments[fragment.key.file] = fragment
        } else {
            throw IllegalArgumentException("a fragment with ${fragment.key} already exists.")
        }
    }

    fun remove(key: File): Fragment? {
        println("remove $key")
        return fragments.remove(key)
    }

    fun getSize(): Int {
        return fragments.size
    }

    fun getAllKeys(): List<File> {
        return fragments.keys.toList()
    }

    fun replace(fragment: Fragment) {
        println("replace ${fragment.key}")
        fragments.replace(fragment.key.file, fragment)
    }
}


