
/* $(document).ready(function () {
  $(".block__pic").imagezoomsl({
    zoomrange: [2, 2],
  });
});
 */

/* $(document).ready(function () {
  $('.locattionMapDesign1').izoomify({
    magnify: 3
  });
});

$(document).ready(function () {
  $('.birdsEyeImage1').izoomify({
    magnify: 3,
    url: 'images/about/Projectbirdseyeview-1.jpg'
  });
}); */

$(document).ready(function () {
  $('.birdsEyeImage2').izoomify({
    magnify: 3,
    url: 'images/about/Projectbirdseyeview-2-main.png'
  });
});



$(document).ready(function () {
  $(".thumb-images img").click(function () {
    var image = $(this).attr("src");
    $(".main-image img").attr("src", image);
  });
});



