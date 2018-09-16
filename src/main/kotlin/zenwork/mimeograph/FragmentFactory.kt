package zenwork.mimeograph

import zenwork.mimeograph.Fragment.Key
import zenwork.mimeograph.Fragment.Type

/**
 * @author: florian
 * @since: 16/09/18
 * */
class FragmentFactory {
    fun create(content:String, type: Type): Fragment {
      return Fragment(Key(type, extractFrom(content)),content)
    }

    private fun extractFrom(content: String): String {
            return Regex("^[#].*").find(content)?.value.toString().toLowerCase().replace("#","").replace(' ','-').replace('\t','-')
    }
}
