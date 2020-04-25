     $('.open-overlay').click(function() {
       $('.open-overlay').css('pointer-events', 'none');
       var overlay_navigation = $('.overlay-navigation'),
         top_bar = $('.bar-top'),
         middle_bar = $('.bar-middle'),
         bottom_bar = $('.bar-bottom');

       overlay_navigation.toggleClass('overlay-active');
       if (overlay_navigation.hasClass('overlay-active')) {

         top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
         middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
         bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
         overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
         overlay_navigation.velocity('transition.slideLeftIn', {
           duration: 300,
           delay: 0,
           begin: function() {
             $('nav ul li').velocity('transition.perspectiveLeftIn', {
               stagger: 150,
               delay: 0,
               complete: function() {
                 $('nav ul li a').velocity({
                   opacity: [1, 0],
                 }, {
                   delay: 10,
                   duration: 140
                 });
                 $('.open-overlay').css('pointer-events', 'auto');
               }
             })
           }
         })

       } else {
         $('.open-overlay').css('pointer-events', 'none');
         top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
         middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
         bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
         overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
         $('nav ul li').velocity('transition.perspectiveRightOut', {
           stagger: 150,
           delay: 0,
           complete: function() {
             overlay_navigation.velocity('transition.fadeOut', {
               delay: 0,
               duration: 300,
               complete: function() {
                 $('nav ul li a').velocity({
                   opacity: [0, 1],
                 }, {
                   delay: 0,
                   duration: 50
                 });
                 $('.open-overlay').css('pointer-events', 'auto');
               }
             });
           }
         })
       }
     }) 
    

     //start of slide show
     /* user defined variables */
var timeOnSlide = 3, 		
// the time each image will remain static on the screen, measured in seconds
timeBetweenSlides = 1, 	
// the time taken to transition between images, measured in seconds

// test if the browser supports animation, and if it needs a vendor prefix to do so
animationstring = 'animation',
animation = false,
keyframeprefix = '',
domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
// array of possible vendor prefixes
pfx  = '',
slidy = document.getElementById("slidy"); 
if (slidy.style.animationName !== undefined) { animation = true; } 
// browser supports keyframe animation w/o prefixes

if( animation === false ) {
for( var i = 0; i < domPrefixes.length; i++ ) {
if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
  pfx = domPrefixes[ i ];
  animationstring = pfx + 'Animation';
  keyframeprefix = '-' + pfx.toLowerCase() + '-';
  animation = true;
  break;
}
}
}

if( animation === false ) {
// animate in JavaScript fallback
} else {
var images = slidy.getElementsByTagName("img"),
  firstImg = images[0], 
  // get the first image inside the "slidy" element.
  imgWrap = firstImg.cloneNode(false);  // copy it.
slidy.appendChild(imgWrap); // add the clone to the end of the images
var imgCount = images.length, // count the number of images in the slide, including the new cloned element
  totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
  slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
  moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
  basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
  position = 0, // set the initial position of the slidy element
  css = document.createElement("style"); // start marking a new style sheet
css.type = "text/css";
css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
for (i=0;i<(imgCount-1); i++) { // 
position+= slideRatio; // make the keyframe the position of the image
css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
position += moveRatio; // make the postion for the _next_ slide
css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
}
css.innerHTML += "}\n";
css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
document.body.appendChild(css); // add the new stylesheet to the end of the document
}

//start of modal

$(window).load(function () {
  $(".trigger_popup_fricc").click(function(){
     $('.hover_bkgr_fricc').show();
  });
  $('.hover_bkgr_fricc').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
}); 




/// image gallery
