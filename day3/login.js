document.querySelector('.btns').addEventListener('click',signin)

var regdUser=JSON.parse(localStorage.getItem('userData'))
//console.log(regdUser)
function signin(){
var user=document.querySelector('.user').value
var pass=document.querySelector('.pass').value
//console.log(user,pass)
for (var i=0;i<regdUser.length;i++){
    if((user==regdUser[i].name ||user==regdUser[i].emailID) && pass==regdUser[i].password){
        window.location.href="home.html";
        alert('LogIn Successful');
        break;
    }
    else{
        alert('Invalid Details')
        break;
    }
}
}