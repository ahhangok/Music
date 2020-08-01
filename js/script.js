function scrollHandler(){
  var windowBottom = $(window).scrollTop() +$(window).height();
  
  //모든 플레이 리스트를 하나씩 살펴보고
  //그 플레이 리스트의 중간 지점의 좌표가 windowBottom보다 작으면
  //그 플레이 리스트를 보이게 해라
 // var playlists = $('.playlist');
 // for(var i=0; i<playlists.length; i++){
    //var playlist = $(playlists[i]);
   // var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
    
   // if(playlistHalf < windowBottom){
     // playlist.animate({'opacity': '1'},1500);
   // }    
 // }
  $('.playlist').each(function(){
   var playlist = $(this);
    
    var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
    
    if(playlistHalf < windowBottom){
      playlist.animate({'opacity': '1'},1500); 
    }
  });
  console.log($(document).height());
  console.log(windowBottom);
  
  if(windowBottom === $(document).height()) {
    $('.to-top-btn').fadeIn();
  }else{
    $('.top-top-btn').fadeOut();
  }
}

$(window).on('scroll',scrollHandler);

//처음 로딩될때 호출
scrollHandler();

//맨위로 올라가기
$('.to-top-btn').on('click',function(){
  $('html,body').animate({scrollTop: 0},1000);
});
