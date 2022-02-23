const data=[
    {
        id: 1,
        name: "Abdul & Suhail",
        image: "./abdul.jpg",
        desc: "Casually acting aberrant."
    },
    {
        id: 2,
        name: "Priyank",
        image: "./priyank.jpg",
        desc: "Whatsup dawg?"
    },
    {
        id: 3,
        name: "Hisham",
        image: "./hisham.png",
        desc: "Chal na bro 'Veg. Biryani' khane."
    },
    {
        id: 4,
        name: "Group",
        image: "./group.jpg",
        desc: "Post Tuition scenes."
    }

];

const image = document.getElementById("1");
const author = document.getElementById("author");
const desc = document.getElementById("image-desc");

const buttons= document.querySelectorAll('.btn');

let counter=0;

window.addEventListener('DOMContentLoaded', function() {
    render();
});

function render(){

        const item=data[counter];
        image.src=item.image;
        author.textContent=item.name;
        desc.textContent=item.desc;
    }


buttons.forEach(btn => {
    btn.addEventListener('click',() => {
        if(btn.classList.contains('next')){
            counter+=1;
            if(counter > data.length - 1)
                counter=0;
            render();
        }

        else if(btn.classList.contains('prev')){
            counter-=1;
            if(counter < 0)
                counter= data.length -1;
            render();
        }

        else
            counter=Math.floor(Math.random()*data.length)
            render();


    })
})