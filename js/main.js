var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	 slides[slideIndex-1].style.display = "block";
}

var button_id = document.getElementsByTagName("button");
var info = document.getElementById('info');
var submit = document.getElementById('submit');

for (var i = 0; i < button_id.length; i++) {
  button_id[i].addEventListener("click", displayfunc);
}

function displayfunc() {
    var id = this.id;
    var note = document.getElementById("Note").value;
    if (id == 'c' || note == 'c' || note == 'C') {
    	info.innerHTML = '<div>C_D_E^F_G_A_B^C</div><audio src="audio/C.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'cc' || note == 'c#' || note == 'C#' || note == 'с диез' || note == 'С диез') {
    	info.innerHTML = '<div>Db_Eb_F^Gb_Ab_Bb_C^Db</div><audio src="audio/C1.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'd' || note == 'd' || note == 'D') {
    	info.innerHTML = '<div>D_E_F#^G_A_B_C#^D</div><audio src="audio/D.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'dd' || note == 'd#' || note == 'D#' || note == 'Д диез' || note == 'д диез') {
    	info.innerHTML = '<div>Eb_F_G^Ab_Bb_C_D^Eb</div><audio src="audio/D1.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'e' || note == 'e' || note == 'E') {
    	info.innerHTML = '<div>E_F#_G#^A_B_C#_D#^E</div><audio src="audio/E.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'f' || note == 'f' || note == 'F') {
    	info.innerHTML = '<div>F_G_A^B_C_D_E^F</div><audio src="audio/F.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'ff' || note == 'f#' || note == 'F#' || note == 'ф диез' || note == 'Ф диез') { 
    	info.innerHTML = '<div>F#_G#_A#^B_C#_D#_F^F#</div><audio src="audio/F1.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'g' || note == 'g' || note == 'G') {
    	info.innerHTML = '<div>G_A_B^C_D_E_F#^G</div><audio src="audio/G.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'gg' || note == 'g#' || note == 'G#' || note == 'г диез' || note == 'Г диез') {
    	info.innerHTML = '<div>Ab_Bb_C^Db_Eb_F_G^Ab</div><audio src="audio/G1.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'a' || note == 'A' || note == 'a') {
    	info.innerHTML = '<div>A_B_C#^D_E_F#_G#^A</div><audio src="audio/A.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'aa' || note == 'a#' || note == 'A#' || note == 'а диез' || note == 'А диез') {
    	info.innerHTML = '<div>Bb_C_D^Eb_F_G_A^Bb</div><audio src="audio/A1.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (id == 'b' || note == 'B' || note == 'b') {
    	info.innerHTML = '<div>B_C#_D#^B_F#_G#_A#_B</div><audio src="audio/B.wav"></audio><a onclick="this.previousSibling.play()">Прослушать</a>';
    }
    else if (note == '') {
    	info.innerHTML = '<div class="invalid">Введите значение</div>';
    }
    else {
    	info.innerHTML = '<div class="invalid">Введено недопустимое значение! <br>Используйте латинский алфавит</div>';
    }
}
