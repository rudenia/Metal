$('.casting-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

$ (function () {
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none')
        $('.menu-collapse').toggleClass('opened')
    })
});
