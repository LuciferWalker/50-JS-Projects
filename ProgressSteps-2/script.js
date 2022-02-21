const buttons= document.querySelectorAll("button");
const nodes=document.querySelectorAll('.node');
let node_counter=0;
x=document.getElementById("next")
y=document.getElementById("prev")

x.addEventListener('click', () =>{
    node_counter+=1
    y.disabled=false;
    if(node_counter==3)
        x.disabled=true;
    nodes[node_counter].classList.add('active');

    
})

y.addEventListener('click', () =>{
    nodes[node_counter].classList.remove('active');
    x.disabled=false;
    node_counter-=1
    if(node_counter==0)
        y.disabled=true;

})