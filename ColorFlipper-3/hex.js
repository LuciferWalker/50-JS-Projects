const btn=document.getElementById('btn');
const color=document.querySelector('.color');
const hex= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click', () =>{

    let hexcol= '#';
    for(let i=0;i<6;i++){
        hexcol+=hex[Math.floor(Math.random()*hex.length)];
    }
    document.body.style.backgroundColor=hexcol;
    color.textContent= hexcol;

})
