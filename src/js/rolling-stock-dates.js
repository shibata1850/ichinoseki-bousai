  /* 備蓄管理台帳の「賞味期限」を常に今日基準で表示する（日付を焼き付けない） */
  (function(){
    var t=new Date();
    document.querySelectorAll('#page-rolling .js-d').forEach(function(el){
      var d=new Date(t.getFullYear(), t.getMonth()+parseInt(el.dataset.m,10), 15);
      el.textContent=d.getFullYear()+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+('0'+d.getDate()).slice(-2);
    });
  })();
