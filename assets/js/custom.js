// owlCarousel
$('.active-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
		dots:true,
		autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
});


// top-category-active
$('.top-category-active').owlCarousel({
	loop:true,
	margin:24,
	items:6,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
});

