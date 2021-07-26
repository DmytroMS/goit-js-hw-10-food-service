import menuList from './scr/menu.json';
import menuMarkUpTemplate from './templates/menu.hbs';


const menuRef = document.querySelector('.js-menu');
const checkBoxRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};




function createMenuMarkUp(List) {
    return List.map(menuMarkUpTemplate).join('');
};

menuRef.insertAdjacentHTML('afterbegin', createMenuMarkUp(menuList));

//     localStorage.getItem("Theme") === 'light-theme'
//   ? (checkBoxRef.checked = false)
//         : (checkBoxRef.checked = true);


// Change theme theme light
checkBoxRef.addEventListener('change', onPressCheckBox);

function onPressCheckBox(event) {
  
    if (localStorage.getItem("Theme") === "light-theme") {
        bodyRef.classList.remove(localStorage.getItem("Theme"));
        localStorage.clear();
        checkBoxRef.checked = true;
        localStorage.setItem("Theme", "dark-theme");
      
        
        
    } else {
        bodyRef.classList.remove(localStorage.getItem("Theme"));
        localStorage.clear();
        checkBoxRef.checked = false;
        localStorage.setItem("Theme", "light-theme");
        
    };
   bodyRef.classList.add(localStorage.getItem("Theme"));
   
}


localStorage.getItem("Theme") === 'dark-theme'
    ? (checkBoxRef.checked = true) : (checkBoxRef.checked = false);
     bodyRef.classList.add(localStorage.getItem("Theme"));




