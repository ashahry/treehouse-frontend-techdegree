


//Photo Gallery

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $previousArrow = $('<div id="previousArrow"><img src="icons/previous.png" alt="previous" /></div>');
var $nextArrow = $('<div id="nextArrow"><img src="icons/next.png" alt="next" /></div>');
var $closeLightbox = $('<div id="closeLightbox"><img src="icons/close.png" alt="next" /></div>');


// Creating Lighbox


// Adding overlay attached to the body
$('body').append($overlay);

//Adding the image to the overlay
$overlay.append($image);

//Appending navigation and close buttons to the overlay

$overlay.append($previousArrow);
$overlay.append($nextArrow);
$overlay.append($closeLightbox);
$overlay.append($caption);

// Get the click event on a link to an image
$('.gallery-img a').click(function(event) {

  // Prevent the link from the default behavior
  event.preventDefault();

  getCurrentImage(this);

  //Updating the overlay with the image inlked in the link


  //show the overlay
  $overlay.fadeIn(500);

  //Stop the page from scrolling when the lightbox is active
  document.body.style.overflow='hidden';

  //show the camption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

});

//When you click the escape key the overlay disappears
$('body').keydown(function(e){
    if(e.which == 27){
        $overlay.fadeOut(500);
        document.body.style.overflow='auto';
    }
});


//When you click the overlay the overlay disappears
  $closeLightbox.click(function(event) {
    $overlay.fadeOut(500);
    //Allow the page to scroll when the lightbox is inactive
    document.body.style.overflow='auto';
});


//Lightbox navigation

//When the previous button is clicked do...

$previousArrow.on("click", function() {
  getPreviousImage();
});

//When the previous arrow is pressed do...

$('body').keydown(function(event) {
  if(event.which == 37) {
    getPreviousImage();
  }
});

//When the next button is clicked do...

$nextArrow.on("click", function() {
  getNextImage();
});

//When the next arrow is pressed do...

$('body').keydown(function(event) {
  if(event.which == 39) {
    getNextImage();
  }
});


function getCurrentImage(currentImage) {
  thisImage = currentImage;
  var imageLocation = $(currentImage).attr("href");   // accessing attributes from currentImage to pull the href value
  $image.attr("src", imageLocation);   //Update overlay with the image linked in the link


//Get child's alt attribute and set caption
  var captionText = $(thisImage).children("img").attr("alt");
 $caption.text(captionText);

}

function getPreviousImage() {
  imageParent = $(thisImage).parent().prev();
  if(imageParent.length!==0){
    thisImage = $(imageParent).children("a");
      // imageLocation = $(thisImage).attr("href");
      // $image.attr("src", imageLocation);
  }
    getCurrentImage(thisImage);
}

function getNextImage() {
  imageParent = $(thisImage).parent().next();
  if(imageParent.length!==0){
  thisImage = $(imageParent).children("a");
    // imageLocation = $(thisImage).attr("href");
    // $image.attr("src", imageLocation);
  }
    getCurrentImage(thisImage);
}


// Search
