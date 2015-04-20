$(document).ready(function(){
	$("send.alert").on("click", function(){
		console.log("Hey you clicked me!!!!");
	});
	$( "<button class='iwao'>Alert!</button>" ).appendTo( document.body );
})

$(document).ready(function(){
 $( "alert" ).on( "click", function() {
        console.log( "Hey you clicked me, again!" );
    });
    $( "<button class='iwao'>Alert!</button>" ).appendTo( document.body );
});
})