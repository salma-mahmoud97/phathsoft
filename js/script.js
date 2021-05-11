var i = 0;
var slideImg = [
  "img/intro-img1.jpg",
  "img/intro-img2.jpg",
  "img/intro-img3.jpg",
];
var slidShow = function () {
  document.slideshow.src = slideImg[i];

  if (i < slideImg.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("slidShow()", 5000);
};
slidShow();
