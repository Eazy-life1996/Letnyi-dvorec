'use strict';

const MIN_NUM = 3;
const MAX_NUM = 30;

let userName = document.querySelector('.js-user-name');

userName.addEventListener('input', function () {
  let valueLength = userName.value.length;

  if (valueLength < MIN_NUM) {
    userName.setCustomValidity('Имя не может состоять меньше чем из 3 символов введите еще ' + (MIN_NUM - valueLength) + ' симв.');
  } else if (valueLength > MAX_NUM) {
    userName.setCustomValidity('Имя не может быть длинее 30 сиволов удалите лишние ' (valueLength - MAX_NUM) + ' симв.');
  } else {
    userName.setCustomValidity('');
  }

  userName.reportValidity();
});