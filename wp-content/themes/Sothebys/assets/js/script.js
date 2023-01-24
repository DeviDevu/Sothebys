$(document).ready(function () {
  // finding space between banner
  // when aos animates add class
  document.addEventListener('aos:in', ({ detail }) => {    
    detail.classList.add("aos_active");
  });
  if ($('.banner.home_page').length) {


    // if (window.matchMedia('(max-width: 720px)').matches) {
    //     // $('.navbar-collapse').removeClass('show');
    //     // $('.navbar-toggler').addClass('collapsed');
    // }
    var height1 = $('.banner.home_page .slider_ul_block').height();
    var height2 = $('.banner.home_page .dropdown_banner').height();
    var totalheight = height1 + height2;
    var totalheight2 = height1 + (height2 / 2);
    $('.banner.home_page').css('margin-bottom', totalheight);
    calculateHeight();
    calculateDropdownHeight();

    // finding the sibling and removing padding top: 
    var bannerSibling = $('.banner').next()
    bannerSibling.addClass('pt-4');
    bannerSibling.find('.inter_reality_body').addClass('pt-0');
    //  bannerSibling.css('background' , 'red');
    bannerSibling.attr('id', 'banner_btm');

    // customizing dropdown scrollBehavior

    $(".dropdown_banner").click(function (event) {
      event.preventDefault();
      var headerHeight = $('header').outerHeight();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - headerHeight }, 500);
    });
  }
  // finding height of banner
  function calculateHeight() {
    $("body").get(0).style.setProperty("--bannerbtm", totalheight + 'px');
  }
  // finding height of banner
  function calculateDropdownHeight() {
    totalheight = $('.dropdown_banner').height();
    $("body").get(0).style.setProperty("--bannerDropdown", totalheight + 'px');
  }








  // calculate the height of counter top in home pageBreakAfter: 

  if ($('.counter_ul.m_counter_ul.undline_li').length) {
    $(window).scroll(function () {
      setTimeout(function () {
        calculate_c_height();
      }, 10);
    })
  }
  if ($('.counter_ul.m_counter_ul.undline_li').length) {
    function calculate_c_height() {
      let ct_height = $('.counter_top').height();
      $("body").get(0).style.setProperty("--counter_h", ct_height + 'px');

    }
  }

  // magnific popup

  if ($('.image_link').length) {
    $('.image_link').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      closeOnContentClick: true,
      closeBtnInside: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }

    });
  }

  // multiple magnific popup  
  $('.mul_m_popup').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });

  // when the screen goes under 575px

  $(window).resize(function () {
    var width = $(window).width();
    if (width < 575) {
      $('.filter_bl a').click(function () {
        $('drp_filter').toggleClass('active');
      })
    }
  });


  // banner carousel

  if ($(".services_slider").length) {
    $(".services_slider").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      autoplay: true
    });
  }
  if ($('.b_slider').length) {
    $('.b_slider').owlCarousel({
      loop: true,
      dots: false,
      items: 1,
      nav: false,
      autoplay: true
    });
  }

  // WISHLIST

  $('.wishlist').click(function () {
    $(this).toggleClass("active");
  })

  //  if more marketing class are there

  $('.marketing.cnt_sec').each(function (index, obj) {
    if (index % 2 != 0) {
      $(obj).removeClass('ccnt_last');
    }
  });

  //  checkbox



  jQuery(function () {
    jQuery('.checkbox input[type="checkbox"]').change(function () {
      if (jQuery(this).is(':checked')) {
        jQuery(this).parents('.checkbox').find('.check').to('active');
      };
    });
  });
  // FULL WIDTH CAROUSEL

  if ($('#full_w_carousel').length) {
    $("#full_w_carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      autoplay: true
    });
  }
  // IMG CAROUSEL

  if ($('#img_tab_carousel').length) {
    $("#img_tab_carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      margin: 20,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1,
          stagePadding: 40,
          margin: 0,
        },
        1000: {
          items: 2,
          stagePadding: 150,
        }
      }
    });
  }

  // owl error issue 

  var $tab_owl = $('#img_tab_carousell').owlCarousel({
    items: 1,
    loop: true
  });

  $tab_owl.trigger('refresh.owl.carousel');

  // VIDEO CAROUSEL

  if ($('#video_carousel').length) {
    $("#video_carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1,
          stagePadding: 40,
          margin: 0,
        },
        1000: {
          items: 2,
          stagePadding: 150,
          margin: 30
        }
      }
    });
  }
  // Counter animation

  $(".counter").counterUp({
    // delay: 19,
    // time: 1000
  });

  // SCROLLED HEADER

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $("#header").addClass("scrolledHead");
    } else {
      $("#header").removeClass("scrolledHead");
    }
  });

  // 
  if ($('.fixed_component').length) {
    $(window).scroll(function () {
      var stickyEl = $(window).scrollTop();
      var bannerLg = $('.banner_lg').height();

      if (stickyEl >= bannerLg) {
        $('.fixed_component').addClass('fixed')
        $('.below_fixed').addClass('b_fixed')
      }
      else {
        $('.fixed_component').removeClass('fixed');
        $('.below_fixed').removeClass('b_fixed');
      }
    })
  }

  // matchheight

  $(function () {
    $(".equal_height").matchHeight();
  });



});

// for DOUBLE SIDED RANGE

let sliderOne = document.getElementsByClassName('slider-1');
let sliderTwo = document.getElementsByClassName('slider-2');
let displayValOne = document.getElementsByClassName("range_1");
let displayValTwo = document.getElementsByClassName("range_2");
let sliderTrack = document.querySelectorAll(".slider_track");
let sliderMaxValue = document.getElementsByClassName("slider-1").max;
var minGap = 2;

$(document).ready(function () {

  // other information animation


  $(window).scroll(function () {
    if ($('.energy_bl').length) {

      // Finding the active element

      var val = $('#pointable_val').text();
      console.log(val);
      $('.energy_bl').each(function () {
        if ($(this).attr('id') == val) {
          $(this).addClass('active');
        }
      })

      //

      var totalW = $(window).width();
      var active = $('.energy_bl.active');
      var pointingArrow = $('.pointing_triangle');
      var arrowHalf = pointingArrow.width() / 2;
      var viewedArrow = $('.other_body.visible .pointing_triangle');

      if (active.length == 1) {

        // when the block is horizontal .

        $(window).scroll(function () {

          var neededW = $('.energy_certificate_ul').width();
          var lftrgtSpace = (totalW - neededW) / 2;
          // console.log('space in left: ' , lftrgtSpace)       ;   
          var activeLeft = active.offset().left;
          // console.log('left position of active element :' , activeLeft)
          // var activeLengthHalf = active.parent().width() / 2;    
          // console.log(' length of parent li : ' , activeLengthHalf);                   
          var activePos = activeLeft - lftrgtSpace;
          // console.log('active position : ' , activePos)                
          viewedArrow.animate({
            left: activePos,
          }, 1000)
        })
        // visible on viewport

        $(window).on('scroll', function () {
          $(".other_body").each(function () {
            if (isScrolledIntoView($(this))) {
              $(this).addClass("visible");;
            }
            else {
              $(this).removeClass("visible");
            }
          });
        });

        function isScrolledIntoView(elem) {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top;
          var elemBottom = elemTop + $(elem).height();

          return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        // when the block is vertical

        $(window).scroll(function () {
          var width = $(window).width();
          if (width < 768) {

            var ulTop = $('.energy_certificate_ul').offset().top;
            var active = $('.energy_bl.active');
            var activeTop = active.offset().top;
            var activeHeight = active.height() / 2;
            var neededTop = activeTop - ulTop;

            // console.log(activePos);    
            viewedArrow.animate({
              top: neededTop + activeHeight,
              left: 0
            }, 1000)
          }
        });


      }

      else {

        pointingArrow.animate({
          opacity: 0,
        })

      }
    }
  })

  // sliding starts when enteres viewport

  // AOS
  AOS.init({
    duration: 1100, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    offset: 170,

  });

  // for Single regionFragment: 

  var singleRange = $('.single_range');
  var visibleVal = $('.v_value');
  // var val_one = $('.single_r_val');

  singleRange.on('input', function () {
    slideS($(this));
  })
  function slideS(this_element) {
    var frst_element = this_element.val();
    this_element.parents('.form_range').find(visibleVal).text(frst_element);
    // this_element.parents('.form_range').find(val_one).text(frst_element);

  }

  $('.linked_img a').click(function (e) {
    e.preventDefault();
    let target = $($(this).attr('href'));

    $('.galerie .nav-tabs .nav-link').removeClass('active');
    $('.galerie .nav-tabs .nav-link.common_tab').addClass('active');

    target.addClass('clicked');
    console.log(target);

    let parent = target.parents('.tab-pane');

    $('.galerie_body .tab-pane').removeClass('show , active');

    parent.addClass('active show');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(target).offset().top
    }, 0);



    // parent.fadeIn();

  })

  // suchen btn

  $('#suchen_bttn').click(function () {
    var filter = $(this).parents('#header').find('.range_drp_wrap');
    filter.toggleClass('active');
    if ($('.h_btm_filter .drp_filter').hasClass("active")) {
      $(this).removeClass('active');
    }
    else {
      setTimeout(function () {
        $('.h_btm_filter .drp_filter').toggleClass("active");
      }, 500);
    }
  })

  $('#close_4').click(function () {
    setTimeout(function () {
      $('.header_btm.range_drp_wrap').removeClass('active');
    }, 300);

  })
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.range_drp_wrap').length) {
      if ($('.h_btm_filter .drp_filter').hasClass("active")) {
        $(this).removeClass('active');
        setTimeout(function () {
          $('.header_btm.range_drp_wrap').removeClass('active');
        }, 300);
      }
    }
  });


  // when underline is visible on viewport the animation should perform

  // range animation underline


  $(window).on('scroll', function () {
    $(".undline ").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("active");
      }
    });
    $(".fullw_undline").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("active");
      }

    });
    $(".undline_li ").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("active");
      }
    });
    $(".undline_li").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("active");
      }

    });
    $(".undline_sm ").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("active");
      }
    });
    $(".undline_sm").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("active");
      }

    });
    $(".range_undline.fullw_undline").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("active");
      }
      else {
        $(this).removeClass("active");
      }

    });
  });


  // animation in home page

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    // console.log(docViewTop);
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  // FOR MULTISTEP FOR WORKING

  $('.filter_bt.active').click(function () {
    $('.drp_filter').addClass('active');
    $('.visible_btn').addClass('active');
    $('.filter_bt.active').removeClass('active');
  })

  $('.visible_btn').click(function () {
    $('.drp_filter').removeClass('active');
    $('.filter_bt').addClass('active');
    $('.visible_btn').removeClass('active');
  })

  // even if click on any part of body the form will be hidden

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.range_drp_wrap').length) {
      $('.drp_filter').removeClass('active');
      $('.filter_bt').addClass('active');
      $('.visible_btn').removeClass('active');
    }
  });


  // double sided range movement 

  $('.slider-1').on('input', function () {
    slideOne($(this));
  })
  $('#cls').click(function () {
    resetSlider();
  })
  $('.slider-2').on('input', function () {
    slideTwo($(this));
  })
})

function slideOne(this_element) {

  var frst_element = this_element.val();
  var sec_element = this_element.parent().find('.slider-2').val();
  if ((parseInt(sec_element) - parseInt(frst_element)) <= minGap) {
    this_element.val(parseInt(sec_element) - minGap);
  }
  var range_1 = this_element.parents('.form-group').find('.range_1');
  range_1.text(this_element.val());

  fillColor(this_element.parents('.form-group'));
}
function slideTwo(this_element) {

  var sec_element = this_element.val();
  var frst_element = this_element.parent().find('.slider-1').val();


  if (parseInt(sec_element) - parseInt(frst_element) <= minGap) {
    this_element.val(parseInt(frst_element) + minGap);
  }
  var range_2 = this_element.parents('.form-group').find('.range_2');
  range_2.text(this_element.val());
  fillColor(this_element.parents('.form-group'));
}
function fillColor(this_element) {
  var sliderMaxValue = this_element.find('.slider-1').attr('max');
  var slider_1 = this_element.find('.slider-1');
  var slider_2 = this_element.find('.slider-2');

  percent1 = (slider_1.val() / sliderMaxValue) * 100;
  percent2 = (slider_2.val() / sliderMaxValue) * 100;

  var gradient = "linear-gradient(90deg, #dadae5 " + percent1 + "% , #BD9B46 " + percent1 + "% ,#BD9B46 " + percent2 + "% , #dadae5 " + percent2 + "%)";

  this_element.find('.slider_track').css("background", gradient);

}
function resetSlider() {
  var maxValues = $('input.slider-2').attr('max');

  $(".slider-1").val(0);
  $('.range_1').text(0);

  // reset the checkbox 
  $('.filter input[type="checkbox"]').prop('checked', false);

  // reset the selectbox 

  $('.btn_select').prop('selectedIndex', 0);;
  //  fetch the maxval of input range and reset .

  $.each($('.range_2'), function (i) {
    var n = $(this).parents('.range_values').siblings(".range_slider").find('.multi_range .slider-2').attr('max');
    $(this).parents('.range_values').siblings(".range_slider").find('.multi_range .slider-2').val(n);
    $(this).text(n);
    var gradient = ' #BD9B46 ';
    $(this).parents('.range_values').siblings(".range_slider").find('.slider_track').css("background", gradient);
    ;
  });

  // console.log($('.range_1').text());
  $(".slider-1").attr({
    // "max" : 100,        // substitute your own
    "min": 0         // values (or variables) here
  });
}

$(document).ready(function () {


  // resize the input type in multistepform

  $('.real_estate_steps .range_visibity_cnt .r_vls input').keydown(function () {
    var contents = $(this).val();
    console.log('resize')
    var charlength = contents.length;
    newwidth = charlength * 9;
    $(this).css({ width: newwidth });
  });

  // WHEN ADD MULTIPLE ELEMENTS TO OWL SLIDER OWL NAV SHOULD CHANGE
  if ($('.blc_slider .owl-dots').length) {
    $(window).scroll(function () {

      var totalW = $(window).width();
      var parentWidth = $('.ser_slider_block').outerWidth();
      var lftSpace = (totalW - parentWidth) / 2;
      var changeOwlNavFirst = $('.blc_slider .owl-dots button:first-child');
      var changeOwlNavLast = $('.blc_slider .owl-dots button:last-child');
      var poFirst = (changeOwlNavFirst.offset().left) - lftSpace;
      var poLastLeft = (changeOwlNavLast.offset().left) - lftSpace;
      console.log(changeOwlNavLast.offset().left);
      var poLast = poLastLeft + (changeOwlNavLast.outerWidth());

      $("body").get(0).style.setProperty("--position_left", poFirst + 'px');
      $("body").get(0).style.setProperty("--position_right", poLast + 'px');

    })
  }


  // VIDEO SHOULD PLAY  WHEN IT COMES TO VIEWPORT 

  var elementTop, elementBottom, viewportTop, viewportBottom;

  function isScrolledIntoView(elem) {
    elementTop = $(elem).offset().top;
    elementBottom = elementTop + $(elem).outerHeight();
    viewportTop = $(window).scrollTop();
    viewportBottom = viewportTop + $(window).height();
    return (elementBottom > viewportTop && elementTop < viewportBottom);
  }

  if ($('.video-box').length) {



    $(window).on('scroll', function () {
      var video = $('#loadvideo');
      if (isScrolledIntoView($(video))) {
        video[0].play();
        console.log('play')
      }
      else {
        video[0].pause();
        console.log('pause')
      }
    });

  } // end .field--name-field-video

  //  WHEN WINDOWS LOADS IMG SHOULD NOT BE VISIBLE

  if ($('#banner_video').length) {
    window.addEventListener("load", function () {
      var none_img = document.querySelector(".banner_img");
      none_img.style.opacity = "0";
      $('.fadeout').addClass('active');
      $('#banner_video')[0].play();

      // first underline should start when loads

      $('.frst_headline.undline').addClass('active');
    });
  }
});





