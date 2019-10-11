var indexPage = document.querySelector('.index-page');


if (indexPage) {
  var mapLink = document.querySelector('.contacts-map-link');

  var popupMap = document.querySelector('.modal-map');
  var mapClose = popupMap.querySelector('.close-button');

  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show');
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.remove('modal-show');
  });
  
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains('modal-show')) {
        popupMap.classList.remove('modal-show');
      }
    }
  });

  var feedbackLink = document.querySelector('.contacts-button');

  var popupFeedback = document.querySelector('.modal-feedback');
  var feedbackClose = popupFeedback.querySelector('.close-button');

  var feedbackForm = popupFeedback.querySelector('.feedback-form');
  var feedbackName = feedbackForm.querySelector('[name=feedback-name]');
  var feedbackEmail = feedbackForm.querySelector('[name=feedback-email]');
  var feedbackMessage = feedbackForm.querySelector('[name=feedback-message]');

  feedbackLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('modal-show');
    feedbackName.focus();
  });

  feedbackClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal-show');
    feedbackName.classList.remove('input-error');
    feedbackEmail.classList.remove('input-error');
    feedbackMessage.classList.remove('input-error');
    feedbackForm.reset();
  });

  feedbackForm.addEventListener('submit', function (evt) {
    if (!feedbackName.value) {
      evt.preventDefault();
      feedbackName.classList.add('input-error');
    } else {
      feedbackName.classList.remove('input-error');
    }
    if (!feedbackEmail.value) {
      evt.preventDefault();
      feedbackEmail.classList.add('input-error');
    } else {
      feedbackEmail.classList.remove('input-error');
    }
    if (!feedbackMessage.value) {
      evt.preventDefault();
      feedbackMessage.classList.add('input-error');
    } else {
      feedbackMessage.classList.remove('input-error');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupFeedback.classList.contains('modal-show')) {
        popupFeedback.classList.remove('modal-show');
        feedbackName.classList.remove('input-error');
        feedbackEmail.classList.remove('input-error');
        feedbackMessage.classList.remove('input-error');
        feedbackForm.reset();
      }
    }
  });
}

var catalog = document.querySelector('.catalog-list');
var catalogItem = catalog.querySelectorAll('.catalog-item');

var popupAddItem = document.querySelector('.modal-cart');
var continueButton = popupAddItem.querySelector('.continue-button');
var addItemClose = popupAddItem.querySelector('.close-button');

for (var i = 0; i < catalogItem.length; i++) {
  var buyLink = catalogItem[i].querySelector('.button-buy');
  
  buyLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupAddItem.classList.add('modal-show');
  });
}

continueButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupAddItem.classList.remove('modal-show');
});

addItemClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupAddItem.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupAddItem.classList.contains('modal-show')) {
      popupAddItem.classList.remove('modal-show');
    }
  }
});