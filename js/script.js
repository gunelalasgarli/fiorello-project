$(document).ready(function() {

    //----------home pagedeki 1ci slider------------//

    $('.slick-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2500,
        arrows: true,
        fade: true,
        draggable: false,
        infinite: true,
        cssEase: "linear",
        nextArrow: `<i class="fal fa-arrow-right iconright"></i>`,
        prevArrow: `<i class="fal fa-arrow-left iconleft"></i>`,
        responsive: [{
            breakpoint: 1024,
            settings: {
                infinite: true,
                dots: true,
                draggable: false,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2500,
                arrows: false,

            },
        }]
    });

    //--------------------home pagedeki main sectionun slideri-------------//
    $('.mainSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        loop: true,
        draggable: true,
        infinite: true,
        cssEase: "linear",
        nextArrow: `<i class="fal fa-arrow-right iconright"></i>`,
        prevArrow: `<i class="fal fa-arrow-left iconleft"></i>`,
    });

    //---------------------scroll zamani basha qayitmaq ucun------------//
    let toTop = document.querySelector("#toTop");
    window.onscroll = () => {

        if (document.documentElement.scrollTop > 300) {
            toTop.style.opacity = "1";
            toTop.style.transform = "scale(1)";
        } else {
            toTop.style.opacity = "0";
            toTop.style.transform = "scale(0)";
        }
    }

    toTop.addEventListener("click", function() {
        document.documentElement.scrollTop = 0;
    });
    //------------------------js-filter-menu-ucun-------------------------//
    $('.list').click(function() {
        const value = $(this).attr('data-filter')
        if (
            value == ('All')) {
            $('.itemBox').show('1000')
        } else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }

    });
    $('.list').click(function() {
        $(this).addClass('.active').siblings().removeClass(('active'))
    });
    //---------------scroll zamani gelen navbar-------------------------//
    $(window).scroll(function(e) {
        let position = $(this).scrollTop();
        if (position > 200) {
            $('#stickynavbar').css('display', 'flex');
        } else {
            $('#stickynavbar').css('display', 'none');
        }
    });
    //---------------orange sehifesinin sliderleri----------------------//
    $('.pgwSlider').pgwSlider({
        listPosition: 'left',
        autoSlide: false,
    });

    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        nextArrow: `<i class="fal fa-arrow-right iconright"></i>`,
        prevArrow: `<i class="fal fa-arrow-left iconleft"></i>`,
    });
    //-------------------------------------------------------------//

});