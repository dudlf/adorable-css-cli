import {generateCss} from "./core/atomizer"
import {reset} from "./core/rules"

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.innerHTML = "body {display:none!important}"
  document.documentElement.querySelector("head").appendChild(styleSheet)

  const classList = new Set<string>()
  const generateStyleSheet = () => styleSheet.innerHTML = reset + generateCss([...classList]).join("\n")

  const registerObserver = () => {
    if (!document.body) return
    const observer = new MutationObserver(() => init())
    observer.observe(document.body, {attributes: true, childList: true, subtree: true, attributeOldValue: true, attributeFilter: ["class"]})
  }

  const init = () => {
    classList.clear()
    Array.from(document.querySelectorAll("*[class]")).forEach(el => Array.from(el.classList).forEach(value => classList.add(value)))
    generateStyleSheet()
  }

  const bootstrap = () => {
    init()
    registerObserver()
    document.removeEventListener("readystatechange", bootstrap)
  }
  bootstrap()
  document.addEventListener("readystatechange", bootstrap)
}