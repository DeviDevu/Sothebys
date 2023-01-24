jQuery(document).ready(function () {


  // calculate the height of counter top in home pageBreakAfter: 


  if (jQuery('.counter_ul.m_counter_ul.undline_li').length) {
    jQuery(window).scroll(function () {
      setTimeout(function () {
        calculate_c_height();
      }, 10);
    })
  }
  if (jQuery('.counter_ul.m_counter_ul.undline_li').length) {
    function calculate_c_height() {
      let ct_height = jQuery('.counter_top').outerHeight();
      jQuery("body").get(0).style.setProperty("--counter_h", ct_height + 'px');

    }
  }


  // magnific popup

  if (jQuery('.image_link').length) {
    jQuery('.image_link').magnificPopup({
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
  jQuery('.mul_m_popup').each(function () { // the containers for all your galleries
    jQuery(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });


  // resize the input type in multistepform

  jQuery('.real_estate_steps .m_cnt .single_range').on('input', function () {

    console.log('changed')

    jQuery(this).parents('.form_range').find('input').addClass('active')
    console.log(jQuery(this).parents('.form_range').find('input').text())

    var contents = jQuery('.v_value.active').val();
    var charlength = contents.length;
    newwidth = charlength * 28;
    jQuery('.v_value.active').css({ width: newwidth });    
  });


  // when the screen goes under 575px

  jQuery(window).resize(function () {
    var width = jQuery(window).width();
    if (width < 575) {
      jQuery('.filter_bl a').click(function () {
        jQuery('drp_filter').toggleClass('active');
      })
    }
  });

  // banner carousel

  if (jQuery(".services_slider").length) {
    jQuery(".services_slider").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      autoplay: true
    });
  }
  if (jQuery('.b_slider').length) {
    jQuery('.b_slider').owlCarousel({
      loop: true,
      dots: false,
      items: 1,
      nav: false,
      autoplay: true
    });
  }


  // WISHLIST

  jQuery('.wishlist').click(function () {
    jQuery(this).toggleClass("active");
  })



  // FULL WIDTH CAROUSEL

  if (jQuery('#full_w_carousel').length) {
    jQuery("#full_w_carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      autoplay: true
    });
  }
  // IMG CAROUSEL

  if (jQuery('#img_tab_carousel').length) {
    jQuery("#img_tab_carousel").owlCarousel({
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

  var jQuerytab_owl = jQuery('#img_tab_carousell').owlCarousel({
    items: 1,
    loop: true
  });

  jQuerytab_owl.trigger('refresh.owl.carousel');

  // VIDEO CAROUSEL

  if (jQuery('#video_carousel').length) {
    jQuery("#video_carousel").owlCarousel({
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

  jQuery(".counter").counterUp({
    // delay: 19,
    // time: 1000
  });

  // SCROLLED HEADER

  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 150) {
      jQuery("#header").addClass("scrolledHead");
    } else {
      jQuery("#header").removeClass("scrolledHead");
    }
  });

  // 
  if (jQuery('.fixed_component').length) {
    jQuery(window).scroll(function () {
      var stickyEl = jQuery(window).scrollTop();
      var bannerLg = jQuery('.banner_lg').height();

      if (stickyEl >= bannerLg) {
        jQuery('.fixed_component').addClass('fixed')
        jQuery('.below_fixed').addClass('b_fixed')
      }
      else {
        jQuery('.fixed_component').removeClass('fixed');
        jQuery('.below_fixed').removeClass('b_fixed');
      }
    })
  }

  // banner slogen positioning

  //  if(jQuery('.slider_block').length){
  //   jQuery(window).scroll(function () {
  //     setTimeout(function () {
  //       calculate_ps();
  //     }, 1);
  // })
  // }
  // if(jQuery('.slider_block').length){
  //   function calculate_ps() {
  //     var pos_slogen = jQuery('.banner_btn_group');
  //     let ct_p = pos_slogen.offset().left;  
  //     console.log(ct_p);
  //     jQuery("body").get(0).style.setProperty("--position_slogen", ct_p + 'px');        

  // }

  // }

  // matchheight

  jQuery(function () {
    jQuery(".equal_height").matchHeight();
  });

  jQuery("#city-desk, #area-desk, #city, #area, .slider-1, .slider-2, .feature_check_box").on("change", function () {
    filter_ajax();
  })

});



// for DOUBLE SIDED RANGE

let sliderOne = document.getElementsByClassName('slider-1');
let sliderTwo = document.getElementsByClassName('slider-2');
let displayValOne = document.getElementsByClassName("range_1");
let displayValTwo = document.getElementsByClassName("range_2");
let sliderTrack = document.querySelectorAll(".slider_track");
let sliderMaxValue = document.getElementsByClassName("slider-1").max;
var minGap = 2;

jQuery(document).ready(function () {

  // SUCHEN BTN

  jQuery('.suchen_bttn').click(function(){
    console.log('clicked')
    jQuery('#h_search_cnt').addClass('active');
  })

  // WHEN ADD MULTIPLE ELEMENTS TO OWL SLIDER OWL NAV SHOULD CHANGE
  if (jQuery('.blc_slider .owl-dots').length) {
    jQuery(window).scroll(function () {
      console.log(" test ")
      var totalW = jQuery(window).width();
      var parentWidth = jQuery('.ser_slider_block').outerWidth();
      var lftSpace = (totalW - parentWidth) / 2;
      var changeOwlNavFirst = jQuery('.blc_slider .owl-dots button:first-child');
      var changeOwlNavLast = jQuery('.blc_slider .owl-dots button:last-child');
      var poFirst = (changeOwlNavFirst.offset().left) - lftSpace;
      var poLastLeft = (changeOwlNavLast.offset().left) - lftSpace;
      console.log(changeOwlNavLast.offset().left);
      var poLast = poLastLeft + (changeOwlNavLast.outerWidth());

      jQuery("body").get(0).style.setProperty("--position_left", poFirst + 'px');
      jQuery("body").get(0).style.setProperty("--position_right", poLast + 'px');


    })
  }

  // other information animation

  jQuery(window).scroll(function () {
    if (jQuery('.energy_bl').length) {

      // Finding the active element

      var val = jQuery('#pointable_val').text();
      console.log(val);
      jQuery('.energy_bl').each(function () {
        if (jQuery(this).attr('id') == val) {
          jQuery(this).addClass('active');
        }
      })

      //

      var totalW = jQuery(window).width();
      var active = jQuery('.energy_bl.active');
      var pointingArrow = jQuery('.pointing_triangle');
      var arrowHalf = pointingArrow.width() / 2;
      var viewedArrow = jQuery('.energy_certificate.visible .pointing_triangle');

      if (active.length == 1) {

        // when the block is horizontal .

        jQuery(window).scroll(function () {

          var neededW = jQuery('.energy_certificate_ul').width();
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

        jQuery(window).on('scroll', function () {
          jQuery(".energy_certificate").each(function () {
            if (isScrolledIntoView(jQuery(this))) {
              console.log('test');
              jQuery(this).addClass("visible");;
              jQuery('.energy_certificate_ul').addClass("visible");;
            }
            else {
              jQuery(this).removeClass("visible");
            }
          });
        });

        function isScrolledIntoView(elem) {
          ;
          var docViewTop = jQuery(window).scrollTop();
          var docViewBottom = docViewTop + jQuery(window).height();
          var elemTop = jQuery(elem).offset().top;
          var elemBottom = elemTop + jQuery(elem).height();

          return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        // when the block is vertical

        jQuery(window).scroll(function () {
          var width = jQuery(window).width();
          if (width < 768) {

            var ulTop = jQuery('.energy_certificate_ul').offset().top;
            var active = jQuery('.energy_bl.active');
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

  // var singleRange = jQuery('.single_range');
  // var visibleVal = jQuery('.v_value');
  // var val_one = jQuery('.single_r_val');

  // singleRange.on('input', function () {
  //   slideS(jQuery(this));
  // })
  // function slideS(this_element) {
  //   var frst_element = this_element.val();
  //   this_element.parents('.form_range').find(visibleVal).text(frst_element);
  //   this_element.parents('.form_range').find(val_one).text(frst_element);

  // }
  // for tab in expose page

  // jQuery('.linked_img a').click(function(){
  //   var clickedId = jQuery(this).attr('href');
  //   console.log(clickedId);  


  // })

  jQuery('.linked_img a').click(function (e) {
    e.preventDefault();
    let target = jQuery(jQuery(this).attr('href'));

    jQuery('.galerie .nav-tabs .nav-link').removeClass('active');
    jQuery('.galerie .nav-tabs .nav-link.common_tab').addClass('active');

    target.addClass('clicked');
    console.log(target);

    let parent = target.parents('.tab-pane');

    jQuery('.galerie_body .tab-pane').removeClass('show , active');

    parent.addClass('active show');
    jQuery([document.documentElement, document.body]).animate({
      scrollTop: jQuery(target).offset().top
    }, 0);



    // parent.fadeIn();

  })
  // when underline is visible on viewport the animation should perform

  // range animation underline

  jQuery(window).on('scroll', function () {
    jQuery(".undline ").each(function () {
      if (isScrolledIntoView(jQuery(this))) {
        jQuery(this).addClass("active");
      }
    });
    jQuery(".fullw_undline").each(function () {
      if (isScrolledIntoView(jQuery(this))) {
        jQuery(this).addClass("active");
      }

    });
    jQuery(".undline_li ").each(function () {
      if (isScrolledIntoView(jQuery(this))) {
        jQuery(this).addClass("active");
      }
    });
    jQuery(".undline_li").each(function () {
      if (isScrolledIntoView(jQuery(this))) {
        jQuery(this).addClass("active");
      }

    });
    jQuery(".undline_sm ").each(function () {
      if (isScrolledIntoView(jQuery(this))) {
        jQuery(this).addClass("active");
      }
    });
    jQuery(".undline_sm").each(function () {
      if (isScrolledIntoView(jQuery(this))) {
        jQuery(this).addClass("active");
      }

    });
    jQuery(".range_undline.fullw_undline").each(function () {
      if (isScrolledIntoView(jQuery(this))) {
        jQuery(this).addClass("active");
      }
      else {
        jQuery(this).removeClass("active");
      }

    });
  });


  // animation in home page

  function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + jQuery(window).height();

    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + jQuery(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  // FOR MULTISTEP FOR WORKING

  jQuery('.filter_bt.active').click(function () {
    jQuery('.drp_filter').addClass('active');
    jQuery('.visible_btn').addClass('active');
    jQuery('.filter_bt.active').removeClass('active');
  })

  jQuery('.visible_btn').click(function () {
    jQuery('.drp_filter').removeClass('active');
    jQuery('.filter_bt').addClass('active');
    jQuery('.visible_btn').removeClass('active');
  })

  // even if click on any part of body the form will be hidden

  jQuery(document).on('click', function (event) {
    if (!jQuery(event.target).closest('.range_drp_wrap').length) {
      jQuery('.drp_filter').removeClass('active');
      jQuery('.filter_bt').addClass('active');
      jQuery('.visible_btn').removeClass('active');
    }
  });


  // double sided range movement 

  jQuery('.slider-1').on('input', function () {
    slideOne(jQuery(this));
  })
  jQuery('.slider-2').on('input', function () {
    slideTwo(jQuery(this));
  })
  jQuery('#cls').click(function () {
    resetSlider();
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
  var maxValues = jQuery('input.slider-2').attr('max');

  jQuery(".slider-1").val(0);
  jQuery('.range_1').text(0);

  // reset the checkbox 
  jQuery('.filter input[type="checkbox"]').prop('checked', false);

  // reset the selectbox 

  jQuery('.btn_select').prop('selectedIndex', 0);;
  //  fetch the maxval of input range and reset .

  jQuery.each(jQuery('.range_2'), function (i) {
    var n = jQuery(this).parents('.range_values').siblings(".range_slider").find('.multi_range .slider-2').attr('max');
    jQuery(this).parents('.range_values').siblings(".range_slider").find('.multi_range .slider-2').val(n);
    jQuery(this).text(n);
    var gradient = ' #BD9B46 ';
    jQuery(this).parents('.range_values').siblings(".range_slider").find('.slider_track').css("background", gradient);
    ;
  });

  // console.log(jQuery('.range_1').text());
  jQuery(".slider-1").attr({
    // "max" : 100,        // substitute your own
    "min": 0         // values (or variables) here
  });
}


jQuery(document).ready(function () {

  // VIDEO SHOULD PLAY  WHEN IT COMES TO VIEWPORT 

  var elementTop, elementBottom, viewportTop, viewportBottom;

  function isScrolledIntoView(elem) {
    elementTop = jQuery(elem).offset().top;
    elementBottom = elementTop + jQuery(elem).outerHeight();
    viewportTop = jQuery(window).scrollTop();
    viewportBottom = viewportTop + jQuery(window).height();
    return (elementBottom > viewportTop && elementTop < viewportBottom);
  }

  if (jQuery('.video-box').length) {


    // VIDEO SHOULD PLAY  WHEN IT COMES TO VIEWPORT 

    var elementTop, elementBottom, viewportTop, viewportBottom;

    function isScrolledIntoView(elem) {
      elementTop = $(elem).offset().top;
      elementBottom = elementTop + $(elem).outerHeight();
      viewportTop = $(window).scrollTop();
      viewportBottom = viewportTop + $(window).height();
      return (elementBottom > viewportTop && elementTop < viewportBottom);
    }

    if (jQuery('.video-box').length) {



      jQuery(window).on('scroll', function () {
        var video = jQuery('#loadvideo');
        if (isScrolledIntoView($(video))) {
          video[0].play();
          console.log('play')
        }
        else {
          video[0].pause();
          console.log('pause')
        }
      });

    }

  } // end .field--name-field-video

  //  WHEN WINDOWS LOADS IMG SHOULD NOT BE VISIBLE

  if (jQuery('#banner_video').length) {
    window.addEventListener("load", function () {
      var none_img = document.querySelector(".banner_img");
      none_img.style.opacity = "0";
      jQuery('.fadeout').addClass('active');
      jQuery('#banner_video')[0].play();

      // first underline should start when loads

      jQuery('.frst_headline.undline').addClass('active');
    });
  }
});
// Ajax
function filter_ajax() {
  var ids = [];
  var city_desk = jQuery("#city-desk").val();
  var area_desk = jQuery("#area-desk").val();
  var city = jQuery("#city").val();
  var area = jQuery("#area").val();
  var price_1 = jQuery(".price_1").val();
  var price_2 = jQuery(".price_2").val();
  var area_1 = jQuery(".area_1").val();
  var area_2 = jQuery(".area_2").val();
  var rooms_1 = jQuery(".rooms_1").val();
  var rooms_2 = jQuery(".rooms_2").val();
  var radius_1 = jQuery(".radius_1").val();
  var radius_2 = jQuery(".radius_2").val();
  var page = jQuery('debug').html();
  jQuery('input[name="feature_check"]:checked').each(function () {
    ids.push(this.value);
  });

  // var fee     =   jQuery('[name="fee"]:checked').val(); 
  // var initial_term = jQuery('[name="initial_term"]:checked').val();
  // var rate_type = jQuery('[name="rate_type"]:checked').val();
  // console.log(myAjax.ajaxurl);
  // console.log("city_desk"+city_desk);
  // console.log("area_desk"+area_desk);
  // console.log("city"+city);
  // console.log("area"+area);
  // console.log("page"+page);
  // console.log("price_1"+price_1);
  // console.log("price_2"+price_2);
  // console.log("area_1"+area_1);
  // console.log("area_2"+area_2);
  // console.log("rooms_1"+rooms_1);
  // console.log("rooms_2"+rooms_2);
  // console.log("radius_1"+radius_1);
  // console.log("radius_2"+radius_2);
  // console.log("ids"+ids);

  // var nonce = jQuery("#nonce").val(); 

  jQuery.ajax({
    type: 'POST',
    data: {
      action: 'immobilien_filter',
      city_desk: city_desk,
      area_desk: area_desk,
      city: city,
      area: area,
      page: page,
      ids: ids,
      price_1: price_1,
      price_2: price_2,
      area_1: area_1,
      area_2: area_2,
      rooms_1: rooms_1,
      rooms_2: rooms_2,
      radius_1: radius_1,
      radius_2: radius_2
    },
    url: myAjax.ajaxurl,
    success: function (data) {
      var div = jQuery("#immobilien_custom");
      div.empty();
      jQuery(".nationel_properties_block").hide();
      jQuery(".nationel_properties_block").hide();
      div.prepend(data);
    }
  });
}