var buttonWriteUs = document.querySelector('.button-write-us');
var mapPopup = document.querySelector('.map-popup');

var modalFeedback = document.querySelector('.modal-feedback');
var modalMap = document.querySelector('.modal-map');
var feedbackClose = modalFeedback.querySelector('.modal-close');
var mapClose = modalMap.querySelector('.modal-close');

var form = modalFeedback.querySelector('form');
var username = modalFeedback.querySelector('[name=username]');
var email = modalFeedback.querySelector('[name=email]');
var message = modalFeedback.querySelector('textarea');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('username');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

buttonWriteUs.addEventListener('click', function (event) {
  event.preventDefault();
  modalFeedback.classList.add('modal-show');

  if (storageName && storageEmail) {
    username.value = storageName;
    email.value = storageEmail;
    message.focus();
  } else {
    username.focus();
  }
});

feedbackClose.addEventListener('click', function (event) {
  event.preventDefault();
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-error');
});

mapPopup.addEventListener('click', function (event) {
  event.preventDefault();
  modalMap.classList.add('modal-show');
});

mapClose.addEventListener('click', function (event) {
  event.preventDefault();
  modalMap.classList.remove('modal-show');
});

form.addEventListener('submit', function (event) {
  if (!username.value || !email.value || !message.value) {
    event.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('email', email.value);
    }
  }
});
