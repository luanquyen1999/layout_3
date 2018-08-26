// Main
console.log('FullStack Vietnam!')

// home-slider
$('.home-slide .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    items: 1,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    // responsive: {
    //     0: {
    //         items: 1
    //     },
    //     600: {
    //         items: 3
    //     },
    //     1000: {
    //         items: 5
    //     }
    // }
})
$('.home-cooperate .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        items: 1,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
    // // $(document).ready(function() {
    // // $('.item').each(function() {

// //     var e = $(this).find('.title')
// //     $(this).find('.body').hide()

// //     $(e).css({
// //         "font-size": "1.5rem"
// //     }).on('click', function() {
// //         $(this).parents('.home_nay').find('.body').hide()
// //         $(this).parents('.item').find('.body').show()
// //     })
// // })

// // });