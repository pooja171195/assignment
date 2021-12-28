document.querySelector('.btns').addEventListener('click', signup)

var userDetails = [];

function signup(e){
    e.preventDefault();
    var user = document.querySelector('.user').value
    var contact = document.querySelector('.contact').value
    var email = document.querySelector('.email').value
    var pass = document.querySelector('.pass').value
    var confirm = document.querySelector('.confirm').value
    if (user.length == 0 || contact.length == 0 || email.length == 0 || pass.length == 0 || confirm == 0) {
        alert('fill credentials')
    }

    //console.log(user, contact, email)
    var obj = {
        name: user,
        contact: contact,
        emailID: email,
        password: pass,
        confirm: confirm,

    }
   // console.log(obj)
    if (pass == confirm) {
        userDetails.push(obj)
        localStorage.setItem("userData", JSON.stringify(userDetails));
         window.location.href = "login.html"
        
    }
    else{
        alert("password doesn't match")
    }
    // userDetails.push(obj)
    // localStorage.setItem("userData", JSON.stringify(userDetails));
    //  window.location.href = "login.html"
  
}