function openloginpage() {
    document.getElementById('login-container').style.display = "flex"
}

function opensignuppage() {
    document.getElementById('signup-container').style.display = "flex"
}


const SignUp = document.querySelector("#sign");
const SignIn = document.querySelector("#enter");
const LoginUsername = document.querySelector("#myname");
const SignupUsername = document.querySelector("#username");
const FirstName = document.querySelector("#firstname");
const LastName = document.querySelector("#lastname");
const Email = document.querySelector("#mymail");
const SignUpPass = document.querySelector("#mypassword");
const SignInPass = document.querySelector("#mypassword1");

const signUpButton = document.querySelector('#signUpButton');
const signInButton = document.querySelector('#signInButton');
const Home = document.querySelector('#Home');

const nameRegex = /^[a-zA-Z]+$/;
const Passwrdformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

SignUp.addEventListener('click', () => {
    console.log("NUll")
    if (FirstName.value.length > 0 && LastName.value.length > 0 && Email.value.length > 0 && SignupUsername.value.length > 0) {
        if (SignUpPass.value.length >= 8) {
            if (FirstName.value.match(nameRegex) || LastName.value.match(nameRegex) || Email.value.match(mailformat) || SignupUsername.value.match(nameRegex) || SignUpPass.value.match(Passwrdformat)) {
                alert("Hi, " + SignupUsername.value + "!");
                FirstName.value = "";
                LastName.value = "";
                SignupUsername.value = "";
                Email.value = "";
                SignUpPass.value = "";
                Home.classList.remove("right-panel-active");
            } else {
                alert("Invalid Inputs");
            }
        } else {
            alert("Password must have at least 8 characters")
        }

    } else {
        alert("Empty field, input items");
    }
})



SignIn.addEventListener('click', () => {
    console.log("Null")
    if (LoginUsername.value.length > 0 && SignInPass.value.length > 0) {
        console.log(LoginUsername.value);
        console.log(SignInPass.value);
        if (LoginUsername.value.match(nameRegex) || SignInPass.value.match(Passwrdformat)) {
            alert("Welcome, " + LoginUsername.value + "!");
            var url = './test.html';
            window.open(url, '_self');
            return;
        } else {
            alert("Invalid Username or Password");
            LoginUsername.value = "";
            SignInPass.value = "";
            Home.classList.add("right-panel-active");
        }
    } else {
        alert("Empty field, input items");
    }
});



signUpButton.addEventListener('click', () => {
    console.log("SIGN UP");
    Home.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    console.log("SIGN OUT");
    Home.classList.remove("right-panel-active");
});


