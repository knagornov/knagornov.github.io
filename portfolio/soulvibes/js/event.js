var events=document.querySelectorAll(".event__title");document.addEventListener("click",function(e){if(e.target.classList.contains("event__link")){e.preventDefault();for(var t=0;t<events.length;t++)events[t]!==e.target.closest(".event__title")&&events[t].classList.remove("event__title--show-details");e.target.closest(".event__title").classList.toggle("event__title--show-details")}},!1);