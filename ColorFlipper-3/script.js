const btn=document.getElementById('btn');
const color=document.querySelector('.color');
const colors=['red','blue','green','violet'];
btn.addEventListener('click', () =>{

    const random = Math.floor(Math.random()*4);
    document.body.style.backgroundColor=colors[random];
    color.textContent= colors[random];

})
