let contentForms = document.querySelector('.forms');
let formWidth = contentForms.children[0].clientWidth;
let btns = document.querySelectorAll('form a');
let container = document.querySelector('.container');
let forms = document.querySelectorAll('.forms form');
let alerta = document.querySelector('.alerta');

// Actualizar tamaño
window.addEventListener('resize', () => {
	formWidth = contentForms.children[0].clientWidth;
});

// Funcion para cambiar de formulario
btns.forEach((btn)=>{
	let btnId = btn.getAttribute('data-id');

	btn.addEventListener('click', ()=>{
		if (btnId == 0) {
			contentForms.style.transform = 'translate(-' + formWidth + 'px)';
		}else{
			contentForms.style.transform = 'translate(0px)';
		}

		if (alerta.classList == 'error') {
			alerta.classList.remove('error');
		}else if (alerta.classList == 'exito') {
			alerta.classList.remove('exito');
		}
	});
})

// Validar registro
let usuario = [];

forms[0].addEventListener('submit', ()=>{

	let nombre = document.querySelector('#nombre').value;
	let apellidos = document.querySelector('#apellidos').value;
	let email = document.querySelector('#email1').value;
	let password = document.querySelector('#password1').value;

	if (nombre == "" || apellidos == "" || email == "" || password == "") {
		alerta.classList.remove('exito');
		alerta.classList.add('error');
		alerta.innerHTML = 'Hay campos vacios';

		// Esconder alerta
		setTimeout(()=>{
			alerta.classList.remove('error');
		}, 3500);
	}else{
		alerta.classList.remove('error');
		alerta.classList.add('exito');
		alerta.innerHTML = 'Registro exitoso';

		usuario = [email, password];

		// Esconder alerta
		setTimeout(()=>{
			alerta.classList.remove('exito');
		}, 3500);
	}
});	

// Validar login
forms[1].addEventListener('submit', ()=>{
	let email = document.querySelector('#email2').value;
	let password = document.querySelector('#password2').value;

	if (email == "" || password == "") {
		alerta.classList.remove('exito');
		alerta.classList.add('error');
		alerta.innerHTML = 'Hay campos vacios';

		// Esconder alerta
		setTimeout(()=>{
			alerta.classList.remove('error');
		}, 3500);
	}else if(email == usuario[0] && password == usuario[1]){
		alerta.classList.remove('error');
		alerta.classList.add('exito');
		alerta.innerHTML = 'Login exitoso';

		// Esconder alerta
		setTimeout(()=>{
			alerta.classList.remove('exito');
		}, 3500);
	}else{
		alerta.classList.remove('exito');
		alerta.classList.add('error');
		alerta.innerHTML = 'Los datos no son correctos';

		// Esconder alerta
		setTimeout(()=>{
			alerta.classList.remove('error');
		}, 3500);
	}
});