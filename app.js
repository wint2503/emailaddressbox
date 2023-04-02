var getemail = document.getElementById('email');
var gettextarea = document.querySelector('textarea');
var getbtn = document.querySelector('.btn')
var getemailcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
    createemaillist(e.target.value);
})

function createemaillist(inputtext){
    console.log(inputtext);
}