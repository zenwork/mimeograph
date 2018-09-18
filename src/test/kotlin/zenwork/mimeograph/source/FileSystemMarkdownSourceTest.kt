package zenwork.mimeograph.source

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import zenwork.mimeograph.fragment.Fragment.Type.MD
import java.nio.file.Files
import java.nio.file.Path

/**
 * @author: florian
 * @since: 18/09/18
 */
internal class FileSystemMarkdownSourceTest {
    private lateinit var directory: Path

    @BeforeEach
    fun setUp() {
        directory = Files.createTempDirectory("md-test")
        directory.toFile().deleteOnExit()
        val file = Files.createTempFile(directory, "test-md-file", ".md")
        file.toFile().createNewFile()
        file.toFile().deleteOnExit()

        file.toFile().printWriter().use { out ->
            out.println("#A Title")
            out.println("some content")
        }
    }

    @Test
    fun fetch() {
        val source = FileSystemMarkdownSource(directory.toFile().toString())
        val set = source.fetch()
        assertEquals(1, set.size)
        set.forEach {

            assertEquals(MD, it.key.type)
            assertEquals("a-title", it.key.id)
            assertEquals("#A Title", it.title)
            assertEquals("#A Title\nsome content\n", it.content)
        }
    }
}
