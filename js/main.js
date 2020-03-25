let winHeight;
let footerHeight;
let sectionClass;
let sectionPosition;
let fromTop;
let navigation = $('.navigation');
let navHeight = $('.navigation').height();
let skills = $('.skills-section');
let intro = $('.intro-content');
const addForm = $('.form-submit');
const contactForm = $('.contact-form');


$(document).ready(() => {
    intro.fadeIn(3000);
});


$(window).on('scroll', function() {
    fromTop = $(window).scrollTop();
    if(fromTop > 100) {
        navigation.addClass('resize-navigation');
    } else {
        navigation.removeClass('resize-navigation');
    }
});

function sectionHeight() {
    winHeight = $(window).height();
    $('.intro-section, .skills-section, .projects').css('min-height', winHeight);
    footerHeight = $('.footer').outerHeight();
    $('.contact').css('min-height', winHeight - footerHeight - navHeight);
}

sectionHeight();
$(window).on('resize', function() {
    sectionHeight();
});

$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

$('nav a').on('click', function(e) {
    e.preventDefault();
    sectionClass = $(this).attr('href');
    sectionPosition = $(sectionClass).offset().top;

    $('html, body').animate({
        scrollTop: sectionPosition - navHeight
    }, 1000);
});

$('.icon-holder').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$('#intro-btn').on('click', function() {
    $('html, body').animate({
        scrollTop: skills.offset().top - navHeight
    }, 700);
});
