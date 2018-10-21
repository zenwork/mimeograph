package zenwork.mimeograph.services

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import zenwork.mimeograph.fragment.Fragment
import zenwork.mimeograph.fragment.FragmentFactory
import zenwork.mimeograph.source.MarkdownSource
import java.io.File

/**
 * @author: florian
 * @since: 17/09/18
 */
internal class MarkdownFragmentServiceTest {

    private lateinit var service: MarkdownFragmentService

    @BeforeEach
    fun setUp() {
        val source = object : MarkdownSource {
            override fun fetch(): Set<Fragment> {
                val set = mutableSetOf<Fragment>()
                set.add(FragmentFactory.createMarkdown("#Test", File("a")))
                set.add(FragmentFactory.createMarkdown("#Test2", File("b")))
                set.add(FragmentFactory.createMarkdown("#Test3", File("c")))
                return set
            }
        }

        service = MarkdownFragmentService(source)
    }

    @Test
    fun titles() {
        //language=JSON
        assertEquals("""{"test":"#Test","test2":"#Test2","test3":"#Test3"}""", service.getTitles())
    }

    @Test
    fun testGetTitle() {
        assertEquals("#Test2", service.getTitle("test2"))
    }
}
