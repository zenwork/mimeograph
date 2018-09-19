package io.vertx.blog.first

import io.vertx.core.DeploymentOptions
import io.vertx.core.Vertx
import io.vertx.core.http.HttpClient
import io.vertx.core.json.JsonObject
import io.vertx.ext.unit.TestContext
import io.vertx.ext.unit.junit.VertxUnitRunner
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import zenwork.mimeograph.Mimeograph
import zenwork.mimeograph.source.Files

@RunWith(VertxUnitRunner::class)
class MimeographTest {

    private var vertx: Vertx? = null
    private var client: HttpClient? = null

    @Before
    fun setUp(context: TestContext) {
        vertx = Vertx.vertx()
        val path = Files.createTestMd("test-md")

        val config = JsonObject()
        config.put("http.port",9999)
        config.put("path.md",path.toString())
        val options = DeploymentOptions().setConfig(config)

        vertx!!.deployVerticle(Mimeograph::class.java.name, options, context.asyncAssertSuccess())
        client = vertx!!.createHttpClient()
    }

    @After
    fun tearDown(context: TestContext) {
        vertx!!.close(context.asyncAssertSuccess())
    }

    @Test
    fun testBasicStart(context: TestContext) {
        call(context, "/", "mimeograph")
    }

    @Test
    fun testMarkdownList(context: TestContext) {
        call(context, "/md/titles", "{\"a-title\":\"#A Title\"}")
    }

    private fun call(context: TestContext, request: String, contains: String) {
        val async = context.async()
        client?.getNow(9999, "localhost", request)
        { response ->
            response.handler { body ->
                val content = body.toString()
                println(content)
                context.assertTrue(content.contains(contains))
                async.complete()
            }
        }
    }
}
