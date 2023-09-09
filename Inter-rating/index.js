const btn_submit = document.querySelector('.btn__submit')
const card = document.querySelector('.main');
const btnOfValue = document.querySelectorAll('.btn');
let value = 0;

btnOfValue.forEach((btn) => btn.addEventListener('click', ()=>{
    value = parseInt(btn.innerText);    
}))


btn_submit.addEventListener("click", ()=>{
    card.innerHTML = `<div class="thank__container">
    <img src="./assets/images/illustration-thank-you.svg" class="thank_img" alt="">
    <span class="rating_result">You selected ${value} out 5</span>
    <h2 class="main__title">Thank You!</h2>
    <p class="main__paragraph">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  </div>`
})

