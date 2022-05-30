addEventListener('DOMContentLoaded', () =>{
    const buttom_menu = document.querySelector('.buttom_menu')
    if (buttom_menu){
        buttom_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})