package zenwork.mimeograph.source

import zenwork.mimeograph.fragment.Fragment

/**
 * Fragment sourcing strategy interface
 */
interface MarkdownSource {

    fun fetch(): Set<Fragment>
}
