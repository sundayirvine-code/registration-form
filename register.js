var myInput2 = document.getElementById("pwd_confirm");
var btn = document.getElementById('reg-btn');
var myInput = document.getElementById("pwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var myInput3 = document.getElementById('email')
var myInput4 =document.getElementById('email_confirm')

// Example starter JavaScript for disabling form submissions if there are invalid fields


// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }
        //confirm password
        if(myInput.value != myInput2.value){
        document.getElementById('match2').innerHTML='Passwords must match'
        document.getElementById('match2').style.color="red";
        event.preventDefault()
        event.stopPropagation()        
        }
        if(myInput3.value != myInput4.value){
            document.getElementById('match_email').innerHTML='Email Addresses must match'
            document.getElementById('match_email').style.color="red";
            event.preventDefault()
            event.stopPropagation() 
        }
        
        form.classList.add('was-validated')
    }, false)
    })


//other custom validations

myInput3.onkeyup =()=>{
            //confirm email
    if(myInput3.value == myInput4.value){
        document.getElementById('match_email').innerHTML='Valid'
        document.getElementById('match_email').style.color="green";
    }
    else{
        document.getElementById('match_email').innerHTML='Email Addreses must match'
        document.getElementById('match_email').style.color="red";
    }
}

myInput4.onkeyup =()=>{
            //confirm email
    if(myInput3.value == myInput4.value){
        document.getElementById('match_email').innerHTML='Valid'
        document.getElementById('match_email').style.color="green";
    }
    else{
        document.getElementById('match_email').innerHTML='Email Addreses must match'
        document.getElementById('match_email').style.color="red";
    }
}
// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
document.getElementById("message").style.display = "block";
}
// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
} else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
} else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
} else {
    number.classList.remove("valid");
    number.classList.add("invalid");
}

// Validate length
if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
} else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}

//confirm password
if(myInput.value == myInput2.value){
    document.getElementById('match2').innerHTML='Valid'
    document.getElementById('match2').style.color="";
}
else{
    document.querySelector('form').classList.add('was-validated')
    document.getElementById('match2').innerHTML='Passwords must match'
    document.getElementById('match2').style.color="red";
    return false;
}


}


myInput2.onkeyup=()=>{
    if(myInput.value == myInput2.value){
        document.getElementById('match2').innerHTML='Valid'
        document.getElementById('match2').style.color="";
    }
    else{
        document.querySelector('form').classList.add('was-validated')
        document.getElementById('match2').innerHTML='Passwords must match'
        document.getElementById('match2').style.color="red";
        return false;
    }
}
