const inputs = document.querySelectorAll('input');

const patterns = {
    firstname: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
    lastname: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phonenumber: /^(\+?\s*(\d\s*){7,15})$/,
    password: /^([a-zA-Z0-9@#$_]{8,10})$/,
    passwordcheck: /^([a-zA-Z0-9@#$_]{8,10})$/
}

//validation function
function validate(field, regx){
    if(regx.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target,patterns[e.target.attributes.name.value]);

        if((e.target.attributes.name.value).localeCompare("passwordcheck") == 0){
            confirmPassword(e.target);
        }
    });
});

function confirmPassword(field){
    const password = document.querySelector('#pw1').value;
    if(password.localeCompare(field.value) == 0){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}