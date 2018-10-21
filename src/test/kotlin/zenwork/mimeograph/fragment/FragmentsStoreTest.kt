package zenwork.mimeograph.fragment

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import zenwork.mimeograph.fragment.Fragment.Type
import java.io.File


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
        store.add(FragmentFactory.createMarkdown("#foo bar", File("")))
        val exception = assertThrows(IllegalArgumentException::class.java) {
            store.add(FragmentFactory.createMarkdown("#foo bar",
                                                     File("")))
        }

        assertEquals("a fragment with Key(file=, type=MD, id=foo-bar) already exists.", exception.message)
        assertEquals(1, store.getSize())
    }

    @Test
    fun testGet() {
        store.add(FragmentFactory.createMarkdown("""#The Title of The Blog Entry

The content of the blog""", File("")))

        val fragment = store.get(Fragment.Key(File(""), Type.MD, "the-title-of-the-blog-entry"))
        assertEquals("#The Title of The Blog Entry\n\nThe content of the blog", fragment?.content)
    }

    @Test
    fun testRemove() {
        store.add(FragmentFactory.createMarkdown("#foo bar", File("1")))
        store.add(FragmentFactory.createMarkdown("#foo bar 2", File("2")))
        assertEquals(2,store.getAllKeys().size)
        store.remove(File("1"))
        assertEquals(1,store.getAllKeys().size)
    }

    @Test
    fun testReplace() {
        store.add(FragmentFactory.createMarkdown("# foo bar", File("1")))
        store.replace(FragmentFactory.createMarkdown("# foo bar baz", File("1")))
        assertEquals(store.get(File("1"))!!.content, "# foo bar baz")
    }
}
