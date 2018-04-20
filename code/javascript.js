//slide show

const slides = document.querySelectorAll('#slides .sliderImg');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'sliderImg';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'sliderImg showing';
}

//menu toggle-button

$(document).ready(function(){
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("navShowing")
    })
})

//
//$(window).on("scroll",function(){
//    if($(window).scrollTop()){
//        $('nav').addClass('black');
//    }else{
//        $('nav').removeClass('black');
//    }
//})

//scrolling effect

//
//const emailForm = document.querySelector('#email');
//emailForm.addEventListener('submit',(event)=>{
//    const formData = new FormData(form);
//    const userName = formData.get('user');
//    const userCompany = formData.get('company');
//    const userEmail = formData.get('email');
//    console.log(userCompany);
//    console.log(userEmail);
//    console.log(userName);
//});
//
//

