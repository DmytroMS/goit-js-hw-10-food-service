import menuList from './scr/menu.json';
import menuMarkUpTemplate from './templates/menu.hbs';


const menuRef = document.querySelector('.js-menu');
const checkBoxRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');



function createMenuMarkUp(List) {
    return List.map(menuMarkUpTemplate).join('');
};
menuRef.insertAdjacentHTML('afterbegin', createMenuMarkUp(menuList));




// Change theme theme light
checkBoxRef.addEventListener('change', onPressCheckBox);



function onPressCheckBox(event) {
    if (event.target.checked) {
        
        localStorage.setItem("Theme", "dark-theme");
        bodyRef.classList.replace("light-theme", "dark-theme");
             
    } else {
        checkBoxRef.checked = false;
        localStorage.removeItem("Theme");
        localStorage.setItem("Theme", "light-theme");
        bodyRef.classList.replace("dark-theme", "light-theme");
        
    };
   bodyRef.classList.add(localStorage.getItem("Theme"));
   
}


    localStorage.getItem("Theme") === 'dark-theme'
    ? (checkBoxRef.checked = true) : (checkBoxRef.checked = false);
   bodyRef.classList.add(localStorage.getItem("Theme"));









