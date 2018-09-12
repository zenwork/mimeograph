package zenwork.mimeograph

import io.vertx.core.AbstractVerticle
import io.vertx.core.Vertx
import io.vertx.ext.web.Router
import io.vertx.ext.web.RoutingContext
import io.vertx.ext.web.handler.StaticHandler

/**
 * Server
 * */
class Mimeograph : AbstractVerticle() {

    override fun start() {
        val router = buildRouter(vertx)
        vertx
                .createHttpServer()
                .requestHandler { router.accept(it) }
                .listen(9090)
    }

    private fun buildRouter(vertx: Vertx): Router {
        val router = Router.router(vertx)

        router
                .get("/")
                .handler { ctx: RoutingContext -> ctx.response().end("mimeograph") }

        router
                .get("/stencils")
                .handler { ctx:RoutingContext -> ctx.response().end("page templates") }

        router
                .get("/md/titles")
                .handler { ctx:RoutingContext -> ctx.response().end("raw md content") }


        router
                .get("/md/title/*").handler(StaticHandler.create("webroot/md"))

        router
                .get("/static/*").handler(StaticHandler.create("webroot/static"))

        return router
    }
}