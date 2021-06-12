$(function(){
    $(window).scroll(function (){
      $('.box_background__black').each(function(){
        
        //要素の位置の取得
        var target = $(this).offset().top;
        
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        
        //ウィンドウの高さを取得
        var windowHeight = $(window).height();
        
        //目的の要素が画面内に少し入ったらクラスを付与する
        if (scroll > target - windowHeight + 200){
            $(this).addClass('fade');
        }
      });
    });
  });