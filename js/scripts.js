var input = document.querySelector('input[type="search"]');
var imageLinks = document.querySelectorAll("a");

input.addEventListener("keyup", function () {
  var str = input.value.toLowerCase();

  for (var i = 0; i < imageLinks.length; i++) {
    var caption = imageLinks[i].getAttribute("data-title").toLowerCase();

    if (caption.includes(str)) {
      imageLinks[i].setAttribute("data-lightbox", "gallery");
      imageLinks[i].style.display = "block";
    } else {
      imageLinks[i].setAttribute("data-lightbox", "");
      imageLinks[i].style.display = "none";
    }
  }
});

input.addEventListener("search", function () {
  if ("" === input.value) {
    for (var i = 0; i < imageLinks.length; i++) {
      imageLinks[i].setAttribute("data-lightbox", "gallery");
      imageLinks[i].style.display = "block";
    }
  }
});

lightbox.option({
  wrapAround: true,
});
