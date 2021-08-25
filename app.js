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
       return false
    }
    else{
        errorname.innerText=" "
        
    }
    if(address.value == ''){
        erroraddress.innerText='kindly fill address field'
        return false
        
    }
    else{
        erroraddress.innerText=''
    }
    if (email.value == ''){
        erroremail.innerText='fill the email id'
        return false
        
    }
    else if(/[a-zA-Z0-9&_@+5.com$]/.test(email.value)){
        erroremail.innerText=''
        
    
    }
    else{
        erroremail.innerText= 'Enter valid Email'
        
    }
    if(password.value == ''){
        errorpassword.innerText=' enter your  password'
        return false
        
    }
    else if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/.test(password.value)){
        errorpassword.innerText=''
    }
    else{
        errorpassword.innerText='Plese fill password in corrct pattern'
    }
    if(cpassword.value == password.value){
        errorcpassword.innerText=''
        return false
        
    }
    else{errorcpassword.innerText='Entered password is not same'}
    
    if(phone.value == ''){
        errorphone.innerText='phone no cannot be blank'
        return false
       
    }
    else if(/^[0-9]{1,10}$/.test(phone.value)){
        errorphone.innerText=''
    }
    else{
        errorphone.innerText='phoneno should be 10 digit number'
        
    }
    Submit.innerText='Regex Validation Sucess'
    
    
    
    }