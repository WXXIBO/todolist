// let array = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

// console.log(array)
// console.log(array[7])

let input1 = document.querySelector('#Login')
let button = document.querySelector('button')

let backend = [
    { login: "umarSotaqozi", password: "umar14"},
    { login: "ibrohim15", password: "12345678"},
    { login: "nigina13", password: "21212112"},
    { login: "ibolee", password: "hayosiz"},
    { login: "Bekzod", password: "hunuuu"},
    { login: "avaz", password: "12121212"},
    { login: "ismoil", password: "6666"},
    { login: "Mirfayoz", password: "mirfayoz14"},
    { login: "abdurahmon", password: "abdurahmon"},
]

button.addEventListener('click', (event) => {
    event.preventDefault()

    let find = backend.find(ibo => ibo.login === input1.value &&
    )
})