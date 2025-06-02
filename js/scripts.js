function openModal(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal").style.width = "100%";
    document.getElementById("modal").style.alignItems = "center";
    document.getElementById("modal").style.justifyContent = "center";
    document.getElementById("modalImg").src = img.src;
    document.getElementById("modalImg").style.width = "30%";
}

function closeModal() {
    document.getElementById("modal").

style.display = "none";
}

// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// ********* SIDEBAR **************

// Supprimer la class active pour tout les menus
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// PERSONNALISATION DU THEME

// Ouvrir le Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Fermeture du modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// Fermer le Modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// ******* POLICE ********

// Suppression de la class active span pour le selecteur de la taille de police
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // Changement de la taille de police via les toutes HTML
        document.querySelector('html').style.fontSize = fontSize;
    })

})


const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Changement de la couleur de base
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // Suppression de la class active pour couleurs
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// VALEURS DES THEMES DE L'ARRIERE-PLAN
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changement du couleur de l'arrière-plan
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

// Changement des couleurs de l'arrrière-plan
Bg1.addEventListener('click', () => {
    // Ajout de la class active
    Bg1.classList.add('active');
    // Suppression de la class active pour les autres
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // Suppression de la personnalisation stocker sur le local
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // Ajout de la class active
    Bg2.classList.add('active');
    // Suppression de la class active pour les autres
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // Ajout de la class active
    Bg3.classList.add('active');
    // Suppression de la class active pour les autres
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});
