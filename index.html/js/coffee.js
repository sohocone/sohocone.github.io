/*For image fade in gallery*/

$(document).ready(function() { fadeInImage(0); });
var numImages = 5; //the total number of images fading we're fading.  This is needed so we know when to stop fading.
function fadeInImage(imageNum)
{
  if (imageNum < numImages - 1)
    //this isn't the last image, so we need to fade in the next image after this one is done.  That's what the second parameter (called a 'callback') does.
    //the first parameter (1000) is the duration of the effect in milliseconds, so it should take 1 second to fade in each image.
    $("#image" + imageNum).fadeIn(1000, function() { fadeInImage(imageNum + 1) });
  else
    //this is the last image, so we can just fade it in and be done.
    $("#image" + imageNum).fadeIn(1000);
}
