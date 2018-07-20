var initResponsive = () => {
    var docwidth = $(document).width();
    var docheight = $(document).height();
    if(docwidth > docheight) {
        console.log('landscape');
    } else {
        console.log('portrait');
    }
    $('.thumb').css({
        'max-width': (docheight / 2) - 100
    });
}