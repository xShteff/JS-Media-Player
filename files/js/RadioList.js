//This will eventually be pulled from a web service
var RadioData = {
    kissfm: {
        name: "KissFM",
        ip: "http://80.86.106.143:9128/kissfm.aacp",
        image: "",
    },
    radiozu: {
        name: "Radio Zu",
        ip: "http://live.romanticfm.ro:9123/radiozu.aacp",
        image: "",
    },
    guerilla: {
        name: "Guerilla",
        ip: "http://live.guerrillaradio.ro:8010/guerrilla.aac",
        image: "",
    },
    profm: {
        name: "ProFM",
        ip: "http://stream.profm.ro:8012/profm.mp3",
        image: "",
    },
    rockfm: {
        name: "Rock FM",
        ip: "http://live.rockfm.ro:9128/rockfm.aacp",
        image: "",
    },
    eurofm: {
        name: "Europa FM",
        ip: "http://astreaming.europafm.ro:8000/europafm_mp3_64k",
        image: "",
    },
    virgin: {
        name: "Virgin Radio",
        ip: "http://astreaming.virginradio.ro:8000/virgin_aacp_64k",
        image: "",
    },
    altradio: {
        name: "Alt Radio",
        ip: "http://asculta.altradio.ro:8557",
        image: "",
    },
    cafe: {
        name: "Radio Cafe",
        ip: "http://live.radiocafe.ro:8064/",
        image: "",
    },
    magic: {
        name: "Magic FM",
        ip: "http://live.magicfm.ro:9128/magicfm.aacp",
        image: "",
    },
    one: {
        name: "One FM",
        ip: "http://live.onefm.ro:9128/onefm.aacp",
        image: "",
    },
    crazy: {
        name: "Crazy Radio",
        ip: "http://live.crazyradio.ro:8024/stream",
        image: "",
    },
    digi: {
        name: "Digi FM",
        ip: "http://edge76.rdsnet.ro:84/digifm/digifm.mp3",
        image: "",
    },
    go: {
        name: "Go FM",
        ip: "http://live.gofm.ro:9128",
        image: "",
    },
    zuper: {
        name: "Radio Zuper",
        ip: "http://live.radiozuper.ro:8080/stream/1/",
        image: "",
    },
    vibe: {
        name: "Vibe FM",
        ip: "http://89.37.58.102:8000/vibefm_mp3_64k",
        image: "",
    },
    happy: {
        name: "Happy FM",
        ip: "http://live.happyfm.ro:8585",
        image: "",
    },
    
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
var radioObjs = mapDataToPages(6, mapJsonToClass(RadioData));

