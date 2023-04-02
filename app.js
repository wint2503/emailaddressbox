var getemail = document.getElementById('email');
var gettextarea = document.querySelector('textarea');
var getbtn = document.querySelector('.btn')
var getemailcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
    createemaillist(this.value); /*this = e.target*/
    // createemaillist(e.target.value);
})

function createemaillist(inputtext){
    // console.log(inputtext);

    // split method သုံးလိုက်တာနဲ့ array ဖြစ်သွားတယ်
    // array နဲ့ return ပြန်မှ value အများကြီးသုံးရတယ်
    // map method ကလည်း array return ပြန်တယ်

    // const eitems = inputtext.split(',');
    // console.log(eitems);

    // remove empty,empty(space)
    // const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '')
    // console.log(eitems);

    // remove space/empty
    const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '').map(rmempty=>rmempty.trim());
    // console.log(eitems);

    // နောက်ဆုံးအခြေနေတစ်ခုပဲယူမှာမို့ အရှေ့ကဟာတွေကိုဖယ်ထုတ်ပစ်တာ
    getemailcontainer.innerHTML = '';

    eitems.forEach(function(eitem){
        // console.log(eitem);

        const setnewspan = document.createElement('span');
        setnewspan.textContent = eitem;
        setnewspan.classList.add('email-item');
        // console.log(setnewspan)
        getemailcontainer.appendChild(setnewspan);
    })
}

getbtn.addEventListener('click',function(e){
    sendemail();

    e.preventDefault();
})

function sendemail(){
    console.log('i am working');
}