'use strict';

/* global Swiper */

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide-menu') {
    document.body.classList.add('body__lock');
  } else {
    document.body.classList.remove('body__lock');
  }
});

// assign class when button clicked
document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.materials__circle');

  circles.forEach(function(circle) {
    const card = circle.nextElementSibling;

    circle.addEventListener('click', function() {
      if (card.classList.contains('clicked')) {
        card.classList.remove('clicked');
        circle.classList.remove('materials__circle--clicked');
      } else {
        card.classList.add('clicked');
        circle.classList.add('materials__circle--clicked');
      }
    });
  });
});

// clear form
function submitForm() {
  const form = document.getElementById('form');

  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  submitForm();
});

// reset swiper
function handleResize() {
  window.location.reload();
}

window.addEventListener('resize', handleResize);

document.querySelector('.not-ready').addEventListener('click', function() {
  document.querySelector('.not-ready-text').style.display = 'block';
});

let volumeLargePot = 0;
let volumeSmallPot = 0;
let valueLargePot = 0;
let valueSmallPot = 0;
let valueTotal = 0;
let volumeTotal = 0;
const PRICE_SMALL_POT = 4.5;
const PRICE_LARGE_POT = 7.5;

function updateLargePot(item) {
  volumeLargePot = volumeLargePot + item;
  valueLargePot = volumeLargePot * PRICE_LARGE_POT;
  updateTotal();

  document.querySelector('.basket__volume-large-pot')
    .textContent = volumeLargePot;

  document.querySelector('.basket__value-large-pot')
    .textContent = `$ ` + valueLargePot.toFixed(2);
}

function updateSmallPot(item) {
  volumeSmallPot = volumeSmallPot + item;
  valueSmallPot = volumeSmallPot * PRICE_SMALL_POT;
  updateTotal();

  document.querySelector('.basket__volume-small-pot')
    .textContent = volumeSmallPot;

  document.querySelector('.basket__value-small-pot')
    .textContent = `$ ` + valueSmallPot.toFixed(2);
}

function updateTotal() {
  valueTotal = valueSmallPot + valueLargePot;
  volumeTotal = volumeLargePot + volumeSmallPot;
  document.querySelector('.basket__volume-total').textContent = volumeTotal;
  document.querySelector('.basket__value-total').textContent = `$ ` + valueTotal.toFixed(2);
  document.querySelector('.header__product-number').textContent = volumeTotal;
}

document.querySelector('.basket__plus.small-pot')
  .addEventListener('click', function() {
    updateSmallPot(1);
  });

document.querySelector('.basket__minus.small-pot')
  .addEventListener('click', function() {
    updateSmallPot(-1);
  });

document.querySelector('.basket__plus.large-pot')
  .addEventListener('click', function() {
    updateLargePot(1);
  });

document.querySelector('.basket__minus.large-pot')
  .addEventListener('click', function() {
    updateLargePot(-1);
  });
