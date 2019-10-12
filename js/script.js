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

  var mapImage = document.querySelector('.modal-map-image');

  ymaps.ready(init);
  function init () {
    mapImage.classList.add('map-hide');
    
    var myMap = new ymaps.Map('yandexmap', {
      center: [59.938900, 30.323055],
      zoom: 16
    }),
  
    myPlacemark = new ymaps.Placemark([59.938630, 30.323055], {
      hintContent: 'Магазин Техномарт'
    })
    
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  };

  var slides = document.querySelectorAll('.slider-item');
  var previousButton = document.querySelector('.slider-arrow-left');
  var nextButton = document.querySelector('.slider-arrow-right');
  var controlsRadio = document.querySelectorAll('.slider-radio-control');
  var previousSlide = 0;
  var currentSlide = 0;

  var getArrowButtonSlide = function (i) {
    previousSlide = currentSlide;
    currentSlide = (i + slides.length) % slides.length;
    changeActiveSlide();
  };

  nextButton.addEventListener('click', function () {
    getArrowButtonSlide(currentSlide + 1);
  });

  previousButton.addEventListener('click', function () {
    getArrowButtonSlide(currentSlide - 1);
  });

  var getRadioButtonSlide = function (i) {
    controlsRadio[i].addEventListener('click', function () {
      previousSlide = currentSlide;
      currentSlide = i;
      changeActiveSlide();
    });
  };

  for (var i=0; i<controlsRadio.length; i++) {
    getRadioButtonSlide(i);
  }

  var changeActiveSlide = function () {
    slides[previousSlide].classList.remove('slider-item-active');
    slides[currentSlide].classList.add('slider-item-active');
    controlsRadio[previousSlide].classList.remove('slider-radio-control-active');
    controlsRadio[currentSlide].classList.add('slider-radio-control-active');
  };

  var servicesItem = document.querySelectorAll('.services-decription-item');
  var servicesButton = document.querySelectorAll('.services-button');
  var previousItem = 0;
  var currentItem = 0;

  var getTabButtonItem = function (i) {
    servicesButton[i].addEventListener('click', function () {
      previousItem = currentItem;
      currentItem = i;
      changeActiveItem();
    });
  };

  for (var i=0; i<servicesButton.length; i++) {
    getTabButtonItem(i);
  }

  var changeActiveItem = function () {
    servicesItem[previousItem].classList.remove('decription-item-active');
    servicesItem[currentItem].classList.add('decription-item-active');
    servicesButton[previousItem].classList.remove('services-button-active');
    servicesButton[currentItem].classList.add('services-button-active');
  };
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