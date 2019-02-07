$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    navSpeed:true,
    lazyLoad:true,
    smartSpeed:1500,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true,
            dots:true,
        }
    }
});
    $("#more").click(function(){
        $(".persons-2").css("display","block");
        $("#more").hide();
        $("#less").show();
    });
     $("#less").click(function(){
        $(".persons-2").css("display","none");
        $("#more").show();
        $("#less").hide();
    });

     $("#ed-bg-2").click(function(){
        $(".about-p-2").css("display","block");
        $(".about-p-1").hide();
     });
     $("#ed-bg-1").click(function(){
        $(".about-p-1").show();
        $(".about-p-2").hide();
     })

    

})
