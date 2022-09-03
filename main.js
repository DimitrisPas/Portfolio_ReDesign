(function ($) {
  function anim_intro() {
    var tl = gsap.timeline();

    tl.to("header", {
      duration: 0.5,
      y: "0",
      ease: " Power3.in",
    })
      .to(
        ".first-line span",
        {
          duration: 0.8,
          y: "0",
          ease: "Power3.in",
        },
        "-=0.2"
      )
      .to(
        ".sec-line > div",
        {
          duration: 1,
          y: "0",
          opacity: 1,
          stagger: 0.4,
          ease: "Power3.in",
        },
        "-=0.5"
      )
      .to(".projects__intro,.work-row", {
        ScrollTrigger: {
          trigger: ".work-holder",
        },
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "Power3.in",
        stagger: 0.4,
      });
  }

  $(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    anim_intro();

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $("header").addClass("scrolled");
        $("body").addClass("change-bg");
      } else {
        $("header").removeClass("scrolled");
        $("body").removeClass("change-bg");
      }
    });

    var cursor = $(".cursor"),
      follower = $(".cursor-follower");

    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 10,
            top: posY - 10,
          },
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    $(document).on("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    $("a, .clickable, .button, input, textarea").on("mouseenter", function () {
      cursor.addClass("active");
      follower.addClass("active");
    });
    $("a, .clickable, .button, input, textarea").on("mouseleave", function () {
      cursor.removeClass("active");
      follower.removeClass("active");
    });

    var title = $("title").text();
    var new_title = `Please come back, I miss you😔”`;

    window.addEventListener("focus", resetTitleicon);

    window.addEventListener("blur", changeTitleicon);

    function changeTitleicon() {
      $("title").text(new_title);
    }

    function resetTitleicon() {
      $("title").text(title);
    }
  });

  $("#home").on("click", function () {
    $("body").scrollTop(0);
  });
})(jQuery);
