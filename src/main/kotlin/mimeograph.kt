
import io.vertx.core.Launcher
import zenwork.mimeograph.Mimeograph


fun main(args: Array<String>) {
    Launcher.executeCommand("run", Mimeograph::class.java.name)
}