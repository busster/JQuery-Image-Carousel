// IMAGE URLS
var imageUrls = [
  "https://static.pexels.com/photos/126590/pexels-photo-126590.jpeg",
  "https://static.pexels.com/photos/87646/horsehead-nebula-dark-nebula-constellation-orion-87646.jpeg",
  "https://static.pexels.com/photos/250072/pexels-photo-250072.jpeg",
  "https://static.pexels.com/photos/2156/sky-earth-space-working.jpg",
  "https://static.pexels.com/photos/6546/sky-night-space-trees.jpeg",
  "https://static.pexels.com/photos/2773/city-skyline-skyscrapers-top.jpg",
  "https://static.pexels.com/photos/625/field-summer-sun-meadow.jpg",
  "https://static.pexels.com/photos/1780/landscape-nature-clouds-cloudy.jpg",
  "https://static.pexels.com/photos/28221/pexels-photo-28221.jpg",
  "https://static.pexels.com/photos/105221/pexels-photo-105221.jpeg",
  "https://static.pexels.com/photos/54278/pexels-photo-54278.jpeg",
  "https://static.pexels.com/photos/8703/sky-space-moon-outdoors.jpg",
  "https://static.pexels.com/photos/25943/pexels-photo-25943.jpg",
  "https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg",
  "https://static.pexels.com/photos/1440/city-road-street-buildings.jpg",
  "https://static.pexels.com/photos/24491/pexels-photo-24491.jpg",
  "https://static.pexels.com/photos/33109/fall-autumn-red-season.jpg",
  "https://static.pexels.com/photos/14676/pexels-photo-14676.png",
  "https://static.pexels.com/photos/6603/landmark-bridge-cliff-california.jpeg",
  "https://static.pexels.com/photos/33045/lion-wild-africa-african.jpg"
]
// IMAGE URLS

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// CSS RULES
var sheet = (function() {
  // Create the <style> tag
  var style = document.createElement("style");

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();

function addCSSRule(sheet, selector, rules, index) {
  if("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  }
  else if("addRule" in sheet) {
    sheet.addRule(selector, rules, index);
  }
}



var inactivePreviewHoverRule = 
`opacity: 1;`
var inactivePreviewRule = 
`-o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  opacity: .5;
`
var inactiveRule = 
`visibility: hidden;`
var activePreviewRule = 
`opacity: 1;`
var activeRule = 
`visibility: visible;`
var carImgRule = 
`height: 100%;`
var slideLeftHoverRule = 
`opacity: 1;`
var slideRightHoverRule = 
`opacity: 1;`
var circleArrowRightBeforeRule = 
`content: '';
  display: block;
  border-top: solid var(--arrow_size) transparent;
  border-left: solid var(--arrow_size) rgba(255,255,255,1);
  border-bottom: solid var(--arrow_size) transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: calc(var(--arrow_size) * -1) 0 0 -3px;
`
var circleArrowRightRule = 
`float: right;
  margin-right: calc(var(--height) * 0.05);
  top: 50%;
  margin-top: calc(-2 * var(--arrow_size));
  width: calc(var(--arrow_size) * 4);
  height: 0;
  padding-bottom: calc(var(--arrow_size) * 4);
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  position: relative;
  border: 2px solid rgba(255,255,255,1);
`
var slideRightRule = 
`opacity: 0;
  transition: opacity 1s;
  -moz-transition: opacity 1s;
  -webkit-transition: opacity 1s;
  cursor: pointer;
  right: 0;
  width: calc(var(--max-width)/2);
  position: absolute;
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.25));
`
var circleArrowLeftBeforeRule = 
`content: '';
  display: block;
  border-top: solid var(--arrow_size) transparent;
  border-right: solid var(--arrow_size) rgba(255,255,255,1);
  border-bottom: solid var(--arrow_size) transparent;
  position: absolute;
  top: 50%;
  right: 42.5%;
  margin: calc(var(--arrow_size) * -1) 0 0 -3px;
`
var circleArrowLeftRule = 
`float: left;
  margin-left: calc(var(--height) * 0.05);
  top: 50%;
  margin-top: calc(-2 * var(--arrow_size));
  width: calc(var(--arrow_size) * 4);
  height: 0;
  padding-bottom: calc(var(--arrow_size) * 4);
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  position: relative;
  border: 2px solid rgba(255,255,255,1);
`
var arrowLeftRule = 
`float: left;
  margin-left: calc(var(--height) * 0.05);
  margin-top: calc((var(--height) * 0.5) - var(--arrow_size));
  width: 0; 
  height: 0; 
  border-top: var(--arrow_size) solid transparent;
  border-bottom: var(--arrow_size) solid transparent; 
  border-right:var(--arrow_size) solid rgba(255,255,255,.5);
`
var slideLeftRule = 
`opacity: 0;
  transition: opacity 1s;
  -moz-transition: opacity 1s;
  -webkit-transition: opacity 1s;
  cursor: pointer;
  left: 0;
  width: calc(var(--max-width)/2);
  position: absolute;
  background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.25));
`
var previewContRule = 
`background-color: black;
  cursor: pointer;
  overflow: hidden;
  margin: calc(var(--height) * 0.01);
  margin-top: 0;
  margin-bottom: 0;
  display:inline-block;
  height: calc(var(--height) * 0.2);
  width: calc(var(--height) * 0.2);
`
var imagePreviewRule = 
`box-sizing: border-box;
  padding: calc(2 * (var(--height) * 0.01));
  padding-top: 0;
  width: 100%;
  overflow-x:scroll;
  overflow-y:hidden;
  white-space: nowrap;
  height: calc(var(--height) * 0.25);
  font-size: 0;
`
var imageContRule = 
`text-align: center;
  float: left;
  width: calc(var(--max-width) / var(--picture_number));
`
var carouselRule = 
`margin-left: 0;
  width: calc(var(--max-width) * var(--picture_number));
`
var carouselHeightRule = 
`height: calc(var(--height) * 0.75);`
var carouselContainerRule = 
`margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: var(--max-width);
`
var rootRule =   
`--height: 600px;
  --width: 1200px;
  --max-width: 100%;
  --padding: 50px;
  --picture_number: 1;
  --arrow_size: 15px;`;


var ruleConstructor = [
  {name:".in-active-preview:hover",rule:inactivePreviewHoverRule},
  {name:".in-active-preview:hover",rule:inactivePreviewHoverRule},
  {name:".in-active-preview",rule:inactivePreviewRule},
  {name:".in-active",rule:inactiveRule},
  {name:".active-preview",rule:activePreviewRule},
  {name:".active",rule:activeRule},
  {name:".car-img",rule:carImgRule},
  {name:".slide-left:hover",rule:slideLeftHoverRule},
  {name:".slide-right:hover",rule:slideRightHoverRule},
  {name:".circle-arrow-right:before",rule:circleArrowRightBeforeRule},
  {name:".circle-arrow-right",rule:circleArrowRightRule},
  {name:".slide-right",rule:slideRightRule},
  {name:".circle-arrow-left:before",rule:circleArrowLeftBeforeRule},
  {name:".circle-arrow-left",rule:circleArrowLeftRule},
  {name:".arrow-left",rule:arrowLeftRule},
  {name:".slide-left",rule:slideLeftRule},
  {name:".preview-cont",rule:previewContRule},
  {name:".image-preview",rule:imagePreviewRule},
  {name:".image-cont",rule:imageContRule},
  {name:".carousel",rule:carouselRule},
  {name:".carousel-height",rule:carouselHeightRule},
  {name:".carousel-container", rule:carouselContainerRule},
  {name:":root", rule:rootRule}
]

ruleConstructor.forEach(function(r) {
  addCSSRule(document.styleSheets[0], r.name, r.rule, 0);
})
sheet.insertRule(`@media only screen and (max-device-width: 480px) {
  .carousel {
    background-color: rgba(0,0,0,0.5);
  }
  .slide-left, .slide-right {
    opacity: 1;
    background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0));
  }

  .circle-arrow-right {
    margin-right: calc(var(--height) * 0.001);
    border: 2px solid rgba(255,255,255,0);
  }
  .circle-arrow-right:before {
    border-left: solid var(--arrow_size) rgba(255,255,255,.25);
  }
  .circle-arrow-left {
    margin-left: calc(var(--height) * 0.001);
    border: 2px solid rgba(255,255,255,0);
  }
  .circle-arrow-left:before {
    border-right: solid var(--arrow_size) rgba(255,255,255,.25);
  }
}`,0)
// CSS RULES

var mobile = false;

if (/Mobi/.test(navigator.userAgent)) {
  mobile = true;
}


function setCarouselAspectRatio() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var windowAR = windowWidth / windowHeight;

  if (windowAR <= 3) {
    var carouselHeight = windowHeight;
    document.documentElement.style.setProperty('--height', carouselHeight + "px");
  }
}



function checkImageSize() {

  var windowWidth = $(window).width();
  var windowHeight = $(window).height() * 0.75;
  var windowAR = windowWidth / windowHeight;

  var imageCont = $('.image-cont')[imageIndex]
  var image = $(imageCont).find('img')
  var imageWidth = $(image).width()
  var imageHeight = $(image).height()
  var imageAR = imageWidth / imageHeight;

  var percentage = windowAR / imageAR;

  if (percentage < 1) {
    $(image).css('width', '100%')
    $(image).css('height', 'auto')
  } else {
    $(image).css('width', 'auto')
    $(image).css('height', '100%')
  }

  if (percentage < 1) {
    $('.carousel-height').css('height', image.height())
    if (mobile) {
      document.documentElement.style.setProperty('--height', windowHeight + "px");
    } else {
      var previewHeight = image.height() * 0.25;
      document.documentElement.style.setProperty('--height', image.height() + previewHeight + "px");
    }
    $('.image-preview').css('padding', 0)
    $('.preview-cont').css('margin', 0)

  } else {
    $('.carousel-height').css('height', 'calc(var(--height) * 0.75)')
    if (!mobile){
      $('.image-preview').css('padding', 'calc(2 * (var(--height) * 0.01))')
      $('.preview-cont').css('margin', 'calc(var(--height) * 0.005)')
    }
  }


}





function createCarousel(imageUrls) {
  setCarouselAspectRatio();
  document.documentElement.style.setProperty('--picture_number', imageUrls.length);
  var carouselString = ''
  var imageList = ''
  var imagePreviewList = ''


  for (var i = 0; i <= imageUrls.length - 1; i++) {
    if (i === 0) {
      imageList += `
          <div class="carousel-height image-cont">
            <img class="active car-img" src="${imageUrls[i]}">
          </div>
        `
      imagePreviewList += `
          <div class="preview-cont">
            <div class="active-preview" style="background-image: url('${imageUrls[i]}'); background-size: cover; background-position: center; height: 100%; width: 100%;"></div>
          </div>
        `
    } else {
      imageList += `
          <div class="carousel-height image-cont">
            <img class="in-active car-img" data-src="${imageUrls[i]}">
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
        <div class="carousel-height slide-left">
          <div class="circle-arrow-left"></div>
        </div>
        <div class="carousel-height slide-right">
          <div class="circle-arrow-right"></div>
        </div>
        <div class="carousel-height carousel">
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
    $('.plugin-carousel').append(div.children[0]);
  }



  // SIZE INITIAL IMAGE
  var imageCont = $('.image-cont')[0]
  var initImage = $(imageCont).find('img')

  initImage.on('load', function() {
    checkImageSize()
  })
  // SIZE INITIAL IMAGE



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
  checkImageSize()
})
$('.slide-right').on('click', function() {
  deactivateImage()
  imageIndex += 1
  if (imageIndex > maxImageIndex) {
    imageIndex = 0
  }
  activateImage()
  carousel.css('margin-left', (imageIndex * -100) + '%')
  checkImageSize()
})



$('.image-preview').on('click', '.preview-cont', function() {
  deactivateImage()
  imageIndex = $(this).index()
  activateImage()
  carousel.css('margin-left', (imageIndex * -100) + '%')
  checkImageSize()
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
  setCarouselAspectRatio()

  checkImageSize()

});
