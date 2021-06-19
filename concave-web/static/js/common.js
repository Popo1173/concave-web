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
  // $(function(){
  //   $(window).scroll(function (){
  //     $('.box_news').each(function(){
  //       //要素の位置の取得
  //       var target = $(this).offset().top;
  //       //スクロール量を取得
  //       var scroll = $(window).scrollTop();
  //       //ウィンドウの高さを取得
  //       var windowHeight = $(window).height();
  //       //目的の要素が画面内に少し入ったらクラスを付与する
  //       if (scroll > target - windowHeight - 200){
  //           $(this).addClass('fade');
  //       }
  //     });
  //   });
  // });


  // $(function() {
  //   var headNav = $("#header");
  //   //scrollだけだと読み込み時困るのでloadも追加
  //   $(window).on('load scroll', function () {
  //     //現在の位置が500px以上かつ、クラスfixedが付与されていない時
  //     if($(this).scrollTop() > 200 && headNav.hasClass('styles.fixed') == false) {
  //       //headerの高さ分上に設定
  //       // console.log(scrollTop)
  //       headNav.css({"top": '-100px'});
  //       //クラスfixedを付与
  //       headNav.addClass('');
  //       //位置を0に設定し、アニメーションのスピードを指定
  //       headNav.animate({"top": 0},900);
  //     }
  //     //現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
  //     else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
  //       headNav.removeClass('fixed');
  //     }
  //   });
  // });

  // // $(function(){
  // //   var _window = $(window),
  // //     _header = $('.header'),
  // //     heroBottom;
    
  // //   _window.on('scroll',function(){
  // //     heroBottom = $('.leadBlock_wapper').height();
  // //     if(_window.scrollTop() > heroBottom){
  // //       _header.addClass('transform');   
  // //     }
  // //     else{
  // //       _header.removeClass('transform');   
  // //     }
  // //   });
    
  // //   _window.trigger('scroll');	
  // // });