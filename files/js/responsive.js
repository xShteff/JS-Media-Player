var initResponsive = () => {
    var docwidth = $(document).width();
    var docheight = $(document).height();
    console.log(docwidth/docheight)
    var width = 0;
    if(docwidth > docheight) {
        width = (docheight / 2) * 0.7;
        console.log(`width: ${width}`)
        RadioSettings.itemsPerPage = 8;
    } else {
        width = (docwidth / 4) - 10;

        $('nav').css({
            height: '50px'
        });

        $('.audioControls').css({
            'font-size': '40px'
        });

        $('nav #playing').css({
            bottom: '14px',
            'font-size': '14px'
        });
        RadioSettings.itemsPerPage = 16; //TODO: Find a way to reinitialise the list in case viewport changes...
    }
    $('.thumb').css({
        'max-width': width
    });
}
