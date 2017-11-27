'use strict';

(function () {

  var randomArrOn = function (arr) {
    arr.sort(function () {
      return Math.random() - 0.5;
    }).slice();
    return arr;
  };

  var mapArr = [];
  var idArr = randomArrOn(window.CONSTANTS.id);
  var titleArr = randomArrOn(window.CONSTANTS.titles);
  var typeArr = randomArrOn(window.CONSTANTS.types);
  var checkinArr = randomArrOn(window.CONSTANTS.checkin);
  var checkout = randomArrOn(window.CONSTANTS.checkout);
  var featuresArr = randomArrOn(window.CONSTANTS.features);

  for (var i = 0; i < 8; i++) {
    mapArr[i] = {
      'author': {
        'avatar': 'img/avatars/user0' + idArr[i] + '.png'
      },
      'offer': {
        'title': titleArr[i],
        'address': 'location.x, location.y',
        'price': window.CONSTANTS.random(1000, 1000000),
        'type': typeArr[window.CONSTANTS.random(0, 2)],
        'rooms': window.CONSTANTS.random(1, 5),
        'guests': window.CONSTANTS.random(1, 20),
        'checkin': checkinArr[window.CONSTANTS.random(0, 2)],
        'checkout': checkout[window.CONSTANTS.random(0, 2)],
        'features': featuresArr.slice([window.CONSTANTS.random(0, 6)]),
        'description': '',
        'photos': []
      },
      'location': {
        'x': window.CONSTANTS.random(300, 900),
        'y': window.CONSTANTS.random(100, 500),
      }
    };
  }
  // пины
  var map = document.querySelector('.map');
  map.classList.remove('map--faded');

  var mapPins = document.querySelector('.map__pins');

  var fragment = document.createDocumentFragment();

  for (var j = 0; j < 8; j++) {
    var pin = document.createElement('button');
    pin.className = 'map__pin';
    pin.setAttribute('style', 'left: ' + mapArr[j].location.x + 'px; top: ' + mapArr[j].location.y + 'px;');
    pin.innerHTML = '<img src=' + mapArr[j].author.avatar + ' width="40" height="40" draggable="false">';

    fragment.appendChild(pin);
  }
  mapPins.appendChild(fragment);
  // карточка
  var template = document.querySelector('template');
  var card = template.content.querySelector('.map__card');
  card.querySelector('h3').textContent = mapArr[0].offer.title;
  card.querySelector('p small').textContent = mapArr[0].offer.address;
  card.querySelector('.popup__price').textContent = mapArr[0].offer.price + '\u0020\u20BD/ночь';

  var type = function () {
    if (mapArr[0].offer.type === 'flat') {
      return 'Квартира';
    } else if (mapArr[0].offer.type === 'bungalo') {
      return 'Бунгало';
    } else if (mapArr[0].offer.type === 'house') {
      return 'Дом';
    } else {
      return '';
    }
  };
  card.querySelector('h4').textContent = type();

  card.querySelectorAll('p')[2].textContent = mapArr[0].offer.rooms + '\u0020комнаты для\u0020' + mapArr[0].offer.guests + '\u0020гостей';

  card.querySelectorAll('p')[3].textContent = 'Заезд после\u0020' + mapArr[0].offer.checkin + '\u0020выезд до\u0020' + mapArr[0].offer.checkout;

  var popupFeatures = card.querySelector('.popup__features');
  popupFeatures.innerHTML = '';

  for (var h = 0; h < mapArr[0].offer.features.length; h++) {
    var popupFeaturesItem = document.createElement('li');
    popupFeaturesItem.className = 'feature feature--' + mapArr[0].offer.features[h];
    popupFeatures.appendChild(popupFeaturesItem);
  }

  card.querySelectorAll('p')[4].textContent = mapArr[0].offer.description;

  card.querySelector('.popup__avatar').setAttribute('src', mapArr[0].author.avatar);

  map.appendChild(card);

  console.log(mapArr[0]);
})();
