
var sds = {
    'solo': function () {
        var solo = document.getElementById('solo');
        var duo = document.getElementById('duo');
        var sqds = document.getElementById('sqds');

        if(solo.style.color === "#5383E8") return;
        solo.style.color = "#5383E8";
        duo.style.color = "#AAAAAA";
        sqds.style.color = "#AAAAAA";

        $('.mode_solo').show();
        $('.mode_duo').hide();
        $('.mode_sqd').hide();
    },

    'duo' : function () {


        var solo = document.getElementById('solo');
        var duo = document.getElementById('duo');
        var sqds = document.getElementById('sqds');

        if(duo.style.color === "#5383E8") return;
        solo.style.color = "#AAAAAA";
        duo.style.color = "#5383E8";
        sqds.style.color = "#AAAAAA";

        $('.mode_solo').hide();
        $('.mode_duo').show();   
        $('.mode_sqd').hide();
    },

    'sqds' : function(){
        var solo = document.getElementById('solo');
        var duo = document.getElementById('duo');
        var sqds = document.getElementById('sqds');

        if(sqds.style.color === "#5383E8") return;
        solo.style.color = "#AAAAAA";
        duo.style.color = "#AAAAAA";
        sqds.style.color = "#5383E8";

        $('.mode_solo').hide();
        $('.mode_duo').hide();
        $('.mode_sqd').show();
    }
}

function onSDSClickListenner(id) {
    sds[id](); 
}
