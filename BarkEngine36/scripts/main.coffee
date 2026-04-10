# coffee -cw scripts/main.coffee


button1 = document.getElementById "dosomthing"

button1.addEventListener "click", ->
  if Math.random() < 0.5
    window.open "https://en.wikipedia.org/wiki/Productivity", "_blank"
  else
    alert "No productivity today. Try again."

button2 = document.getElementById "playmtt"

button2.addEventListener "click", ->
  window.open "game.html", "_blank"

button3 = document.getElementById "startgame"

button3.addEventListener "click", ->
  window.open "game2.html", "_blank"