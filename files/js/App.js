var xMediaPlayer;
$(document).ready(() => {
    initResponsive();

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
    var radioObjs = mapDataToPages(RadioSettings.itemsPerPage, mapJsonToClass(RadioData));

    xMediaPlayer = new XMediaPlayer('#audioPlayer');
    xMediaPlayer.initMediaElement();
    var list = new Vue({
        el: '#vue',
        data: {
            pages: radioObjs
        }
    });

    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        dragAndMove: true,
		autoScrolling:true,
		scrollHorizontally: true
	});

    $('.station').click((e) => {
       xMediaPlayer.playSource(e.currentTarget.dataset.ip, e.currentTarget.dataset.name, e.currentTarget.dataset.id);
    });

    $(window).resize(() => {
        initResponsive();
    });
});
