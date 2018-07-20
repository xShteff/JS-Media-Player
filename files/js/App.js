var xMediaPlayer;
$(document).ready(() => {
    xMediaPlayer = new XMediaPlayer('#audioPlayer');
    xMediaPlayer.initMediaElement();
    var list = new Vue({
        el: '#vue',
        data: {
            pages: radioObjs
        }
    });

    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        sectionColors:['red', 'blue'],
        dragAndMove: true,
		autoScrolling:true,
		scrollHorizontally: true
	});

    $('.station').click((e) => {
       xMediaPlayer.playSource(e.currentTarget.dataset.ip, e.currentTarget.dataset.name, e.currentTarget.dataset.id);
    });

    initResponsive();

    $(window).resize(() => {
        initResponsive();
    });
});
