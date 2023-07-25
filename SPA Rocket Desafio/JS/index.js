import { Router } from "./router.js"
import { Events } from "./events.js"

const router = new Router()
const events = Events()



router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

if (window.location.pathname !== "/") {
  window.location.href = "/"
}


