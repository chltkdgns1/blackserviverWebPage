

var startFunc = {
    'main_home_search': function () {
          var str = document.getElementById("userData").value;

          if (str == "" || str == null || str == undefined) {
             return;
          }

          var send = 'totalSearch.html?data=' + str;
          location.href = send;
       }
    ,

    'rank' : function () {
    
       location.href = "ranking.html";
    },

    'analysis' : function(){
       location.href = 'charanalysis.html';
    },

    'ws' : function(){
        location.href = 'index.html';
    }
 }

 var charFunc = {
    '재키': function () {
       location.href = "html?data=재키";
    },
    '아야': function () {
       location.href = "html?data=아야";
    },
    '피오라': function () {
       location.href = "html?data=피오라";
    },
    '매그너스': function () {
       location.href = "html?data=매그너스";
    },
    '자히르': function () {
       location.href = "html?data=자히르";
    },
    '나딘': function () {
       location.href = "html?data=나딘";
    },
    '현우': function () {
       location.href = "html?data=현우";
    },
    '아이솔': function () {
       location.href = "html?data=아이솔";
    },
    '리다이린': function () {
       location.href = "html?data=리다이린";
    },
    '유키': function () {
       location.href = "html?data=유키";
    },
    '하트': function () {
       location.href = "html?data=하트";
    },
    '혜진': function () {
      location.href = "html?data=혜진";
    },
    '쇼우': function () {
       location.href = "html?data=쇼우";
    },
    '시셀라': function () {
       location.href = "html?data=시셀라";
    },
    '키아라': function () {
       location.href = "html?data=키아라";
    },
    '아드리아나': function () {
       location.href = "html?data=아드리아나";
    },
    '쇼이치': function () {
       location.href = "html?data=쇼이치";
    },
    '실비아': function () {
       location.href = "html?data=실비아";
    },
 }

 function onClickListenner(id) {
   startFunc[id](); 
 }


 function onCharClickListenner(id) {
    charFunc[id]();
 }