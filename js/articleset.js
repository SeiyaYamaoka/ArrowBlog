function artsetp(No){
    
    //if(pagecnt <=2){
     //$.getJSON('http://arrowya12.php.xdomain.jp/article.php',function(data){//サーバー上のjson使うとき
         $.getJSON('json/article.json',function(data){//ローカルのjson使うとき

            //var na = (pagecnt-1)*4;
            var na = 0;

            for(var i = 0;i<data.length;i++){

                $('#content').append('<div id="boxarticleid'+(i+na)+'" class="boxarticle"/></div>');
                
                $('#boxarticleid'+(i+na)).append('<a href="'+data[i].linkpath+'"></a>')
                .append('<h3>'+data[i].title+'</h3>')
                .append('<p>'+data[i].caption+'</p>') 
                .append('<img src="'+ data[i].imgpath +'" alt=picture width="350" height="150">')
                .append('<div class = "headlinedate">'+data[i].date+'</div>');
                
            }
                
        });

        // pagecnt += 1;
        // if(pagecnt > 2){ //記事jsonファイルの最大数を超えるとボタンを消す
        //     $(".btn-animation-02").remove();
        // }
    //}

}

function scrollToTop() {
    scrollTo(0, 0);
}


var intervalID = null, timeID = null;



function smoothScroll(target) {
  if(intervalID != null) return;
  if(typeof target == 'string') target = document.querySelector(target);

  // 要素のY座標取得
  target.rect = target.getBoundingClientRect();
  target.posY = target.rect.top + window.pageYOffset;

  // スクロール方向
  var dir  = (target.posY < window.pageYOffset) ? -1: +1;
  // スクロール量
  var move = 20 * dir;
  // 合計スクロール量 
  var totalScroll = window.pageYOffset;

  intervalID = setInterval(function () {

    // 終了判定
    if( (dir == +1 && totalScroll >= target.posY) ||
        (dir == -1 && totalScroll <= target.posY) ) {

      // 位置合わせ
      window.scrollTo(0,target.posY);

      clearInterval(intervalID);
      intervalID = null;
      return;
    }

    window.scrollBy(0,move);
    totalScroll += move;

  }, 10);
}