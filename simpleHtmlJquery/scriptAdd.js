/*
$(document).ready(function() { 
    $.ajax({
        url: "http://localhost:8080/api/tutorials" 
    }).then(function(data) {
		console.log("Data.... " +data.description); 
		$('.greeting-id').append(data.id);
		$('.greeting-description').append(data.description);
		
			$.each(data, function (key, value) {
				$('#exampleid').append("<tr>\
							<td>"+value['id']+"</td>\
							<td>"+value['description']+"</td>\
							<td>"+value['published']+"</td>\
							</tr>");   
			})		
		
		
    }); 
});
*/


var username = "user";
var password = "3121259a-eaa0-43a8-95f1-fe52ab11adef"; 

/*
$(document).ready(function(){
	$.ajax({
		url: "http://localhost:8080/api/tutorials", 
		type : "GET",
		crossDomain:true,
		crossOrigin:true,

		beforeSend: function (xhr) {
			// Use BASIC Authentication
			xhr.setRequestHeader ("Authorization", "Basic " + btoa(username+':'+password)); 
		},
		error: function(xhr, status, errorThrown) {
			alert(status, errorThrown);
			// Error block
			console.log("xhr: " + xhr);
			console.log("status: " + status);
			console.log("errorThrown: " + errorThrown);
		}
	})
	.then(function(data, status, xhr) {
		//alert(data);
		console.log("xhr: " + xhr);
		console.log("status: " + status);
		console.log("data: "+ data);

		$('.message').append(data);
		
		$.each(data, function (key, value) {
			$('#exampleid').append("<tr>\
						<td>"+value['id']+"</td>\
						<td>"+value['description']+"</td>\
						<td>"+value['published']+"</td>\
						</tr>");   
		})			
		

	});
}); 
*/ 



 
$(function() {
    $('#btn_joinnow').click(function() { 
		var name = $('#name').val();
		var address = $('#address').val();
		var mobile = $('#mobile').val(); 
	
		//alert("Nome: " +name+ " - Endereço: "+address+ " - Telefone: " +mobile);      
		//alert("work darn its!!!!!!!!!!!!!!!!!!!!!!!!!"); 
		//$("#list").block({ message: '<img src="../../Images/ajax-loader.gif" />' }) 
		$.ajax({
		   url: "http://localhost:8080/api/students", 
		   type: "POST",
		   dataType: "json",
		   contentType: "application/json; charset=utf-8",
		   data: JSON.stringify({ name: name, address: address, mobile: mobile }),  
		   success: function (result) {
			   // when call is sucessfull
			   //alert(result);  
			   location.replace("indexList.php");  
			},
			error: function (err) {
			// check the err for error details
			}
		 }); // ajax call closing		



		
		
    });
}); 