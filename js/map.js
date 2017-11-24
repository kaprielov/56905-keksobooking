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

  var test = document.createElement('div');
  test.className = 'test';


  console.log(mapArr);
})();
