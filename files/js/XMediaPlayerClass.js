class XMediaPlayer {
    constructor(selector) {
        this.selector = selector;
        this.playPauseEl = $("#playPause");
        this.stopEl = $("#stop");
        this.currentlyPlayingId = "";
        this.isPlaying = false;
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
        this.highlightCurrentStation();
        this.isPlaying = true;
    }

    stop() {
        this.player.pause();
        this.playPauseEl.attr('class', 'glyphicon glyphicon-play');
        this.unhighlightStations();
        this.isPlaying = false;
    }

    setVolume(volume) {
        this.player.setVolume(volume);
    }

    highlightCurrentStation() {
        $(`.station[data-id="${this.currentlyPlayingId}"]`).addClass('playing')
    }

    unhighlightStations() {
        $('.station').removeClass('playing')
    }

    playSource(sources, name, id) {
        if(id === this.currentlyPlayingId) {
            this.playpause();
        } else {
            this.currentlyPlayingId = id;
            this.stop();
            this.player.setSrc(sources);
            $('#playing').text(`Now playing: ${name}`);
            this.play();
        }    
    }

    playpause() {
        if (this.player.media.paused)
            this.play();
        else 
            this.stop();
    }
}
