package io.vertx.blog.first

import io.vertx.core.Vertx
import io.vertx.ext.unit.TestContext
import io.vertx.ext.unit.junit.VertxUnitRunner
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import zenwork.mimeograph.Mimeograph

@RunWith(VertxUnitRunner::class)
class MyFirstVerticleTest {

    private var vertx: Vertx? = null

    @Before
    fun setUp(context: TestContext) {
        vertx = Vertx.vertx()
        vertx!!.deployVerticle(Mimeograph::class.java.name,
                context.asyncAssertSuccess())
    }

    @After
    fun tearDown(context: TestContext) {
        vertx!!.close(context.asyncAssertSuccess())
    }

    @Test
    fun testMyApplication(context: TestContext) {
        val async = context.async()

        vertx!!.createHttpClient().getNow(9090, "localhost", "/"
        ) { response ->
            response.handler { body ->
                context.assertTrue(body.toString().contains("mimeograph"))
                async.complete()
            }
        }
    }
}
