// // Функция для создания таймера
// function startTimer(duration, display) {
//     var timer = duration, hours, minutes, seconds;
//     setInterval(function () {
//         hours = parseInt(timer / 3600, 10);
//         minutes = parseInt((timer % 3600) / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         hours = hours < 10 ? "0" + hours : hours;
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = hours + ":" + minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// // Запускаем таймер при загрузке страницы
// window.onload = function () {
//     var duration = 60 * 60, // Продолжительность таймера в секундах (здесь 1 час)
//         display = document.querySelector('#timer'); // Получаем элемент, где будет отображаться таймер
//     startTimer(duration, display);
// };












let opens1 = document.querySelector('.opens')
    opens1.addEventListener('click' , function() {
        console.log('moshina ochild');
    })



let closes = document.getElementById('closes')
closes.addEventListener('click', function(){
    console.log('Moshina yopildi')
})



let engenes = document.getElementById('engenes')
engenes.addEventListener('click', function(){
    console.log('Moshina zavad boldi')
})




let bagajes = document.getElementById('bagajes')
bagajes.addEventListener('click', function(){
    console.log('Bagaj ochildi')
})




























