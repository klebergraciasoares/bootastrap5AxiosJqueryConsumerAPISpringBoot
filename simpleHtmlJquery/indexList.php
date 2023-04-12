<?Php 
	//header("Access-Control-Allow-Origin: *");   
?>
<!doctype html>  
<!--
	Autor: Kleber Gracia Soares
	Bacharel em Ciência da Computação
 --> 
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Consumindo API Spring Boot - Html e Jquery Simples - Criado por Kleber Gracia Soares</title>
	
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

	<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" crossorigin="anonymous" ></script>--> 
	<script src="https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js"></script>
	<script src="scriptList.js"></script> 
  </head>
  <body>
    <div class="container my-12" style="max-width: 90%">
 
		<div class="col-lg-12">
			<?Php include("headerMenu.php"); ?> 
		      
			
		  <table class="table table-bordered table-striped"> 
			<thead>
			<tr>
				<th>#ID</th>
				<th>Nome</th>
				<th>Endereço</th>
				<th>Telefone</th>
				<th>Opções</th> 
			</tr>
			</thead>
			<tbody id="exampleid">
			</tbody>
		</table>
		</div>



	  
    </div>
  </body>
</html>