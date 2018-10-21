package zenwork.mimeograph

import io.vertx.core.AbstractVerticle
import io.vertx.core.Vertx
import io.vertx.core.http.HttpMethod.GET
import io.vertx.core.http.HttpServerOptions
import io.vertx.ext.web.Router
import io.vertx.ext.web.RoutingContext
import io.vertx.ext.web.handler.StaticHandler
import zenwork.mimeograph.services.MarkdownFragmentService
import zenwork.mimeograph.source.FileSystemMarkdownSource
import zenwork.mimeograph.source.Watcher
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors


/**
 * Server
 * */
class Mimeograph : AbstractVerticle() {

    private val executor: ExecutorService = Executors.newSingleThreadExecutor()

    override fun start() {

        val path = config().getString("path.md", "${System.getProperty("user.dir")}/webroot/md")
        val port = config().getInteger("http.port", 9090)
        val source = FileSystemMarkdownSource(path)
        val markdownService = MarkdownFragmentService(source)

        executor.submit {
            Watcher(path, markdownService.getActionUpdater(path))
        }

        val router = buildRouter(vertx, markdownService)

        val options = HttpServerOptions()
        options.isCompressionSupported = true
        options.compressionLevel = 9

        vertx.createHttpServer(options)
                .requestHandler(router::accept)
                .listen(port)
    }

    override fun stop() {
        super.stop()
        executor.shutdown()
    }

    private fun buildRouter(vertx: Vertx, markdownService: MarkdownFragmentService): Router {
        val router = Router.router(vertx)

        router
                .get("/")
                .handler { ctx: RoutingContext -> ctx.response().end("mimeograph") }

        router
                .get("/stencils")
                .handler { ctx: RoutingContext -> ctx.response().end("page templates") }

        router
                .get("/md/titles")
                .handler { ctx: RoutingContext -> ctx.response().end(markdownService.getTitles()) }


        router
                .route(GET, "/md/title/:title")
                .handler { ctx: RoutingContext ->
                    val response = ctx.response()
                    response.putHeader("content-type", "text/plain")
                    response.end(markdownService.getTitle(ctx.request().getParam("title")))
                }


        router
                .get("/static/*").handler(StaticHandler.create("webroot/static"))

        router
                .get("/api/*").handler(StaticHandler.create("webroot/api"))

        return router
    }
}
