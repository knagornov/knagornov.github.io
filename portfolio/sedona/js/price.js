function inputResizing (input, charWidth) { 
  function resize() {
  	input.style.width = ((input.value.length+1) * charWidth) + "px";
  }
  var events = "keyup,keypress,focus,blur,change".split(',');
  for (var i in events) input.addEventListener(events[i], resize, false);
  resize();
}

inputResizing(document.querySelector(".min-price"), 8);
inputResizing(document.querySelector(".max-price"), 8);