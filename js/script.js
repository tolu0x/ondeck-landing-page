const menu = document.querySelector('.nav-links')
const menuItems = document.querySelectorAll('.nav-links > li')
const hamburger = document.querySelector('.hamburger')
const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')


function showMenu(){
    if(menu.classList.contains('show-menu')){
        menu.classList.remove('show-menu')

        closeBtn.style.display = 'none';
        menuBtn.style.display = 'block'
    } else{
        menu.classList.add('show-menu')

        closeBtn.style.display = 'block';
        menuBtn.style.display = 'none';
    }
}

hamburger.addEventListener('click', showMenu)

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener('click', showMenu)
    }
)