function scrollHandler(){
  var windowBottom = $(window).scrollTop() +$(window).height();
  
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

scrollHandler();

$('.to-top-btn').on('click',function(){
  $('html,body').animate({scrollTop: 0},1000);
});
