Site = {}

$(document).ready( function(){
  $(document).on('scroll', Site.toggleNav);

  $('.nav_link').on('click', Site.scrollToSection);
  $('.project_image').on('click', Site.openImage);
  $('#close').on('click', Site.closeImage);

  $('#left').on('click', Site.prevImage);
  $('#right').on('click', Site.nextImage);

  $('#about').on('click', Site.openAbout);

  Site.window_height_offset = $(window).height() * 0.3;

  Site.toggleNav();
})

Site.scrollToSection = function(event){
  event.preventDefault();
  if (this.hash !== "") {
    

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top + 1
    }, 1000, function(){
 
      window.location.hash = hash;
    });
  } 
}

Site.toggleNav = function(){
  Site.scroll_position = $(document).scrollTop();

  Site.y2017 = $('#y2017').offset().top - Site.window_height_offset;
  Site.y2016 = $('#y2016').offset().top - Site.window_height_offset;
  Site.y2015 = $('#y2015').offset().top - Site.window_height_offset;
  Site.y2014 = $('#y2014').offset().top - Site.window_height_offset;
  Site.y2013 = $('#y2013').offset().top - Site.window_height_offset;

  if (Site.scroll_position >= Site.y2017 && Site.scroll_position < Site.y2016 && !$('.link_2017').hasClass('selected')){
    $('.nav_link').removeClass('selected');
    $('.link_2017').addClass('selected');
  } else if (Site.scroll_position >= Site.y2016 && Site.scroll_position < Site.y2015 && !$('.link_2016').hasClass('selected')){
    $('.nav_link').removeClass('selected');
    $('.link_2016').addClass('selected');
  } else if (Site.scroll_position >= Site.y2015 && Site.scroll_position < Site.y2014 && !$('.link_2015').hasClass('selected')){
    $('.nav_link').removeClass('selected');
    $('.link_2015').addClass('selected');
  } else if (Site.scroll_position >= Site.y2014 && Site.scroll_position < Site.y2013 && !$('.link_2014').hasClass('selected')){
    $('.nav_link').removeClass('selected');
    $('.link_2014').addClass('selected');
  } else if (Site.scroll_position >= Site.y2013 || Site.scroll_position >= $(document).height() - $(window).height() && !$('.link_2013').hasClass('selected')) {
    $('.nav_link').removeClass('selected');
    $('.link_2013').addClass('selected');
  } 
}

Site.openImage = function(){
  
  Site.current = $(this).index() + 1;

  $('body').addClass('stopscroll');

  Site.slideshow_array = $(this).parent().find($('img'));
  Site.slideshow_length = Site.slideshow_array.length;


  $('#total').empty();
  $('#total').append(Site.slideshow_length);

  $('#current').empty();
  $('#current').append(Site.current);

  $('.image_modal_container').css('background', 'url(' + $(this).data('src') + ')');
  $('.image_caption').empty();
  $('.image_caption').append($(this).data('text'));

  $('.image_modal_box').toggle(); 
  $('.image_modal_container').toggle();
  $('.image_caption').toggle();
}

Site.closeImage = function(){
  $('.image_modal_box').css('display', 'none'); 
  $('.image_modal_container').css('display', 'none');
  $('.image_caption').css('display', 'none');
  $('body').removeClass('stopscroll');
}

Site.prevImage = function(){
  if (Site.current == 1){
    Site.current = Site.slideshow_length;

    $('#current').empty();
    $('#current').append(Site.current);

    Site.current_image = Site.slideshow_array[Site.slideshow_length - 1];

    $('.image_modal_container').css('background', 'url(' + $(Site.current_image).data('src') + ')');
    $('.image_caption').empty();
    $('.image_caption').append($(Site.current_image).data('text'));
  } else{
    Site.current = Site.current - 1;

    $('#current').empty();
    $('#current').append(Site.current);

    Site.current_image = Site.slideshow_array[Site.current - 1];

    $('.image_modal_container').css('background', 'url(' + $(Site.current_image).data('src') + ')');
    $('.image_caption').empty();
    $('.image_caption').append($(Site.current_image).data('text'));
  }
}

Site.nextImage = function(){
  if (Site.current == Site.slideshow_length){
    Site.current = 1;

    $('#current').empty();
    $('#current').append(Site.current);

    Site.current_image = Site.slideshow_array[0];

    $('.image_modal_container').css('background', 'url(' + $(Site.current_image).data('src') + ')');
    $('.image_caption').empty();
    $('.image_caption').append($(Site.current_image).data('text'));
  } else{
    Site.current = Site.current + 1;

    $('#current').empty();
    $('#current').append(Site.current);

    Site.current_image = Site.slideshow_array[Site.current - 1];

    $('.image_modal_container').css('background', 'url(' + $(Site.current_image).data('src') + ')');
    $('.image_caption').empty();
    $('.image_caption').append($(Site.current_image).data('text'));
  }
}