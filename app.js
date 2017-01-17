// var img = $('.first').find('img')

// img.on('click', function(){
//   var next = $('.next').find('img')
//   next[0].src = next.data('src')
//   // console.log(next[0].src)
// })

// TEST IMAGES
var imageUrls = [
  "http://marshall.org/wp-content/themes/marshall/img/featured-space-policy.jpg", 
  "http://www.mrwallpaper.com/wallpapers/space-stars-road.jpg", 
  "https://newevolutiondesigns.com/images/freebies/space-wallpaper-29.jpg", 
  "http://entropymag.org/wp-content/uploads/2014/10/outer-space-wallpaper-pictures.jpg", 
  "https://wallpaperscraft.com/image/planet_light_spots_space_86643_1920x1080.jpg", 
  "http://space-facts.com/wp-content/uploads/magellanic-clouds.png", 
  "http://www.isro.gov.in/sites/default/files/galleries/Gallery/28takeoff.jpg", 
  "http://hdwallpapershdpics.com/wp-content/uploads/2015/08/free_high_resolution_images_for_download-1.jpg", 
  "http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Travel-Tourist-Images-Pictures-800x600.jpg", 
  "http://www.w3schools.com/css/trolltunga.jpg", 
  "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", 
  "http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Oicture-Dubai-Landmarks-800x600.jpg", 
  "http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"
]
// TEST IMAGES


function createCarousel(imageUrls) {
  document.documentElement.style.setProperty('--picture_number', imageUrls.length);
  var carouselString = ''
  var imageList = ''
  var imagePreviewList = ''


  for (var i = 0; i <= imageUrls.length - 1; i++) {
    if (i === 0) {
      imageList += `
          <div class="image-cont">
            <img class="active" src="${imageUrls[i]}">
          </div>
        `
      imagePreviewList += `
          <div class="preview-cont">
            <div class="active-preview" style="background-image: url('${imageUrls[i]}'); background-size: cover; background-position: center; height: 100%; width: 100%;"></div>
          </div>
        `
    } else {
      imageList += `
          <div class="image-cont">
            <img class="in-active" data-src="${imageUrls[i]}">
          </div>
        `
      imagePreviewList += `
          <div class="preview-cont">
            <div class="in-active-preview" style="background-image: url('${imageUrls[i]}'); background-size: cover; background-position: center; height: 100%; width: 100%;"></div>
          </div>
        `
    }
  }
  carouselString += `
      <div class="carousel-container">
        <div class="transition slide-left">
          <div class="circle-arrow-left"></div>
        </div>
        <div class="transition slide-right">
          <div class="circle-arrow-right"></div>
        </div>
        <div class="carousel">
          ${imageList}
        </div>
        <div class="image-preview">
          ${imagePreviewList}
        </div>
      </div>
    `
  var div = document.createElement('div');
  div.innerHTML = carouselString;
  while (div.children.length > 0) {
    console.log($('.plugin-carousel'))
    $('.plugin-carousel').append(div.children[0]);
  }
}

createCarousel(imageUrls);


var carousel = $('.carousel')
var maxImageIndex = carousel.children().length - 1
var imageIndex = 0



function carouselAspectRatio() {
  var imageCont = $('.image-cont')[imageIndex]
  var height = $(imageCont).height()
  var width = $(imageCont).width()
  var aspectRatio = (width / height)
  return aspectRatio
}
function imageAspectRatio() {
  var imageCont = $('.image-cont')[imageIndex]
  var image = $(imageCont).find('img')
  var height = $(image).height()
  var width = $(image).width()
  var aspectRatio = (width / height)
  return aspectRatio
}

function activateImage() {
  var imageCont = $('.image-cont')[imageIndex]
  var image = $(imageCont).find('img')
  if (image.data('src')) {
    image[0].src = image.data('src')
    image.data('src', null)
  }

  $(image).removeClass('in-active')
  $(image).addClass('active')

  var previewCont = $('.preview-cont')[imageIndex]
  var image = $(previewCont).find('div')
  $(image).removeClass('in-active-preview')
  $(image).addClass('active-preview')
}
function deactivateImage() {
  var imageCont = $('.image-cont')[imageIndex]
  var image = $(imageCont).find('img')
  $(image).removeClass('active')
  $(image).addClass('in-active')

  var previewCont = $('.preview-cont')[imageIndex]
  var image = $(previewCont).find('div')
  $(image).removeClass('active-preview')
  $(image).addClass('in-active-preview')
}




$('.slide-left').on('click', function() {
  deactivateImage()
  imageIndex -= 1
  if (imageIndex < 0) {
    imageIndex = maxImageIndex
  }
  activateImage()
  carousel.css('margin-left', (imageIndex * -100) + '%')
})
$('.slide-right').on('click', function() {
  deactivateImage()
  imageIndex += 1
  if (imageIndex > maxImageIndex) {
    imageIndex = 0
  }
  activateImage()
  carousel.css('margin-left', (imageIndex * -100) + '%')
})



$('.image-preview').on('click', '.preview-cont', function() {
  deactivateImage()
  imageIndex = $(this).index()
  activateImage()
  carousel.css('margin-left', (imageIndex * -100) + '%')
})



// $(function(){
//   var curDown = false,
//       // curYPos = 0,
//       curXPos = 0;
//   $(window).mousemove(function(m){
//     if(curDown === true){
//      // $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY)); 
//      $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
//     }
//   });
  
//   $('.image-preview').mousedown(function(m){
//       console.log('hey')
//     curDown = true;
//     // curYPos = m.pageY;
//     curXPos = m.pageX;
//   });
  
//   $(window).mouseup(function(){
//     curDown = false;
//   });
// })



$(window).resize(function(){
  var ar = carouselAspectRatio()
  var iar = imageAspectRatio()
  var percentage = (ar/iar)
  if (percentage < 1) {
    var imageCont = $('.image-cont')[imageIndex]
    var image = $(imageCont).find('img')
    $(image).css('width', '100%')
    $(image).css('height', 'auto')
  }
  if (percentage >= 1) {
    var imageCont = $('.image-cont')[imageIndex]
    var image = $(imageCont).find('img')
    $(image).css('width', 'auto')
    $(image).css('height', '100%')
  }
  // console.log(ar + " " + iar)
  // console.log("percentage: " + (ar/iar))
});


