package zenwork.mimeograph

/**
 *
 */
class FragmentsStore {

    private val fragments: MutableMap<Fragment.Key, Fragment> = mutableMapOf()

    fun get(key: Fragment.Key): Fragment? {
        return fragments[key]
    }

    fun add(fragment: Fragment) {
        fragments[fragment.key] = fragment
    }
}


