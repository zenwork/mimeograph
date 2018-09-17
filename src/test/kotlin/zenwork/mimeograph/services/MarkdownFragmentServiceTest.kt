package zenwork.mimeograph.services

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import zenwork.mimeograph.Fragment.Type.MD
import zenwork.mimeograph.FragmentFactory
import zenwork.mimeograph.FragmentsStore

/**
 * @author: florian
 * @since: 17/09/18
 */
internal class MarkdownFragmentServiceTest {

    private lateinit var service: MarkdownFragmentService

    @BeforeEach
    fun setUp() {
        val store = FragmentsStore()
        store.add(FragmentFactory.create("#Test", MD))
        store.add(FragmentFactory.create("#Test2", MD))
        store.add(FragmentFactory.create("#Test3", MD))
        service = MarkdownFragmentService(store)
    }

    @Test
    fun titles() {
        //language=JSON
        assertEquals("""{"test":"#Test","test2":"#Test2","test3":"#Test3"}""",service.titles())
    }
}
