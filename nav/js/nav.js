var menu = document.getElementById('menu');
var resbutton = document.getElementById('resbutton');

document.addEventListener('click',()=>{
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('resbutton').classList.toggle('close');
})