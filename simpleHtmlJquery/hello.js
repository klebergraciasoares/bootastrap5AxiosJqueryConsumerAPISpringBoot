$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/api/tutorials/3" 
    }).then(function(data) {
		console.log("Data.... " +data.description); 
		$('.greeting-id').append(data.id);
		$('.greeting-description').append(data.description);
    });
});