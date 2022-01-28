//Nav-scroll start/////////////////////////////////////////////////////////////////////////////
let screenHeight = $(window).height();

$(window).scroll(function () {
  let current = $(this).scrollTop();
  // console.log(screenHeight);
  if (current > screenHeight - 100) {
    $(".site-nav").addClass("site-nav-scroll");
  } else {
    $(".site-nav").removeClass("site-nav-scroll");
    setActive("home");
  }
});
//////////////////////////////Nav-scroll end/////////////////////////////////////////

// ////////////////////  navbar-toggler start///////////////////////////////////////////////////////////////////
$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("show");

  if (result) {
    $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
  } else {
    $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
  }
});
//////////////////////////////navbar-toggler end/////////////////////////////////////////////////////////

//wow.js start //////////////////////////////////////////////////////////////////////////////

new WOW().init();
$(".pricing-slide").slick({
  arrows: false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

///wow.js end ///////////////////////////////////////////////////////////////////////////

//waypoint.js Start/////////////////////////////////////////////////////////////////

function setActive(current) {
  $(".nav-link").removeClass("current-section");
  $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function navScroll() {
  let currentSection = $("section[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction === "down") {
        setActive($(this.element).attr("id"));
      }
    },
    {
      offset: "150px",
    }
  );
  currentSection.waypoint(
    function (direction) {
      if (direction === "up") {
        setActive($(this.element).attr("id"));
      }
    },
    {
      offset: "150px",
    }
  );
}
navScroll();

// let waypoints1 = $("#home").waypoint(
//   function (direction) {
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#home']").addClass("current-section");
//   },
//   {
//     offset: "25%",
//   }
// );
// let waypoints2 = $("#about").waypoint(
//   function (direction) {
//     $(".nav-link").removeClass("current-section");

//     $(".nav-link[href='#about']").addClass("current-section");
//   },
//   {
//     offset: "25%",
//   }
// );
// let waypoints3 = $("#service").waypoint(
//   function (direction) {
//     $(".nav-link").removeClass("current-section");

//     $(".nav-link[href='#service']").addClass("current-section");
//   },
//   {
//     offset: "25%",
//   }
// );
// let waypoints4 = $("#pricing").waypoint(
//   function (direction) {
//     $(".nav-link").removeClass("current-section");

//     $(".nav-link[href='#pricing']").addClass("current-section");
//   },
//   {
//     offset: "25%",
//   }
// );
// let waypoints5 = $("#contant").waypoint(
//   function (direction) {
//     $(".nav-link").removeClass("current-section");

//     $(".nav-link[href='#contant']").addClass("current-section");
//   },
//   {
//     offset: "25%",
//   }
// );

//waypoint.js end////////////////////////////////////////////////////////////////////////////

////////////////////////////website Loader//////////////////////////////////
$(window).on("load", function () {
  $(".loading-container").fadeOut(500, function () {
    $(this).remove();
  });
});
