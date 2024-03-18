let body = document.querySelector('body')
let switchButton = document.querySelector('#switch')
let switchButtonCircle = document.querySelector('#switch div')

let knopkaholati = true

switchButton.addEventListener('click' , function () {
    console.log("clicked")


    if(knopkaholati) {
        body.classList.add('bg-white')
        body.classList.remove('bg-zinc-800')


        switchButtonCircle.classList.add('translate-x-20')
        switchButtonCircle.classList.remove('translate-x-0')
        
        switchButton.classList.add('bg-emeralt-700')
        switchButton.classList.remove('bg-red-600')


        knopkaholati = false
    } else {
        body.classList.add('bg-zing-800')
        body.classList.remove('bg-white')

        switchButtonCircle.classList.add('translate-x-0')
        switchButtonCircle.classList.remove('translate-x-20')

        switchButton.classList.add('bg-red-600')
        switchButton.classList.remove('bg-emerald-700')

        knopkaholati = true
    }
})

console.log(switchButton)