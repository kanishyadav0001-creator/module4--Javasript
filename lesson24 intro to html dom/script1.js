function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message').value;
     
    let message = '';
    if (email ==""){
        massage = 'please enter an email.';
        msgBox.style.color = 'red';
    }
    else if (pass ==""){
        massage = 'please enter an password.';
        msgBox.style.color = 'red';
    }
    else if (age ==""){
        massage = 'please enter your age.';
        msgBox.style.color = 'red';
    }
    else {
        massage = 'Login successful!';
        msgBox.style.color = 'green';

    }
    msgBox.innerHTML = message;

}

// run login
document.getElementById("loginForm").onsubmit = validate;

document.getElementById("email").oninput = () => validate;({preventDefault: () => {}});

document.getElementById("password").oninput = () => validate;({preventDefault:() => {}})

document.getElementById("age").oninputt = () => validate;({preventDefault:() =>{}})