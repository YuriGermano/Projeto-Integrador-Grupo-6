let car_bene = document.getElementById('beneficiosCard');
let car_male = document.getElementById('maleficiosCard');
let btnBene = document.getElementById('btnBene');
let btnMale = document.getElementById('btnMale');
let cards = document.getElementsByClassName("card");


btnBene.addEventListener('click', () => {
    if (car_bene.style.display == 'block') {
        car_bene.style.display = 'none';
    }
    
    else {
        car_bene.style.display = 'block';
        car_male.style.display = 'none';
    }

});

btnMale.addEventListener('click', () => {
    if (car_male.style.display == 'block') {
        car_male.style.display = 'none';
    }
    
    else {
        car_male.style.display = 'block';
        car_bene.style.display = 'none';
    }
    
});

