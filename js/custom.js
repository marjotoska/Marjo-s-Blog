(function ($) {
  "use strict";
  $(document).ready(function () {
    $("#nav-expander").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("nav-expanded");
    });
    $("#nav-close").on("click", function (e) {
      e.preventDefault();
      $("body").removeClass("nav-expanded");
    });
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(".carousel").carousel({
    interval: 4000,
  });

  $(window).load(function () {
    $("#preloader").on(500).fadeOut();
    $(".preloader").on(600).fadeOut("slow");
  });

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery(".dmtop").css({ bottom: "25px" });
    } else {
      jQuery(".dmtop").css({ bottom: "-100px" });
    }
  });
  jQuery(".dmtop").click(function () {
    jQuery("html, body").animate({ scrollTop: "0px" }, 800);
    return false;
  });
})(jQuery);

function openCategory(evt, catName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(catName).style.display = "block";
  evt.currentTarget.className += " active";
}

// IMG EXPAND
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
