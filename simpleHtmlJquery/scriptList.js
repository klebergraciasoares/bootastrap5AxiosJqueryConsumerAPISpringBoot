/*
$(document).ready(function() { 
    $.ajax({
        url: "http://192.168.56.1:8080/api/students" 
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
//Este usuariio e senha, são os que são gerados na hora de subir a aplicação Spring Boot, 
// Mas esta dando CORS, tem que ser ajustado isso na aplicação back-end
var username = "user";
var password = "3121259a-eaa0-43a8-95f1-fe52ab11adef";

$(document).ready(function(){
	$.ajax({
		url: "http://localhost:8080/api/students", 
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
						<td>"+value['name']+"</td>\
						<td>"+value['address']+"</td>\
						<td>"+value['mobile']+"</td>\
						<td><button class='btn btn-success'> <a href='edit.php?edit="+value['id']+"' class='text-light'> Editar</a> </button> &nbsp;</td>\
						<td><button class='btn btn-danger'><a href='delete.php?del="+value['id']+"' class='text-light'> Deletar </a> </button></td>\
						</tr>");   
		})			
		

	});
}); 