let NavToggle = document.querySelector('.bar i'),
NavBar = document.querySelector('.under-nav .Links'),
ScrollArrow = document.querySelector('.arrow'),
Nav = document.querySelector('#Nav'),
UpperNav = document.querySelector('.upper-nav');



window.onscroll = function(){
    if (scrollY >= 150) {
        ScrollArrow.style.display="grid" 
        Nav.style.cssText=`
        position:sticky;
        top:0px;
        z-index:999;
        max-height:40px !important;
        `
        UpperNav.style.display="none"
    }
    else{
        ScrollArrow.style.display="none" ;

        Nav.style.cssText=
        `
        position:block;
        opacity:1
        
        `
        UpperNav.style.display="flex"
        
    }

}
ScrollArrow.onclick = () => {
    window.scroll(top,0)
}
NavToggle.onclick = () =>{
    NavBar.classList.toggle('active')
        
}