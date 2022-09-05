<?php include("cabecalho.php");
include("conecta.php");
include("banco-categoria.php");

$categorias = listaCategorias($conexao);
?>

	
		<form action="adiciona-produto.php" method="post">
			<table class="table">
				<tr>
					<td>Nome:</td>
					<td><input class="form-control" type="text" name="nome"></td>
				</tr>
				<tr>
					<td>Preço:</td>
					<td><input class="form-control" type="number" name="preco"></td>
				</tr>
				<tr>
					<td>Descrição:</td>
					<td><textarea name="descricao" class="form-control"></textarea></td>
				</tr>
				<tr>
					<td></td>
					<td>
						<input type="checkbox" name="usado" value="true">Usado
					</td>
				</tr>
				<tr>
					<td>Categoria</td>
					<td>
						<select name="categoria_id">
						<?php foreach($categorias as $categoria): ?>
						<option value="<?=$categoria['id']?>"><?=$categoria['nome']?></option>
						<?php endforeach ?>
						</select>
					</td>
				</tr>
				<tr>
					<td><input class="btn btn-primary" type="submit" value="Cadastrar"></td>
				</tr>
			</table>
		</form>
<?php include("rodape.php");?>