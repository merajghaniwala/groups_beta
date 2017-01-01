$(document).ready(function()
{
	/*VARIABLES*/
	var url = "http://webmaxinfotech.com/groups/fetch/";
	
	/*INITIALIZE*/
	getcat();
	
	/*FUNCTIONS*/
	function getcat()
	{
		$.get(url+"db.php",
			{
				task:"getallcat"
			},
			function(data)
			{	
		  		$("#cats").html(data);
			}
		);
	}
	
	function loadgrps(cid)
	{
		$.get(url+"db.php",
			{
				task:"loadgrps",
				cid:cid
			},
			function(data)
			{
				
			}
		);
	}
	
	
	/*EVENTS*/
	$("body").on("click",".cat-block",function()
	{
		var cid = $(this).prop("id");
		window.location = 'https://chat.whatsapp.com/1KiabjcAvSu3TLoSrmYQ0D';
	});
	
	$("#mas").click(function()
	{
		
	});
	
	$(window).scroll(function()
	{   
		if($(window).scrollTop() + $(window).height() == $(document).height())
		{
			_fetchNext(active_cat,active_cat_start);
		}
	});
	
	

});	
	

	/*AJAX CALL LOADING ANIMATION*/

	function ajaxindicatorstop()
	{
		$('#resultLoading .bg').height('100%');
		$('#resultLoading').fadeOut(300);
		$('body').css('cursor', 'default');
	}

	$(document).ajaxStart(function ()
	{
 		//show ajax indicator
 		console.log("starrt");
		ajaxindicatorstart('loading data.. please wait..');
	}).ajaxStop(function ()
	{
		//hide ajax indicator
		ajaxindicatorstop();
	});

	jQuery.ajax(
	{
	   global: false,
	   // ajax stuff
	});

	function ajaxindicatorstart(text)
	{
		if(jQuery('body').find('#resultLoading').attr('id') != 'resultLoading')
		{
			jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src="triangle.gif"><div>'+text+'</div></div><div class="bg"></div></div>');
		}

		jQuery('#resultLoading').css(
		{
			'width':'100%',
			'height':'100%',
			'position':'fixed',
			'z-index':'10000000',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto'
		});

		jQuery('#resultLoading .bg').css(
		{
			'background':'#fff',
			'opacity':'0.7',
			'width':'100%',
			'height':'100%',
			'position':'absolute',
			'top':'0'
		});

		jQuery('#resultLoading>div:first').css(
		{
			'width': '250px',
			'height':'75px',
			'text-align': 'center',
			'position': 'fixed',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto',
			'font-size':'16px',
			'z-index':'10',
			'color':'#ffffff'

		});

		jQuery('#resultLoading .bg').height('100%');
		jQuery('#resultLoading').fadeIn(300);
		jQuery('body').css('cursor', 'wait');
	}
	/*AJAX CALL LOADING ANIMATION*/
	
