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
