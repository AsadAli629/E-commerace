$(document).ready(function () {
    var $grid = $('.collection-list').isotope({});

    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $(".moon").click(function () {
        $(".body").toggleClass("change-background");
        $("button").toggleClass("change-b");
    });
});
