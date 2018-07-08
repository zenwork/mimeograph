package zenwork.mimeograph

import io.vertx.core.AbstractVerticle
import io.vertx.core.Vertx
import io.vertx.ext.web.Router

/**
 * Server
 * */
class Mimeograph : AbstractVerticle() {

    override fun start() {
        vertx
                .createHttpServer()
                .requestHandler { buildRouter(Vertx.vertx())?.accept(it) }
                .listen(9090)
    }

    private fun buildRouter(vertx: Vertx?): Router? {
        val router = Router.router(vertx)

        router.get("/").handler { it.response().end(" Hello World :-) ") }
        return router
    }
}