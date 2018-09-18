package zenwork.mimeograph.source

import zenwork.mimeograph.fragment.Fragment
import zenwork.mimeograph.fragment.FragmentFactory
import java.io.File

/**
 * File System sourcing implementation
 */
class FileSystemMarkdownSource(val path:String) : MarkdownSource {

    override fun fetch(): Set<Fragment> {
        val fragList = mutableSetOf<Fragment>()
        val directory = File(path)
        if (directory.isDirectory && directory.exists()) {

            directory.walk().forEach { file ->
                if (file.isFile) {
                    println("found MD file: $file")

                    val content: String = file.inputStream().bufferedReader().use { it.readText() }
                    val fragment = FragmentFactory.createMarkdown(content)
                    fragList.add(fragment)
                }
            }
        } else {
            println("Path to MD files not found or not a directory: $directory")
        }
        return fragList
    }
}
