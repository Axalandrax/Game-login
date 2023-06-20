
	function desaparecer(){
		document.getElementById('formi').style.display = 'none';
		document.getElementById('enviado').style.display = 'initial';
		}
		
		//-----------------------------------------------
	function footer(qual){
	switch(qual){
	case 1:
		document.getElementById('footer').style.display = 'initial';
		document.getElementById('footer1').style.display = 'none';
		break
	case 2:
		document.getElementById('footer').style.display = 'none';
		document.getElementById('footer1').style.display = 'initial';
		break
	}
	}
	
	
	/*----------ANUNCIO----------------------*/
	function fecharAnuncio(){
		document.getElementById('anuncio').style.backgroundImage = 'url("fechaIfod.gif")';
		document.getElementById('xiszinho').setAttribute('onclick','fechaAnuncio()')
		}
	function fechaAnuncio(){
		document.getElementById('anuncio').style.display = 'none';
		document.getElementById('frameGame').style.width = '85vw';
		}
		
	
	