package zenwork.mimeograph

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import zenwork.mimeograph.Fragment.Type
import zenwork.mimeograph.Fragment.Type.MD


/**
 *
 */
internal class FragmentsStoreTest {
    lateinit var store: FragmentsStore

    @BeforeEach
    fun setUp() {
        store = FragmentsStore()

    }

    @Test
    fun testAdd() {
        store.add(FragmentFactory.create("#foo bar", MD))
        val exception = assertThrows(IllegalArgumentException::class.java) { store.add(FragmentFactory.create("#foo bar", MD)) }

        assertEquals("a fragment with Key(type=MD, id=foo-bar) already exists.",exception.message)
        assertEquals(1, store.getSize())
    }

    @Test
    fun testGet() {
        store.add(FragmentFactory.create("""#The Title of The Blog Entry

The content of the blog""", MD))

        val fragment = store.get(Fragment.Key(Type.MD, "the-title-of-the-blog-entry"))
        assertEquals("#The Title of The Blog Entry\n\nThe content of the blog", fragment?.content)
    }
}
