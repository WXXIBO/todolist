let body = document.querySelector('body') 
let cards = document.querySelector('#cards') 
 
fetch('https://dummyjson.com/products') 
    .then(cola => cola.json()) 
    .then(malumot => { 
        console.log(malumot) 
 
        malumot.products.map(bolasi => { 
            let card = document.createElement('div') 
 
            card.classList.add('flex', 'flex-col', 'flex-1', 'text-sm', 'shadow', 'shadow-slate-500', 'p-3', 'rounded-lg', 'min-w-52') 
             
            card.innerHTML = ` 
                    <div class="flex"> 
                        <img src=${bolasi.thumbnail} class="w-full h-52 object-cover" 
                            alt=""> 
                    </div> 
 
                    <div class="flex flex-col gap-5"> 
                        <h3 class="text-lg h-14 my-2">${bolasi.title}</h3> 
                        <div class="flex items-center w-full justify-between text-xs"> 
                            <p>brand: ${bolasi.brand}</p> 
                            <p>category: ${bolasi.category}</p> 
                        </div> 
                        <div class="flex items-center justify-between"> 
                            <p class="text-xs h-24"> 
                                ${bolasi.description} 
                            </p> 
 
                        </div> 
 
                        <div class="flex items-center justify-between"> 
                            <p>stock: ${bolasi.stock}</p> 
                            <p>rating: ${bolasi.rating}</p> 
                        </div> 
 
                        <div class="flex items-center justify-between"> 
                            <p> 
                                <span class="border bg-emerald-500 px-10 py-2 rounded-lg">$${bolasi.price}</span> 
                            </p> 
                            <button 
                                class="border border-emerald-500 py-2 px-10 rounded-lg text-emerald-500 hover:bg-emerald-500 hover:text-white">Buy</button> 
                        </div> 
 
                    </div> 
            ` 
 
            cards.append(card) 
 
            console.log(bolasi) 
        }) 
    }) 
    .catch(error => console.log("error:", error)) 
    .finally("Pawol naxot")




<script>
// Получаем ссылку на кнопку
var buyButton = document.getElementById('buyButton');

// Добавляем обработчик события "click" на кнопку
buyButton.addEventListener('click', function() {
  // При событии "click" вызываем функцию, которая выводит предупреждение
  alert('Куплено');
});
</script>