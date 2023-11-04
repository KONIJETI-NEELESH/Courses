const div1 = document.querySelector('#Btn1')
const div2 = document.querySelector('#Btn2')
const div3 = document.querySelector('#Btn3')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
div1.classList.add('button1')
div2.classList.add('button2')
div3.classList.add('button3')
btn1.addEventListener('click',()=>
{
    div1.classList.remove('button1')
    div2.classList.add('button2')
    div3.classList.add('button3')
})
btn2.addEventListener('click',()=>
{
    div1.classList.add('button1')
    div2.classList.remove('button2')
    div3.classList.add('button3')
})
btn3.addEventListener('click',()=>
{
    div1.classList.add('button1')
    div2.classList.add('button2')
    div3.classList.remove('button3')
})