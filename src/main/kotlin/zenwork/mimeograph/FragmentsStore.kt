package zenwork.mimeograph

/**
 * @author: u002201
 * @since: 13.09.2018
 * */
class FragmentsStore {

    private val fragments: MutableMap<Fragment.Key, Fragment> = mutableMapOf()

    fun get(key: Fragment.Key): Fragment? {
        return fragments[key]
    }
}


