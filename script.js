const pass = document.getElementById("password");
const str = document.getElementById("str");

pass.addEventListener("input",()=>{

    if(pass.value.length > 0 && pass.value.length < 4){
        pass.style.background="red";
        str.innerHTML="very weak password";
        str.style.color="red";

    }
    else if(pass.value.length > 4 && pass.value.length < 8){
        pass.style.background="yellow";
        str.innerHTML="Mediuam password";
        str.style.color="yellow";

    }
    else if(pass.value.length >= 8){
        pass.style.background="rgb(3, 223, 14)";
        str.innerHTML="Strong password";
        str.style.color="rgb(3, 223, 14)";
    }
    
})