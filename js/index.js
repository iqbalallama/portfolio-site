document.getElementById('nav-lists').addEventListener('click',function(e){
    const navList = document.getElementsByClassName('nav-list');
    for(const nav of navList){
        if(nav === e.target){
            nav.classList.add('active')
        }else{
            nav.classList.remove('active')
        }
    }
});
const barIcon = document.querySelector('.bar-icon');
const navList = document.querySelector('.nav-lists');
barIcon.addEventListener('click',function(){
    navList.classList.toggle('open')
})
const p1 = document.querySelector('.p1');
p1.addEventListener('click',function(){
    window.location = '../Projects/project1.html'
})
const p2 = document.querySelector('.p2');
p2.addEventListener('click',function(){
    window.location = '../Projects/project2.html'
})
const p3 = document.querySelector('.p3');
p3.addEventListener('click',function(){
    window.location = '../Projects/project3.html'
})
const p4 = document.querySelector('.p4');
p4.addEventListener('click',function(){
    window.location = '../Projects/project4.html'
})