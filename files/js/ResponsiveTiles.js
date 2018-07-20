var initResponsive = () => {
    var docwidth = $(window).width();
    var docheight = $(window).height();
    var width = 0;
    
    if(docwidth > docheight) {
        width = (docheight / 2) * 0.7;
        RadioSettings.itemsPerPage = 8;
    } else {
        width = (docwidth / 4) - 10;
        RadioSettings.itemsPerPage = 16; //TODO: Find a way to reinitialise the list in case viewport changes...
    }
    $('.thumb').css({
        'max-width': width
    });

    $('#debug').text(`Document Width: ${docwidth}; Document Height: ${docheight}; Tile Width: ${width}`);

}
