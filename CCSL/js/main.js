var current = -1, slides = 4, changing = false, lastY
var tweener = new TimelineLite()
var typeIt = new TypeIt('.typed', {
  speed: 300,
  autoStart: true,
  breakLines: false,
  lifeLike: true,
  startDelay: 2000,
  strings: ["THINK.", "CREATE.", "CHANGE.", "LEAD."]
});

function initialize() {
  tweener.set($(".slide .title"), {autoAlpha: 0})
  tweener.set($(".slide .content"), {autoAlpha: 0})
  tweener.set($(".slideImage"), {autoAlpha: 0})
  tweener.from($("#logo"), 1, {opacity: 0})

  $(window).on("resize", updateSizing);
  updateSizing()
  goTo(0)

  $("body").on("mousewheel", function(e) { navigate(e.originalEvent.deltaY) })

  $("body").on("touchstart", function(e){  lastY = e.originalEvent.touches[0].clientY })

  $("body").on("touchend", function(e) { navigate(lastY - e.originalEvent.changedTouches[0].clientY) })

}

function updateSizing() {
  var wiper_height = $("#logo").height() + 2 * parseInt($("#logo").css("top"))
  $(".slide-contents").each((i, e) =>  {
    var calculated_top = ($(window).height() - $(e).height()) / 2
    $(e).css("margin-top", max(calculated_top, wiper_height + 15))
  });
  if(current >= 0) $(".wiper").height(wiper_height)

  if($(window).width() < 800) {
    $(".slideImage.enabled").addClass("slide")
    if(slides != $(".slide").length) {
      slides = $(".slide").length
      goTo(0)
    }
  }
  else {
    $(".slideImage.enabled").removeClass("slide")
    if(slides != $(".slide").length) {
      slides = $(".slide").length
      goTo(0)
    }
  }
}

function goTo(slideNumber) {
  if (current != slideNumber) {
    var wiper_height = $("#logo").height() + 2 * parseInt($("#logo").css("top"))
    changing = true

    if (current >= 0) {
      tweener.to($(".slide .content")[current], 0.5, {autoAlpha: 0})
      tweener.to($(".slide .underline")[current], 0.5, {width: 0}, "-=0.5")
      tweener.to($(".slide .title")[current], 0.25, {x: -300}, "-=0.25")
      tweener.to($(".slide"), 0, {autoAlpha: 0, zIndex: -1})
      tweener.to($(".slideImage"), 0, {autoAlpha: 0, zIndex: -1})
    }

    if(current > slideNumber) {
      tweener.fromTo($(".wiper"), 0.5, {height: wiper_height, y:0}, {height: $(window).height()})
      tweener.set($(".slide")[slideNumber], {autoAlpha: 1})
      tweener.to($(".wiper"), 0.5, {y: $(window).height()})
      tweener.fromTo($(".wiper"), 0.5, {y: 0, height: 0}, {height: wiper_height})
    }
    else {
      tweener.to($(".wiper"), 0.5, {height: 0})
      tweener.set($(".wiper"), {y: $(window).height(), height: "100vh"})
      tweener.to($(".wiper"), 0.5, {y:0})
      tweener.set($(".slide")[slideNumber], {autoAlpha: 1})
      tweener.to($(".wiper"), 0.5, {height: wiper_height})
    }

    tweener.set($(".slide")[slideNumber], {zIndex: 2})
    if($(window).width() >= 800) tweener.to($(".slideImage")[slideNumber], 1, {zIndex: 2, autoAlpha: 1}, "-=0.5")
    tweener.fromTo($(".slide .title")[slideNumber], 0.25, {x: -300}, {color: "black", x: 0, autoAlpha: 1 })
    tweener.fromTo($(".slide .underline")[slideNumber], 0.25, {width: 0}, {background: "black", width: 200})
    tweener.fromTo($(".slide .content")[slideNumber], 0.5, {y: 1000}, {color: "black", y: 0, autoAlpha: 1 })
    setTimeout(() => {
      changing = false;
      current = slideNumber;
    }, 3000)

  }
}

function navigate(deltaY) {
  if(!changing) {
    if (deltaY > 200 && current < slides - 1) {
      if(current == slides - 2) {
        $(".scroll-down").hide()
      }
      else {
        $(".scroll-down").show()
      }
      goTo(current + 1)
    }
    else if(deltaY < -200 && current > 0) {
      $(".scroll-down").show()
      goTo(current - 1)
    }
  }
}

function max(x, y) {
  return x < y? y : x
}

initialize()
