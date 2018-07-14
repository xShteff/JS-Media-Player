var xMediaPlayer;
$(document).ready(() => {
    xMediaPlayer = new XMediaPlayer('#audioPlayer');
    xMediaPlayer.initMediaElement();
    var list = new Vue({
        el: '#vue',
        data: {
            radios: radioObjs
        }
    });

    $('.station').click((e) => {
       xMediaPlayer.playSource(e.currentTarget.dataset.ip);
    })
});