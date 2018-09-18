package zenwork.mimeograph.source

import zenwork.mimeograph.fragment.Fragment

/**
 * @author: florian
 * @since: 18/09/18
 * */
interface MarkdownSource {

    fun fetch(): Set<Fragment>
}
