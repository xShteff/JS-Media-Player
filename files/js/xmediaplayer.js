class XMediaPlayer {
    constructor(selector) {
        this.selector = selector;
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
    }

    startEvent() {

    }

    play() {
        this.player.play();
    }

    stop() {
        this.player.pause();
    }

    setVolume(volume) {
        this.player.setVolume(volume);
    }

    playSource(sources) {
        console.log(sources);
        this.stop();
        this.player.setSrc(sources);
        this.play();
    }

    playpause() {
        if (this.player.media.paused)
            this.play();
        else 
            this.stop();
    }
}

class RadioStation {
    constructor(name, ip, image) {
        this.name = name;
        this.ip = ip;
        this.image = image;
        this.type = "audio/mpeg";
        this.source = {
            src: this.ip,
            type: this.type
        }
    }
}

var radioObjs = [
    new RadioStation("KissFM", "http://80.86.106.143:9128/kissfm.aacp", ""), 
    new RadioStation("Radio Zu", "http://live.romanticfm.ro:9123/radiozu.aacp", ""), 
    new RadioStation("Guerilla", "http://live.guerrillaradio.ro:8010/guerrilla.aac", ""), 
    new RadioStation("ProFM", "http://stream.profm.ro:8012/profm.mp3", ""), 
    new RadioStation("Rock FM", "http://live.rockfm.ro:9128/rockfm.aacp", ""), 
    new RadioStation("Europa FM", "http://astreaming.europafm.ro:8000/europafm_mp3_64k ", ""), 
    new RadioStation("Virgin Radio", "http://astreaming.virginradio.ro:8000/virgin_aacp_64k", ""), 
    new RadioStation("", "http://stream2.srr.ro:8012/", ""), 
    new RadioStation("", "http://asculta.altradio.ro:8557", ""), 
    new RadioStation("", "http://89.238.227.6:8000/", ""), 
    new RadioStation("", "http://live.radiocafe.ro:8064/", ""), 
    new RadioStation("", "http://136.243.111.186:8000/stream", ""), 
    new RadioStation("", "http://live.tananana.ro:8010/stream-48.aac?1459586094241.aac", ""), 
    new RadioStation("", "http://89.238.227.6:8042/", ""), 
    new RadioStation("", "http://live.magicfm.ro:9128/magicfm.aacp", ""), 
    new RadioStation("", "http://live.onefm.ro:9128/onefm.aacp", ""), 
    new RadioStation("", "http://live.crazyradio.ro:8024/stream", ""), 
    new RadioStation("", "http://80.86.106.32:8000/radio7.mp3", ""), 
    new RadioStation("", "http://edge76.rdsnet.ro:84/digifm/digifm.mp3", ""), 
    new RadioStation("", "http://live.gofm.ro:9128/", ""), 
    new RadioStation("", "http://live.mixcraiova.ro:8241/", ""), 
    new RadioStation("", "http://live.radiozuper.ro:8080/stream/1/", ""), 
    new RadioStation("", "http://89.37.58.102:8000/vibefm_mp3_64k", ""), 
    new RadioStation("", "http://live.radiodeea.ro:8090/", ""), 
    new RadioStation("", "http://live.prodjradio.net:8042/", ""), 
    new RadioStation("", "http://radio.drums.ro:8000", ""), 
    new RadioStation("", "http://89.238.227.6:8380/", ""),  
    new RadioStation("", "http://85.204.231.219:7300/", ""),  
    new RadioStation("", "http://stream2.srr.ro:8052", ""),  
    new RadioStation("", "http://live.vivafmiasi.ro:8000/stream", ""),  
    new RadioStation("", "http://stream2.srr.ro:8022/", ""),  
    new RadioStation("", "http://live.radiotrinitas.ro:8000", ""),  
    new RadioStation("", "http://live.happyfm.ro:8585", ""),  
    new RadioStation("", "http://stream.playmusicfm.info:9000", ""),  
]


var xMediaPlayer;
$(document).ready(() => {
    xMediaPlayer = new XMediaPlayer('#audioPlayer');
    xMediaPlayer.initMediaElement();
    var sources = [
        { src:'http://80.86.106.143:9128/kissfm.aacp', type:'audio/mpeg'},
       
    ];
    xMediaPlayer.playSource(sources);

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

