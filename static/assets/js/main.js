(function ($) {

    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');


    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    var $nav_a = $nav.find('a');

    $nav_a
        .addClass('scrolly')
        .on('click', function (e) {

            var $this = $(this);


            if ($this.attr('href').charAt(0) != '#')
                return;

            e.preventDefault();

            $nav_a.removeClass('active');

            $this
                .addClass('active')
                .addClass('active-locked');

        })
        .each(function () {

            var $this = $(this),
                id = $this.attr('href'),
                $section = $(id);


            if ($section.length < 1)
                return;


            $section.scrollex({
                mode: 'middle',
                top: '-10vh',
                bottom: '-10vh',
                initialize: function () {


                    $section.addClass('inactive');

                },
                enter: function () {


                    $section.removeClass('inactive');

                    if ($nav_a.filter('.active-locked').length == 0) {

                        $nav_a.removeClass('active');
                        $this.addClass('active');

                    } else if ($this.hasClass('active-locked'))
                        $this.removeClass('active-locked');

                }
            });

        });


    $('.scrolly').scrolly();


    $(
        '<div id="headerToggle">' +
        '<a href="#header" class="toggle"></a>' +
        '</div>'
    )
        .appendTo($body);


    $('#header')
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'header-visible'
        });

})(jQuery);