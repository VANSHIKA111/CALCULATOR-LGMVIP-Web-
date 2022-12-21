let display=document.getElementById('display');

let select=document.getElementsByClassName('button');
// console.log(select);
let buttons=Array.from(select);
// console.log(buttons);
buttons.map((element)=>{
    element.addEventListener('click',(e)=>{
        switch(e.target.innerText)
        { case '=':
        try{
        display.innerText=eval(display.innerText);
        }
        catch{
            display.innerText="error";
        }
        break;
        case 'C':
        display.innerText=' ';
        break;
        case '~':
        if(display.innerText)
            {
                display.innerText=display.innerText.slice(0,-1);  
            }
            break;
        default:
        display.innerText+=e.target.innerText;
        }
       
    });
        
    })
  


