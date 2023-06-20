const jogos = [
	"http://www.sinuousgame.com/",
	"https://end3r.com/games/frontinvaders/",
	"https://connection.ivank.net/",
	"https://agar.io/#ffa",
	"https://testdrive-archive.azurewebsites.net/Performance/Sudoku/Default.html"
	]

	

	var query = location.search.slice(1);
	var partes = query.split('&');
	var data = {};
	partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});
	var foi = 0;
	
	function mandar(){
	if(foi == 0){
	let jogo = jogos[data.jogo];
	document.getElementById('frameGame').setAttribute('src',jogo);
	foi = 1
	}
	
	}
	
	
	//console.log(data.jogo); 	