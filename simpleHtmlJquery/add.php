<?Php 
	//header("Access-Control-Allow-Origin: *");   
?>
<!doctype html>  
<!--
	Autor: Kleber Gracia Soares
	Bacharel em Ciência da Computação
 --> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud PHP+Mysql Back end Bootstrap 5 - By Kleber Soares</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js"></script>
	<script src="scriptAdd.js"></script> 
	
	
</head>
<body>
        <div class="container my-12" style="max-width: 90%">
            <div class="row">
                 <div class="col-md-12" > 
					<?Php include("headerMenu.php"); ?> 

                    <div class="card">
                    <div class="card-header">
                        <h1> Adicionar Novo </h1>
                    </div>
                    <div class="card-body">
 
                    <form action="#" method="post"> 
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" id="name" name="name" class="form-control"  placeholder="Entre com o nome completo"> 
                        </div>
 
                        <div class="form-group">
                            <label>Endereco</label>
                            <input type="text" id="address"  name="address" class="form-control "  placeholder="Entre com o endereco">
                        </div>
 
                        <div class="form-group">
                            <label>Telefone</label>  
                            <input type="text" id="mobile" name="mobile" class="form-control "  placeholder="Entre com o telefone">
                        </div>
                        <br/>

                        <input type="submit" class="btn btn-primary" class="btn_joinnow" id="btn_joinnow" value="Registrar"> 
                        </form>
                  
                    </div>
                    </div>
 
                </div>
            
            </div>
        </div>
 
</body>
</html>