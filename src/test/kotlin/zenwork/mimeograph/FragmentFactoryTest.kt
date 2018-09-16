package zenwork.mimeograph

import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import zenwork.mimeograph.Fragment.Type
import zenwork.mimeograph.Fragment.Type.MD
import java.util.stream.Stream

/**
 * @author: florian
 * @since: 16/09/18
 */
internal class FragmentFactoryTest {

    @BeforeEach
    fun setUp() {
    }

    @AfterEach
    fun tearDown() {
    }

    @ParameterizedTest
    @MethodSource("testContent")
    fun create(content: String, title: String, type: Type) {
        val fragment = FragmentFactory().create(content, type)

        assertEquals(type, fragment.key.type)
        assertEquals(title, fragment.key.id)
        assertEquals(content, fragment.content)
    }

    companion object {
        @JvmStatic
        fun testContent(): Stream<Arguments>? {
            return Stream.of(
                    Arguments.of("""#The Title""", "the-title", MD)
            )

        }
    }
}
