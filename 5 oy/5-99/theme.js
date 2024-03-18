let themeBtn = document.querySelector('#themeController');
let ThemeColors = [
    "light", 
    "dark", 
    "cupcake", 
    "bumblebee", 
    "emerald", 
    "corporate", 
    "synthwave", 
    "retro", 
    "cyberpunk", 
    "valentine", 
    "halloween", 
    "garden", 
    "forest", 
    "aqua", 
    "lofi", 
    "pastel", 
    "fantasy", 
    "wireframe", 
    "black", 
    "luxury", 
    "dracula", 
    "cmyk", 
    "autumn", 
    "business", 
    "acid", 
    "lemonade", 
    "night", 
    "coffee", 
    "winter", 
    "dim", 
    "nord", 
    "sunset", 
]; 
let htmlElement = document.querySelector('html');
let selectorTheme = ThemeColors[17]; 
htmlElement.setAttribute('data-theme', selectorTheme);

ThemeColors.map(item => {
    let buttonTheme = document.querySelector('li')
    buttonTheme.textContent = item;
    buttonTheme.setAttribute('data-theme', item); 
    buttonTheme.classList.add('text-center', 'py-2');

    buttonTheme.addEventListener('click', function() {
        htmlElement.setAttribute('data-theme', item);
    });
    themeBtn.append(buttonTheme);
});
