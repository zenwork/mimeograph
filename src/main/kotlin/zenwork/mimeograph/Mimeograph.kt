package zenwork.mimeograph

import io.vertx.core.AbstractVerticle
import io.vertx.core.Vertx
import io.vertx.ext.web.Router
import java.io.IOException

/**
 * Server
 * */
object Mimeograph : AbstractVerticle() {

    @JvmStatic
    @Throws(IOException::class)
    fun main(args: Array<String>) {

        // setup verx
        val vertx = Vertx.vertx()
        val router = Router.router(vertx)

        router.get("/").handler { it.response().end(" Hello World :-) ") }

        // start vertx
        vertx.createHttpServer().requestHandler { router.accept(it) }.listen(9090)
    }
}