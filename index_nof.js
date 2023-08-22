// Begin XHTML adjustment
$(document).ready(function(){
	if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) == "6.") {
		$(".nof-clearfix").each(function (i) {
			$(this).append("<div style='clear:both'/>");
			$(this).removeClass("nof-clearfix");
		});
	}
});

// End XHTML adjustment

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar1"] = {
	"NavigationButton1" : { image: "./Home_Hp_highlighted_1.png", rollover: "./Home_HRp_highlightedOver_1.png", w: 125, h: 52 },
	"NavigationButton2" : { image: "./About_Np_regular.png", rollover: "./About_NRp_regularOver.png", w: 125, h: 52, opening: "bottom", offsetX: 0, offsetY: 52 },
	"NavigationButton8" : { image: "./Testimonials_Ns_regular.gif", rollover: "./Testimonials_NRs_regularOver.gif", w: 120, h: 30 },
	"NavigationButton10" : { image: "./Services_Ns_regular.gif", rollover: "./Services_NRs_regularOver.gif", w: 120, h: 30 },
	"NavigationButton3" : { image: "./Contact-Us_Np_regular_1.png", rollover: "./Contact-Us_NRp_regularOver_1.png", w: 125, h: 52, opening: "bottom", offsetX: 0, offsetY: 52 },
	"NavigationButton13" : { image: "./Location_Ns_regular.gif", rollover: "./Location_NRs_regularOver.gif", w: 120, h: 30 },
	"NavigationButton4" : { image: "./Events_Np_regular.png", rollover: "./Events_NRp_regularOver.png", w: 125, h: 52, opening: "bottom", offsetX: 0, offsetY: 52 },
	"NavigationButton16" : { image: "./Photo-Gallery_Ns_regular.gif", rollover: "./Photo-Gallery_NRs_regularOver.gif", w: 120, h: 30 },
	"NavigationButton18" : { image: "./Photos_Ns_regular.gif", rollover: "./Photos_NRs_regularOver.gif", w: 120, h: 30 },
	"NavigationButton5" : { image: "./FAQ_Np_regular.png", rollover: "./FAQ_NRp_regularOver.png", w: 125, h: 52 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar1", rollover: true, autoClose: true });
	$("#NavigationBar1").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar1_1").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#NavigationBar1_2").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#NavigationBar1_3").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#NavigationBar1_4").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#NavigationBar1 ul").hide();
});


// End Navigation Bars

