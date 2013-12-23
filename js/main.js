$(document).ready(function() {
	var validate_config = {
		rules: {
			your_name: "required",
			company_name: "required",
			position_title: "required",
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phoneUS: true
			},
			city: "required",
			country: "required",
			display_name: "required"
		},
		messages: {
			your_name: "Please enter your name",
			company_name: "Please enter your company name",
			position_title: "Please enter position/title",
			email: "Please enter a valid email address",
			phone: "Please enter a valid phone number",
			city: "Please choose a city",
			country: "Please choose a country",
			display_name: "Please enter display name"
		}
	}

	$('form#sidebar-form').validate({
		rules: validate_config.rules,
		messages: validate_config.messages,
		errorPlacement: function(error, element) {
		    if (element.attr("name") == "city" || element.attr("name") == "country" ) {
		      error.insertAfter(element.parent());
		    } else {
		      error.insertAfter(element);
		    }
		}
	});

	$('.form-newsletter').validate({
		ignore: "",
		rules: {
			your_email: {
				required: true,
				email: true
			},
			agree: "required"
		},
		messages: {
			your_email: "Please enter your email",
			agree: "Please agree with our policy"
		},
		errorPlacement: function(error, element) {
		    if (element.attr("name") == "your_email") {
		     	error.insertAfter(element.parent());
		    } else if (element.attr("name") == "agree" ){
		    	error.insertAfter(element.parent().parent());
		    } else {
		     	error.insertAfter(element);
		    }
		}
	});

	$('.carousel').carousel();

	$('.dropdown-menu li').on('click', function() {
		var selection = $(this).data('value');
		$(this).parents('.input-group-btn').siblings('input').val(selection);
	});

	$('.agree_checkbox').on('click', function() {
		var is_checked = $('#agree').is(':checked');
		checked('.agree_checkbox', '#agree', is_checked);
	});

	$('.dialog_close span').on('click', function() {
		$('ryan.popup_dialog').addClass('hidden');
	});

	$('.list-section ul li').on('click', function() {
		$('ryan.popup_dialog').removeClass('hidden');
	});

	function checked(selector1, selector2, flag) {
		if(flag) {
			$(selector1).find('span').removeClass('glyphicon glyphicon-ok');
			$(selector2).prop('checked', false);
		} else {
			$(selector1).find('span').addClass('glyphicon glyphicon-ok');
			$(selector2).prop('checked', true);
		}
	}
});



var app = angular.module('myApp', []);
var temp_content = '<div class="dialog_header col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                            '<div class="dialog_close">'+
                                '<span class="glyphicon glyphicon-remove"></span>'+
                            '</div>'+
                            '<div class="dialog_headline">'+
                                'Lorem ipsum dolor sit'+
                            '</div>'+
                        '</div>'+
                        '<div class="dialog_left col-xs-12 col-sm-12 col-md-7 col-lg-7">'+
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '+
                        '</div>'+
                        '<div class="dialog_right col-xs-12 col-sm-12 col-md-5 col-lg-5">'+
                            '<img src="img/video.png" class="img-responsive" alt="Responsive image">'+
                        '</div>';

app.directive('ryan', function() {
	return {
		restrict : 'E',
		template: temp_content
	}
});
