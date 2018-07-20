var path = "files/images/logos"
//This will eventually be pulled from a web service
var RadioData = {
    kissfm: {
        name: "KissFM",
        ip: "http://80.86.106.143:9128/kissfm.aacp",
        image: `${path}/kissfm.png`,
    },
    radiozu: {
        name: "Radio Zu",
        ip: "http://live.romanticfm.ro:9123/radiozu.aacp",
        image: `${path}/radio_zu.png`,
    },
    guerilla: {
        name: "Guerilla",
        ip: "http://live.guerrillaradio.ro:8010/guerrilla.aac",
        image: `${path}/guerilla.png`,
    },
    profm: {
        name: "ProFM",
        ip: "http://stream.profm.ro:8012/profm.mp3",
        image: `${path}/pro_fm.png`,
    },
    rockfm: {
        name: "Rock FM",
        ip: "http://live.rockfm.ro:9128/rockfm.aacp",
        image: `${path}/rock_fm.png`,
    },
    eurofm: {
        name: "Europa FM",
        ip: "http://astreaming.europafm.ro:8000/europafm_mp3_64k",
        image: `${path}/europa_fm.png`,
    },
    virgin: {
        name: "Virgin Radio",
        ip: "http://astreaming.virginradio.ro:8000/virgin_aacp_64k",
        image: `${path}/virgin_fm.png`,
    },
    altradio: {
        name: "Alt Radio",
        ip: "http://asculta.altradio.ro:8557",
        image: `${path}/alt_radio.png`,
    },
    cafe: {
        name: "Radio Cafe",
        ip: "http://live.radiocafe.ro:8064/",
        image: `${path}/cafe.png`,
    },
    magic: {
        name: "Magic FM",
        ip: "http://live.magicfm.ro:9128/magicfm.aacp",
        image: `${path}/magic.png`,
    },
    one: {
        name: "One FM",
        ip: "http://live.onefm.ro:9128/onefm.aacp",
        image: `${path}/fucking_one.png`,
    },
    crazy: {
        name: "Crazy Radio",
        ip: "http://live.crazyradio.ro:8024/stream",
        image: `${path}/crazy.png`,
    },
    digi: {
        name: "Digi FM",
        ip: "http://edge76.rdsnet.ro:84/digifm/digifm.mp3",
        image: `${path}/digi.png`,
    },
    go: {
        name: "Go FM",
        ip: "http://live.gofm.ro:9128",
        image: `${path}/gofm.png`,
    },
    zuper: {
        name: "Radio Zuper",
        ip: "http://live.radiozuper.ro:8080/stream/1/",
        image: `${path}/zuper.png`,
    },
    vibe: {
        name: "Vibe FM",
        ip: "http://89.37.58.102:8000/vibefm_mp3_64k",
        image: `${path}/vibe.png`,
    }
    
}


var mapJsonToClass = (json) => {
    var data = [];
    $.each(json, (key) => {
        data.push(new RadioStation(key, json[key].name, json[key].ip, json[key].image));
    });
    return data;
}

var mapDataToPages = (itemsPerPage, data) => {
    var pagedData = [];
    var totalPages = Math.ceil(data.length / itemsPerPage);
    for(var i = 0; i < totalPages; i++) {
        var page = [];
        pagedData.push(page);
    }

    for(var i = 1; i < data.length + 1; i++) {
        var indexPage = Math.ceil((i) / (itemsPerPage)) - 1;
        pagedData[indexPage].push(data[i - 1]);
    }

    return pagedData;
}
var radioObjs = mapDataToPages(8, mapJsonToClass(RadioData));

