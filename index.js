import menuList from './scr/menu.json';
import menuMarkUpTemplate from './templates/menu.hbs';


const menuRef = document.querySelector('.js-menu');




function createMenuMarkUp(List) {
    return List.map(menuMarkUpTemplate).join('');
};


menuRef.insertAdjacentHTML('afterbegin', createMenuMarkUp(menuList));

