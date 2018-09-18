package zenwork.mimeograph.fragment

import zenwork.mimeograph.fragment.Fragment.Key

/**
 *  Fragment Store in memory implementation
 */
class FragmentsStore {

    private val fragments: MutableMap<Fragment.Key, Fragment> = mutableMapOf()

    fun get(key: Fragment.Key): Fragment? {
        return fragments[key]
    }

    fun add(fragment: Fragment) {
        println("added ${fragment.key}")
        if(fragments[fragment.key]==null){
        fragments[fragment.key] = fragment
        } else {
            throw IllegalArgumentException("a fragment with ${fragment.key} already exists.")
        }
    }

    fun getSize(): Int {
        return fragments.size
    }

    fun getAllKeys(): List<Key> {
        return fragments.keys.toList()
    }
}


