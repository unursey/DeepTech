document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".present__banner-video");
  const image = document.querySelector(".present__banner-img");

  //let detect = new MobileDetect(window.navigator.userAgent);

  //if (detect.mobile() === null) {
  //  video.play();
    video.addEventListener("loadeddata", function () {
      
      video.style.display = "block";      
      image.style.display = "none";
    });
  // } else {
  //   video.style.display = "none";
  //   image.style.display = "block";
  // }
});
