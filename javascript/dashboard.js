$(document).ready(function() {

	let currentImageNumber = 0;
	$("#1").hide();
	$("#2").hide();
	$("#3").hide();
	$("#4").hide();

	$(".tab").click(function() {
		$('#tabs-wrapper > .large-tab').removeClass("large-tab").addClass("reg-tab");
		$(this).removeClass("reg-tab").addClass("large-tab");

		$("#" + currentImageNumber).hide();
		currentImageNumber = parseInt($(this).attr("class"), 10);
		$("#" + currentImageNumber).show();

		if (currentImageNumber < 2) {
			$('.subtab.0').html("List Mode");
			$('.subtab.1').html("Calendar Mode");
		} else {
			$('.subtab.0').html("Circle Members");
			$('.subtab.1').html("Schedule Analytics");
		}

		$('.subtab.0').removeClass("reg-subtab").addClass("large-subtab");
		$('.subtab.1').removeClass("large-subtab").addClass("reg-subtab");		
	})

	$(".subtab").click(function() {
		$('#subtab-wrapper > .large-subtab').removeClass("large-subtab").addClass("reg-subtab");
		$(this).removeClass("reg-subtab").addClass("large-subtab");

		$("#" + currentImageNumber).hide();
		if (currentImageNumber < 2) {
			currentImageNumber = parseInt($(this).attr("class"), 10);
		} else {
			currentImageNumber = parseInt($(this).attr("class"), 10) + 2;
		}
		$("#" + currentImageNumber).show();		
	})

});
