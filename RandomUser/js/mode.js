const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

darkBtn.addEventListener('click',function(){
    darkBtn.classList.add('hidden')
    lightBtn.classList.remove('hidden')
    body.classList.add('dark-mode')
})
lightBtn.addEventListener('click',()=>{
    lightBtn.classList.add('hidden')
    darkBtn.classList.remove('hidden')
    body.classList.remove('dark-mode')
})
