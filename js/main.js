// show the info behind the gallery image
function showGalleryInfo(){
  $(this).find('div').toggleClass('gallery__itemInfo--in');
}

$(document).ready(function(){

  $('.gallery__item').on('mouseenter mouseleave', showGalleryInfo);

});
