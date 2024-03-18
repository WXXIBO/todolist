    let contact = document.querySelector('#contact')
    let input = document.querySelectorAll('#forma input')
    let button = document.querySelector('#forma button')

    let database = [

    ]

    function showList(db) {

        db.map(item => {
            let block = document.createElement('div')

            block.classList.add('flex', 'items-center', 'justify-between', 'font-bold', 'border', 'p-4', 'rounded-2x1')

            block.innerHTML = `
            <img class="w-14 h-14 rounded-full" src=${item.avatar} alt=""> 
            <span></span> 
            <span>+998 99 1234567</span>`
        })
    }
