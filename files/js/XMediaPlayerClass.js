class XMediaPlayer {
    constructor(selector) {
        this.selector = selector;
        this.playPauseEl = $("#playPause");
        this.stopEl = $("stop");
    }

    initMediaElement() {
        this.player = new MediaElementPlayer(this.selector, {
            type: ['audio/mpeg', 'audio/mp4'],
            iPhoneUseNativeControls: true,
            success: (mediaElement, player) => {
                this.media = mediaElement;
                mediaElement.addEventListener('canplay', this.startEvent)
                mediaElement.addEventListener('playing', this.startEvent)
            }
        })
        var that = this;
        this.playPauseEl.click(() => {
            that.playpause();
        });
        this.stopEl.click(() => {
            that.stop();
        })
    }

    startEvent() {

    }

    play() {
        this.player.play();
        this.playPauseEl.attr('class', 'glyphicon glyphicon-pause');
    }

    stop() {
        this.player.pause();
        this.playPauseEl.attr('class', 'glyphicon glyphicon-play');

    }

    setVolume(volume) {
        this.player.setVolume(volume);
    }

    playSource(sources, name) {
        this.stop();
        this.player.setSrc(sources);
        $('#playing').text(`Now playing: ${name}`);
        this.play();
    }

    playpause() {
        if (this.player.media.paused)
            this.play();
        else 
            this.stop();
    }
}
