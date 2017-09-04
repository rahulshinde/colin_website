Site = {}

$(document).ready( function(){
  $('.homepage_image_container').on('click', Site.toggleImageSize);
  $('.writing_image_wrap').on('click', Site.toggleImageSize);
  $('#archive_link').on('click', Site.showArchive);
  $('#info_link').on('mouseenter', function(){
    $('#info_container').addClass('show');
  });
  $('#info_link').on('mouseleave', function(){
    $('#info_container').removeClass('show');
  });

  $('#writing_link').on('click', function(){
    $('nav').toggleClass('show');
    var text = $(this).text();
    if (text == 'close'){
      $(this).html('writing');
    } else{
      $(this).html('close');
    }
  });
})

Site.toggleImageSize = function(){
  $(this).toggleClass('huge');
}

Site.showArchive = function(){
  $(this).toggleClass('show');
  var text = $('#archive_text').text();
  console.log(text);
    if (text == 'close'){
      $('#archive_text').html('archive');
    } else{
      $('#archive_text').html('close');
    }
}