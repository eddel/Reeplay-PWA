function handleClick(event) {
  if (window.innerWidth <= 425) {
    event.preventDefault();

    if (!event.target.matches("button[data-toggle='modal'], img[data-toggle='modal'], div[data-toggle='modal']")) {
      var link = document.querySelector("#viewapp_conntent_btn");
      if (link) {
        link.click();
      }
    }
    
    var dataTarget = event.target.getAttribute("data-target");
    if (dataTarget) {
      var modal = document.querySelector(dataTarget);
      if (modal) {
        modal.classList.remove("show");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
      }
    }
  }
}

// Attach click event handlers to all buttons and images if device width is less than or equal to 425px
if (window.innerWidth <= 425) {
  var elements = document.querySelectorAll("button[data-toggle='modal'], img[data-toggle='modal']");
  elements.forEach(function(element) {
    element.addEventListener("click", handleClick);
    element.removeAttribute("data-toggle");
    element.removeAttribute("data-target");
  });
}


function close_acountapp() {
    $("#appacountt").modal("hide");
}

function close_appc_con() {
    $("#appcontent").modal("hide");
}