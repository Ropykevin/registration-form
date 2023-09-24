const form =document.getElementById('form');
const username=document.getElementById('username');
const email =document.getElementById('email');
const password=document.getElementById('password');
const confirm_password=document.getElementById('confirm_password');

form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();
});
 const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classlist.add('error')
    inputControl.classlist.remove('success')
 }
 const setSuccess= element =>{
    const inputControl =element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    
    errorDisplay.innerText='';
    inputControl.classlist.add('success')
    inputControl.classlist.remove('error')


 }
//  const isValidEmail = email =>{
//     const re =''
//  }
const validateInputs=() => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirm_passwordValue = confirm_password.value.trim()

    if(usernameValue==='') {
        setError(username, 'username is required !');

    }else{
        setSuccess(username)
    }
    if(emailValue==='') {
        setError(email, 'Email is required !');

    // }else if (!isValidEmail(emailValue)){
    //     setError(email,"provide a valid email address !")
    }else{
        setSuccess(email);
    }

    if (passwordValue==="") {
        setError(password,'Password is required !');
        
    }else if(passwordValue.length < 8){
        setError(password,'Password must be at least 8 characters !')
    }else{
        setSuccess(password)
    }
    if( confirm_password ==="") {
        setError(confirm_password,'Please confirm your password !')
    }else if (confirm_passwordValue !== passwordValue) {
        setError(confirm_password, "Password's doesn't match");
    }else{
        setSuccess(confirm_password)
    }
};