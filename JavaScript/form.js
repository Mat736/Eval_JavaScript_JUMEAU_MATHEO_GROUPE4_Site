/* Le Formulaire */
let form = document.querySelector('form');
form.addEventListener('submit', function(formSubmit){
    formSubmit.preventDefault();

    /* récupération des ID pour les imbriquer dans des variables */
    const pseudo = document.getElementById('pseudo')
    const password = document.getElementById('password')
    const password2 = document.getElementById('password2')
    let ok = true

    pseudo.classList.remove('input-error', 'input-ok');
    password.classList.remove('input-error', 'input-ok');
    password2.classList.remove('input-error', 'input-ok');


    if (pseudo.value.length < 6){
        pseudo.classList.add('input-error');
        ok = false
    } else{
        pseudo.classList.add('input-ok');
    }

    if (password.value.length < 8){
        password.classList.add('input-error');
        ok = false
        } else{
            password.classList.add('input-ok');
        }

    if (password.value != password2.value || password2.value.length === 0){
        password2.classList.add('input-error');
        ok = false
    }else{
        password2.classList.add('input-ok');
    }
    if (ok == true){
        alert('Formulaire envoyé !');
    }else{
        alert('Formulaire incomplet !');
    }

})