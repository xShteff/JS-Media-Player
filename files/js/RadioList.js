var RadioSettings = {
    path: 'files/images/logos',
    itemsPerPage: 8
}

//This will eventually be pulled from a web service
var RadioData = {
    kissfm: {
        name: "KissFM",
        ip: "http://80.86.106.143:9128/kissfm.aacp",
        image: `${RadioSettings.path}/kissfm.png`,
    },
    radiozu: {
        name: "Radio Zu",
        ip: "http://live.romanticfm.ro:9123/radiozu.aacp",
        image: `${RadioSettings.path}/radio_zu.png`,
    },
    guerilla: {
        name: "Guerilla",
        ip: "http://live.guerrillaradio.ro:8010/guerrilla.aac",
        image: `${RadioSettings.path}/guerilla.png`,
    },
    profm: {
        name: "ProFM",
        ip: "http://stream.profm.ro:8012/profm.mp3",
        image: `${RadioSettings.path}/pro_fm.png`,
    },
    rockfm: {
        name: "Rock FM",
        ip: "http://live.rockfm.ro:9128/rockfm.aacp",
        image: `${RadioSettings.path}/rock_fm.png`,
    },
    eurofm: {
        name: "Europa FM",
        ip: "http://astreaming.europafm.ro:8000/europafm_mp3_64k",
        image: `${RadioSettings.path}/europa_fm.png`,
    },
    virgin: {
        name: "Virgin Radio",
        ip: "http://astreaming.virginradio.ro:8000/virgin_aacp_64k",
        image: `${RadioSettings.path}/virgin_fm.png`,
    },
    altradio: {
        name: "Alt Radio",
        ip: "http://asculta.altradio.ro:8557",
        image: `${RadioSettings.path}/alt_radio.png`,
    },
    cafe: {
        name: "Radio Cafe",
        ip: "http://live.radiocafe.ro:8064/",
        image: `${RadioSettings.path}/cafe.png`,
    },
    magic: {
        name: "Magic FM",
        ip: "http://live.magicfm.ro:9128/magicfm.aacp",
        image: `${RadioSettings.path}/magic.png`,
    },
    one: {
        name: "One FM",
        ip: "http://live.onefm.ro:9128/onefm.aacp",
        image: `${RadioSettings.path}/fucking_one.png`,
    },
    crazy: {
        name: "Crazy Radio",
        ip: "http://live.crazyradio.ro:8024/stream",
        image: `${RadioSettings.path}/crazy.png`,
    },
    digi: {
        name: "Digi FM",
        ip: "http://edge76.rdsnet.ro:84/digifm/digifm.mp3",
        image: `${RadioSettings.path}/digi.png`,
    },
    go: {
        name: "Go FM",
        ip: "http://live.gofm.ro:9128",
        image: `${RadioSettings.path}/gofm.png`,
    },
    zuper: {
        name: "Radio Zuper",
        ip: "http://live.radiozuper.ro:8080/stream/1/",
        image: `${RadioSettings.path}/zuper.png`,
    },
    vibe: {
        name: "Vibe FM",
        ip: "http://89.37.58.102:8000/vibefm_mp3_64k",
        image: `${RadioSettings.path}/vibe.png`,
    }
    
}