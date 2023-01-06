const header = document.getElementById('header');




window.addEventListener('scroll', scrollHeader);

function scrollHeader(){
  
  if(this.scrollY >= 50){ 
    header.classList.add('scroll-header'); 
  }
  else {
    header.classList.remove('scroll-header');
  }
}


var swiperTopRated = new Swiper(".top-rated-container", {
  spaceBetween:40,
  grabCursor:true,
  centeredSlides:true,
  slidesPerView:'auto',
  loop:true,
  

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* OfferTab*/
const offerTab = document.querySelectorAll('.offer-options-tab');



offerTab.forEach((tab) => {
  const offerHeader = tab.querySelector('.offer-options-header');

  offerHeader.addEventListener('click', () =>{
    const openTab = document.querySelector('.offer-open')

    toggleTab(tab)

    if(openTab && openTab!== tab){
      toggleTab(openTab)
    }
  });
  
})
 
const toggleTab = (tab) => {
  const offerContent = tab.querySelector('.offer-options-content');

  if(tab.classList.contains('offer-open')){
    offerContent.removeAttribute('style')
    tab.classList.remove('offer-open')
  }else{
    offerContent.style.height = offerContent.scrollHeight + 'px'
  tab.classList.add('offer-open')
  }

}

/* scroll section*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active')
    }
        
  })
}
window.addEventListener('scroll', scrollActive)



/*Scroll*/

function scroll(){
  const scroll = document.getElementById('scrollup');
  
  if(this.scrollY >= 350) scroll.classList.add('visible-scroll-up');
  else scroll.classList.remove('visible-scroll-up')
}
window.addEventListener('scroll', scroll)




/* toggle*/

const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

  toggle.onclick = function(){
    toggle.classList.toggle('switch');
    body.classList.toggle('switch');
  }







