//create a funtion for accesing html elements
const id = (name) => document.querySelector(name);

//create variables for each accesible element
let uname = id('.uname');
let email = id('.email');
let pass = id('.pass');
let form = id('.form');
let submit = id('.btn');
let error = document.querySelectorAll('.error');

//create a method to validate each input to accept required funtionality
const validate = (id,val,msg) => {
    //condition for empty input value
    if(id.value.trim()===''){
        error[val].innerHTML=msg;
        id.style.border='2px solid red';
    //condition for accepting email
    }else if(id==email){
        let a=id.value.split('');
        if(a.find((e)=>e=='@')){
            error[1].innerHTML='';
            id.style.border='2px solid green';
        }else{
            error[1].innerHTML='Email should contain @';
            id.style.border='2px solid red';
        }
    //condition for accepting password
    }else if(id==pass){
        if(id.value.length>=5 && id.value.length <=12){
            error[2].innerHTML='';
            id.style.border='2px solid green';
        }else{
            error[2].innerHTML='Password length must be 5 to 12';
            id.style.border='2px solid red';
        }
    // else no error
    }else{
        error[val].innerHTML='';
        id.style.border='2px solid green';
        console.log(uname.value,email.value,pass.value)
    }
}

// addEventListener to form on submit
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate(uname,0,'Please enter Username');
    validate(email,1,'Please enter Email');
    validate(pass,2,'Please enter Password');
});
