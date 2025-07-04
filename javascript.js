let buttons = document.querySelectorAll(".button-D");
// let input=document.querySelector("#cal-display");
let string =  " ";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
           string= eval(string);
        document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="⌫"){
           string="";
           document.querySelector('input').value=string;
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })

})