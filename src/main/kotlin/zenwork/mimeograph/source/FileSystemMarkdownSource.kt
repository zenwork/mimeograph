package zenwork.mimeograph.source

import zenwork.mimeograph.fragment.ContentFactory
import zenwork.mimeograph.fragment.Fragment
import java.io.File

/**
 * File System sourcing implementation
 */
class FileSystemMarkdownSource(val path: String) : MarkdownSource {

    override fun fetch(): Set<Fragment> {
        val fragList = mutableSetOf<Fragment>()
        val directory = File(path)
        if (directory.isDirectory && directory.exists()) {

            directory.walk().forEach { file ->
                if (file.isFile) {
                    println("found MD file: $file")

                    val fragment = ContentFactory.extractMarkdownContent(file)
                    fragList.add(fragment)
                }
            }
        } else {
            println("Path to MD files not found or not a directory: $directory")
        }
        return fragList
    }
}
