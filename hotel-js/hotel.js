/*slick.js*/
$(function () {
    $('.visual .slide').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    /*slide2*/
    $('.dining .slide2').slick({
        arrows: false,
        dots: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
});

//탭메뉴
$(function () {
    $('.introduce .roomInfo .tab li a').on('click', function () {
        var num = $('.introduce .roomInfo .tab li a').index($(this));
        $('.introduce .roomInfo .tabBox').removeClass('on');
        $('.introduce .roomInfo .tabBox:eq(' + num + ')').addClass('on');
    });
});

//스크립트 위로 팅김방지
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
})

//scroll animation
$(function () {
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

/*패밀리사이트*/
$(function () {
    $('.btn_fam').on('click', function () {
        $('.item_wrap').slideToggle();
    })
})
/*햄버거*/
$(function () {
    $('.menuOpen').on('click', function () {
        $('.menuWrap').addClass('on');
    });
    $('.menuWrap .close').on('click', function () {
        $('.menuWrap').removeClass('on');
    })
});

//헤더 이벤트
var scrollTop = 0;
scrollTop = $(document).scrollTop();

$(window).on('scroll resize', function () {
    scrollTop = $(document).scrollTop();
    fixHeader();
});

function fixHeader() {
    if (scrollTop > 200) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}
