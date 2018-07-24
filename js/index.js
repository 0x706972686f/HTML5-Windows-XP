
// Dismiss start menu when desktop clicked
$('.screen').click(function(e){
  if($(e.target).hasClass('screen')) {
    $('#start-menu-active').prop('checked', false);
  }
});

// Keep clock updated
function updateClock() {
  var now = new Date();
  //$('.start-button').text(now.toLocaleTimeString());
}
var oneMinute = 1000 * 60;
var now = new Date();
var timeUntilMinuteTick = 
    oneMinute - 
    (now.getSeconds() * 1000 + now.getMilliseconds());
setTimeout(function(){
  updateClock();
  setInterval(updateClock, oneMinute);
}, timeUntilMinuteTick);
updateClock();

// Maintain aspect ratio while resizing viewport
$(window).resize(function(){
  $('.screen').css('width', '120vh');
  $('.screen').css('height', '90vh');
  
  if($('.screen').width() >= $('.container').width()) {
    $('.screen').css('width', $('.container').width() + 'px');
    $('.screen').css('height', ($('.container').width() / 4 * 3) + 'px');
  }
});

var mouseIsDown = false,
		offsetX = 10,
		offsetY = 10,
		resizeDir = false,
		minWidth = 200,
		minHeight = 200;


$(".title-bar, .resize-s, .resize-se, .resize-e,.resize-w, .resize-n, .resize-sw, .resize-nw, .resize-ne").mousedown(function(e) {
		offsetX = e.offsetX;
		offsetY = e.offsetY;
		mouseIsDown = true;
		resizeDir = $(e.target).attr("class");
});

$(window).mouseup(function(e) {
		mouseIsDown = false;
});
$(window).mousemove(function(e) {
		if (mouseIsDown) {
				var newWidth, newHeight, newX, newY;
				if (resizeDir === "title-bar") {
						$(".window").css({
								left: e.pageX - offsetX,
								top: e.pageY - offsetY
						});
				} else if (resizeDir === "resize-e") {

						newWidth = e.pageX - $(".window").offset().left
						if (newWidth <= minWidth) {
								newWidth = 200;
						}
				} else if (resizeDir === "resize-w") {

						newX = $(".window").offset().left - ($(".window").offset().left - e.pageX)
						newWidth = $(".window").width() + $(".window").offset().left - e.pageX;
						if (newWidth <= minWidth) {
								newWidth = 200;
								newX = $(".window").offset().left;
						}

				} else if (resizeDir === "resize-n") {

						newY = $(".window").offset().top - ($(".window").offset().top - e.pageY);
						newHeight = $(".window").height() + $(".window").offset().top - e.pageY;
						if (newHeight <= minHeight) {
								newHeight = 200;
								newY = $(".window").offset().top;
						}

				} else if (resizeDir === "resize-nw") {

						newY = $(".window").offset().top - ($(".window").offset().top - e.pageY);
						newHeight = $(".window").height() + $(".window").offset().top - e.pageY;
						if (newHeight <= minHeight) {
								newHeight = 200;
								newY = $(".window").offset().top;
						};
						newX = $(".window").offset().left - ($(".window").offset().left - e.pageX)
						newWidth = $(".window").width() + $(".window").offset().left - e.pageX;
						if (newWidth <= minWidth) {
								newWidth = 200;
								newX = $(".window").offset().left;
						}

				} else if (resizeDir === "resize-ne") {

						newY = $(".window").offset().top - ($(".window").offset().top - e.pageY);
						newHeight = $(".window").height() + $(".window").offset().top - e.pageY;
						if (newHeight <= minHeight) {
								newHeight = 200;
								newY = $(".window").offset().top;
						};
						newWidth = e.pageX - $(".window").offset().left
						if (newWidth <= minWidth) {
								newWidth = 200;
						}

				} else if (resizeDir === "resize-s") {
						newHeight = e.pageY - $(".window").offset().top
						if (newHeight <= minHeight) {
								newHeight = 200;
						}
				} else if (resizeDir === "resize-se") {
						newHeight = e.pageY - $(".window").offset().top
						if (newHeight <= minHeight) {
								newHeight = 200;
						}
						newWidth = e.pageX - $(".window").offset().left
						if (newWidth <= minWidth) {
								newWidth = 200;
						}
				} else if (resizeDir === "resize-sw") {
						newHeight = e.pageY - $(".window").offset().top
						if (newHeight <= minHeight) {
								newHeight = 200;
						}
						newX = $(".window").offset().left - ($(".window").offset().left - e.pageX)
						newWidth = $(".window").width() + $(".window").offset().left - e.pageX;
						if (newWidth <= minWidth) {
								newWidth = 200;
								newX = $(".window").offset().left;
						}
				}
				$(".resize-e, .resize-w").css({
						height: $(".window").height() - 10
				});
				$(".resize-s, .resize-n").css({
						width: $(".window").width() - 10
				});
				$(".window").css({
						width: newWidth,
						height: newHeight,
						left: newX,
						top: newY
				});
				$(".title-bar").css({
						width: newWidth
				});
				$(".content").css({
						width: newWidth - 4,
						height: newHeight - 35
				});
		}
});


$("#computer").click(function(){
    $("#window").show();
});


$("#closewindow").click(function(){
    $("#window").hide();
});