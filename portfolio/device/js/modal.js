var mapLink = document.querySelector(".map-link");
var modalMap = document.querySelector(".modal-map"); 
var mapClose = modalMap.querySelector(".modal-close");
           
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
  if (modalFeedback.classList.contains("modal-show")) {
    modalFeedback.classList.remove("modal-show");
  }    
});
      
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});


var feedbackButton = document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".modal-feedback");     
var feedbackForm = modalFeedback.querySelector(".feedback");
var feedbackClose = modalFeedback.querySelector(".modal-close");

var nameField = modalFeedback.querySelector("[name=name]");
var emailField = modalFeedback.querySelector("[name=email]");
var messageField = modalFeedback.querySelector("[name=message]");

var nameStorage = localStorage.getItem("nameField");
var emailStorage = localStorage.getItem("emailField");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  if (nameStorage && emailStorage) {
    nameField.value = nameStorage;
    emailField.value = emailStorage;
    messageField.focus();
  } else {
    nameField.focus();    
  }
  if (modalMap.classList.contains("modal-show")) {
    modalMap.classList.remove("modal-show");
  }      
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!nameField.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
    nameField.focus();
  } else if (!emailField.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
    emailField.focus();
  } else if (!messageField.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
    messageField.focus();
  } else {
    localStorage.setItem("nameField", nameField.value);
    localStorage.setItem("emailField", emailField.value);
  }
});
      
feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
    if (modalFeedback.classList.contains("modal-show")) {
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});
