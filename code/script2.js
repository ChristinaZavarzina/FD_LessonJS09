'use strict'

const task3 = document.querySelector('.task3');
const numTel = document.createElement('input');
numTel.setAttribute('id', 'tel');
numTel.setAttribute('type', 'tel');
numTel.setAttribute('placeholder', '0ХХ-ХХХ-ХХ-ХХ');
// numTel.setAttribute('pattern', /^0\d{2}-\d{3}-\d{2}-\d{2}$/);
task3.append(numTel);
const btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.textContent = "Зберегти"
numTel.after(btn);
btn.onclick = btn__click;



function btn__click () {
  const checkNum = document.getElementById('tel');
  const pattern = /^0\d{2}-\d{3}-\d{2}-\d{2}$/;
  if (pattern.test(checkNum.value)) {
    checkNum.style.background = "rgba(39, 211, 76, 0.5)";
    setTimeout(() => {
      document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
    }, 3000);
    if (document.querySelector('.error__div')) {
      const erdiv = document.querySelector('.error__div');
      erdiv.remove();
    }
  } else if (!document.querySelector('.error__div')) {
    let errorDiv = document.createElement('div');
    errorDiv.classList.add('error__div');
    errorDiv.textContent = 'Невірний формат';
    checkNum.before(errorDiv);
  }
}
