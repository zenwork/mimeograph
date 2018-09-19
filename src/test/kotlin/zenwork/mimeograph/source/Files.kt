package zenwork.mimeograph.source

import java.nio.file.Files
import java.nio.file.Path

/**
 * @author: florian
 * @since: 19/09/18
 * */
object Files {
    fun createTestMd(tempDirName: String): Path {
        val dir = Files.createTempDirectory(tempDirName)
        dir.toFile().deleteOnExit()
        val file = Files.createTempFile(dir, "test-md-file", ".md")
        file.toFile().createNewFile()
        file.toFile().deleteOnExit()

        file.toFile().printWriter().use { out ->
            out.println("#A Title")
            out.println("some content")
        }
        return dir
    }
}
