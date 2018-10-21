package zenwork.mimeograph.source

import java.nio.file.Path
import java.nio.file.Paths
import java.nio.file.StandardWatchEventKinds
import java.nio.file.WatchEvent
import java.nio.file.WatchService

/**
 *
 * */
class Watcher {

    constructor(pathName: String, actionFn: (WatchEvent<*>?) -> Unit) {
        val path = Paths.get(pathName)
        val watcher = path.watch()
        while (true) {
            val key = watcher.take()
            key.pollEvents().forEach(actionFn)
            key.reset()
        }
    }

    private fun Path.watch(): WatchService {
        val watchService = this.fileSystem.newWatchService()
        register(watchService,
                 StandardWatchEventKinds.ENTRY_CREATE,
                 StandardWatchEventKinds.ENTRY_MODIFY,
                 StandardWatchEventKinds.OVERFLOW,
                 StandardWatchEventKinds.ENTRY_DELETE)

        return watchService
    }
}
