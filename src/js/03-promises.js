import Notiflix from 'notiflix';

const firstInputEl = document.querySelector('input[name="delay"]');
const secondInputEl = document.querySelector('input[name="step"]');
const thirdInputEL = document.querySelector('input[name="amount"]');
const formEL = document.querySelector('.form');

formEL.addEventListener('submit', event => {
  event.preventDefault();

  let delay = Number(firstInputEl.value);

  for (let i = 1; i <= thirdInputEL.value; i++) {
    if (i > 1) {
      delay += Number(secondInputEl.value);
    };

    createPromise(2, 1500)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
};