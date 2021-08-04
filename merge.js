const nodes = {
  "/": require("./i18n/en.json"),
  "/app": require("./i18n/app/en.json"),
  "/app/mobile": require("./i18n/app/mobile/en.json"),
  "/app/mobile/ios": require("./i18n/app/mobile/ios/en.json"),
}

const translations = {}

Object.keys(nodes).forEach((path) => {
  const lang = nodes[path]
  Object.keys(lang).forEach((id) => {
    const baseId =
      path === "/" ? "global" : path.replace("/", "").replace(/\//g, ".")
    translations[`${baseId}.${id}`] = lang[id]
  })
})

console.log(translations)
