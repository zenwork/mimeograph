package zenwork.mimeograph

import io.vertx.core.AbstractVerticle
import io.vertx.core.Vertx
import io.vertx.ext.web.Router
import io.vertx.ext.web.RoutingContext
import io.vertx.ext.web.handler.StaticHandler
import zenwork.mimeograph.services.MarkdownFragmentService
import zenwork.mimeograph.source.FileSystemMarkdownSource

/**
 * Server
 * */
class Mimeograph : AbstractVerticle() {

    override fun start() {

        val path = config().getString("path.md", "${System.getProperty("user.dir")}/webroot/md")
        val port = config().getInteger("http.port", 9090)

        val source = FileSystemMarkdownSource(path)
        val markdownService = MarkdownFragmentService(source)
        val router = buildRouter(vertx,markdownService)

        vertx
                .createHttpServer()
                .requestHandler { router.accept(it) }
                .listen(port)
    }

    private fun buildRouter(vertx: Vertx, markdownService: MarkdownFragmentService): Router {
        val router = Router.router(vertx)

        router
                .get("/")
                .handler { ctx: RoutingContext -> ctx.response().end("mimeograph") }

        router
                .get("/stencils")
                .handler { ctx:RoutingContext -> ctx.response().end("page templates") }

        router
                .get("/md/titles")
                .handler { ctx:RoutingContext ->  ctx.response().end(markdownService.titles())}


        router
                .get("/md/title/*").handler(StaticHandler.create("webroot/md"))

        router
                .get("/static/*").handler(StaticHandler.create("webroot/static"))

        return router
    }
}
