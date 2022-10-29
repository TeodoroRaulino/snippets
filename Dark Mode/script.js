const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)
const initialColors = {
  backgroundBody: getStyle(html, "--backgroundBody"),
  backgroundContainer: getStyle(html, "--backgroundContainer"),
  textColor: getStyle(html, "--textColor"),
  white: getStyle(html, "--white"),
  shadow: getStyle(html, "--shadow")
}

const darkMode = {
  backgroundBody: "#21262d",
  backgroundContainer: "#484f58",
  textColor: "#e5e5e5",
  white: "black",
  shadow: "0px 2px 16px rgba(255, 255, 255, 0.25)",
}

const transformKey = key => "--" + key

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
}

let logoChange = document.querySelector("#logo")

checkbox.addEventListener("change", ({target}) => {
  target.checked ? localStorage.setItem("mode", "darkMode") : localStorage.setItem("mode", "lightMode")
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
}) 

window.onload = () => {
  if(!localStorage.getItem("mode")){
    changeColors(initialColors)
  }
  else if(localStorage.getItem("mode") == "lightMode"){
    changeColors(initialColors)
  }
  else {
    changeColors(darkMode)
    checkbox.checked = true
  }
}