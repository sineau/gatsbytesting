// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/sina/Coding/tutorial-part-one/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/sina/Coding/tutorial-part-one/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/sina/Coding/tutorial-part-one/src/pages/page-2.js")),
  "component---src-pages-counter-js": preferDefault(require("/home/sina/Coding/tutorial-part-one/src/pages/counter.js"))
}

exports.json = {
  "dev-404-page.json": require("/home/sina/Coding/tutorial-part-one/.cache/json/dev-404-page.json"),
  "index.json": require("/home/sina/Coding/tutorial-part-one/.cache/json/index.json"),
  "page-2.json": require("/home/sina/Coding/tutorial-part-one/.cache/json/page-2.json"),
  "counter.json": require("/home/sina/Coding/tutorial-part-one/.cache/json/counter.json")
}

exports.layouts = {

}