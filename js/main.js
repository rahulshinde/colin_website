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

  $('#writing_link').on('click', Site.toggleWritingContainer);
  $('#writing_close_container').on('click', Site.toggleWritingContainer);
})

Site.toggleWritingContainer = function(){
  $('nav').toggleClass('show');
  $('#writing_close_container').toggleClass('show');
  var text = $('#writing_link').text();
  if (text == 'close'){
    $('#writing_link').html('writing');
  } else{
    $('#writing_link').html('close');
  }
}

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