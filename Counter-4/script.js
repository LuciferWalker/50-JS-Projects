const btn = document.querySelectorAll('.btn');
let display_counter = document.querySelector('.counter');
let counter= 0;

function check(){
    if(counter>0){
        display_counter.style.color = 'green';
    }

    else if(counter<0){
        display_counter.style.color = 'red';
    }

    else{
        display_counter.style.color = 'black';
    }
}

btn.forEach(button => {

    button.addEventListener('click', (e) =>{

        if(e.currentTarget.classList.contains("low")){
            counter-=1;       
        }
    
        else if(e.currentTarget.classList.contains("high")){
            counter+=1;
        }
    
        else{
            counter=0;
        }

        display_counter.textContent=counter;
        check();
    
    })
}

  
)





