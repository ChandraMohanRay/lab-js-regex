/* Fill your code*/
/* Fill your code*/
function formValidate(){
    var name=document.forms['RegForm']['Name']
    var email=document.forms['RegForm']['EMail']
    var phone=document.forms['RegForm']['phone']
    var password=document.forms['RegForm']['Password']
    var cpassword=document.forms['RegForm']['cPassword']
    var address=document.forms['RegForm']['Address']
    
    var errorname =document.getElementById('name')
    var erroremail =document.getElementById('email')
    var erroraddress =document.getElementById('address')
    var errorpassword =document.getElementById('pwd')
    var errorcpassword =document.getElementById('cpwd')
    var errorphone =document.getElementById('phone')
    
    var submit=document.getElementById('Submit')
    
    if(name.value.length <8 || name.value.length >15){
        errorname.innerText="atleast 8 to 15 characters reqired"
        name.focus();
       return false
    }
    else{
        errorname.innerText=" "
        
    }
    if(address.value == ''){
        erroraddress.innerText='kindly fill address field'
        address.focus();
        return false
        
    }
    else{
        erroraddress.innerText=''
    }
    if (email.value == ''){
        erroremail.innerText='fill the email id'
        email.focus();
        return false
        
    }
    else if(/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]+)(.[a-z]+)?$/.test(email.value)){
        erroremail.innerText=''
        
    
    }
    else{
        erroremail.innerText= 'Enter valid Email'
        email.focus();
    return false;
        
    }
    if(password.value == ''){
        errorpassword.innerText=' enter your  password'
       password.focus();
        return false
        
    }
    else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password.value)){
        errorpassword.innerText=''
    }
    else{
        errorpassword.innerText='Plese fill password in corrct pattern'
        errorpassword.focus();
    return false;
        
    }
    if(cpassword.value == password.value){
        errorcpassword.innerText=''
        cpassword.focus()
        return false
        
    }
    else{errorcpassword.innerText='Entered password is not same'
        }
    
    if(phone.value == ''){
        errorphone.innerText='phone no cannot be blank'
        return false
       
    }
    else if(/^[6-9]\d{9}/.test(phone.value)){
        errorphone.innerText=''
    }
    else{
        errorphone.innerText='phoneno should be 10 digit number'
        
    }
    Submit.innerText='Regex Validation Sucess'
    
    
    
    }
