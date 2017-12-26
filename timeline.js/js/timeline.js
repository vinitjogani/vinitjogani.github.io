function loadcss(filename){
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
}

loadcss("https://raw.github.com/daneden/animate.css/master/animate.css")

$.fn.timeline = function(showclass, hideclass){
    currentObject = this;
    bgcursor = 0;
    max = parseInt(currentObject.attr("data-height"));
    $(window).mousewheel(function(event){
        bgcursor += event.deltaY * -5;
        if(bgcursor <= max && bgcursor >= 0){
            currentObject.children().each(function(index, el){
                el = $(el);
                if(!isNaN(parseInt(el.attr("data-top"))) && !isNaN(parseInt(el.attr("data-bottom"))))
                {
                    console.log(parseInt(el.attr("data-top"))=== NaN);
                    if(parseInt(el.attr("data-top")) < bgcursor && parseInt(el.attr("data-bottom")) > bgcursor) {
                        el.removeClass(hideclass);
                        el.fadeIn();
                        el.addClass(showclass);
                    }
                    else {
                        el.removeClass(showclass);
                        el.addClass(hideclass);
                        el.fadeOut();
                    }
                }
            });
        }
        else if (bgcursor > max) {
            bgcursor = max;
        }
        else {
            bgcursor = 0;
        }
    });
};
