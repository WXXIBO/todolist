// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// javob:Pasdan yozib keting kodini

alert(5%2)





// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// Javob:Pasdan yozib keting kodini
let random = Math.ceil(Math.random() * 10)




// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// javob: 12 chiqishi kerak!
 

let num = 12.510

alert(Math.floor(num))



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// Javob:Kodini yozib bering 
let abc = "MARS IT SCHOOL"
alert(abc.length)





// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// Javob:Kodini yozib bering
for(let i = 0; i < 10; i++) {
    alert(i + " " + "MARS IT SCHOOL")
}



// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// Javob:Kodini yozib bering
let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]


let firstName = harflar[7] + harflar[1] + harflar[16] + harflar[13] + harflar[6] + harflar[7] + harflar[11];

alert(firstName)





// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Javob:Kodini yozib bering
let yosh = parseInt(prompt("Yoshingizni kiriting:"));

if (yosh > 18) {
    console.log("Siz balog'at yoshiga yetgansiz.");
} else if (yosh < 18) {
    console.log("Siz balog'at yoshiga yetmagansiz.");
} else 
    console.log("Siz balog'at yoshiga muborak.");





// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Javob:Kodini yozib bering

let ism = prompt("Ismingizni kiriting:");

let teskariIsm = ism.split("").reverse().join("");


console.log("Ismingizning teskari:", teskariIsm);





// 9-savol Switch case 


// Promt 1 dan 7 gacha bo'lgan raqam kiriting va kiritilgan raqam qaysi hafta kuniga to'gri kelishini chiqarib bering
// masalan 4 raqamini kiritsam console.log da("Siz kiritgan raqam haftaning Payshanba kuniga to'gri keladi") bo'lib chiqish kerak
// agar kiritilgan raqam 7 dan katta bolsa ya'ni 8 yoki 15 kiritilsa console da (Namalum raqam kiritdingiz ) deb chiqish kerak


// Javob:Kodini yozib bering
let boshArray = [1, 2, 3, 4, 5];

for (let i = 1; i <= 3; i++) {
    boshArray.push(i + 5);
}

let oxirgiElement = boshArray.pop();

console.log("Qolgan elementlar:", boshArray);
console.log("Oxirgi element:", oxirgiElement);






// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring


// Javob :Kodini yozib bering
console.log("\nFor...of loop orqali:");
for (let num of array) {
    if (num % 2 === 0) {
        console.log(num + " juft");
    } else {
        console.log(num + " toq");
    }
}











// let array = [];
// for (let i = 1; i <= 10; i++) {
//     array.push(i);
// }
// console.log("For loop orqali:");
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i] + " juft");
//     } else {
//         console.log(array[i] + " toq");
//     }
// }


// console.log("\nFor...of loop orqali:");
// for (let num of array) {
//     if (num % 2 === 0) {
//         console.log(num + " juft");
//     } else {
//         console.log(num + " toq");
//     }
// }



// let yosh = parseInt(prompt("Yoshingizni kiriting:"));

// if (yosh > 18) {
//     console.log("Siz balog'at yoshiga yetgansiz.");
// } else if (yosh < 18) {
//     console.log("Siz balog'at yoshiga yetmagansiz.");
// } else 
//     console.log("Siz balog'at yoshiga muborak.");



// let ism = prompt("Ismingizni kiriting:");

// let teskariIsm = ism.split("").reverse().join("");


// console.log("Ismingizning teskari:", teskariIsm);






// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// // Объявление переменной с вашим именем
// let firstName = harflar[7] + harflar[1] + harflar[16] + harflar[13] + harflar[6] + harflar[7] + harflar[11];

// alert(firstName)