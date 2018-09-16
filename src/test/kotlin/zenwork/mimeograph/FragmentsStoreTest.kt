package zenwork.mimeograph

import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions
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

    @AfterEach
    fun tearDown() {
    }

    @Test
    fun get() {
        addTestContent()
        val fragment = store.get(Fragment.Key(Type.MD, "the-title-of-the-blog-entry"))
        Assertions.assertEquals("#The Title of The Blog Entry\n\nThe content of the blog", fragment?.content)
    }

    fun addTestContent() {
        val content = """#The Title of The Blog Entry

The content of the blog"""

        store.add(FragmentFactory().create(content,MD))
    }
}
