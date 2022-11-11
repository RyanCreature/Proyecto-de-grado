var cajas = document.querySelectorAll(".caja");
var items = document.querySelectorAll("h5");
var sort = document.querySelector('#items');
var itemlist = document.querySelectorAll(".items");
//Generar los items de manera aleatoria
itemlist.forEach((e)=>{
	 for (var i = e.children.length; i >= 0; i--) {
      e.appendChild(e.children[Math.random() * i | 0]);
  }
});
 
//Aplicar a la caja items el sortable
itemlist.forEach((e)=>{
Sortable.create(e,{
	group:{ 
		name: "shared",
	  },
	animation:300,
	chosenClass:"active",
	touchStartThreshold: 0,
});
});
/* Funcion para un solo item en la lista
 put:function(to) {
  return to.el.children.length == 0;
}
*/

//Boton de verificar si item id coincide con el dataid de la caja
var check = document.getElementById("check");
check.addEventListener('click', function(){ 
	items.forEach((e)=>{
			numero = e.id.split('-')[1];
			if (numero === e.parentNode.dataset.id) {
				e.classList.remove("incorrect");
				e.classList.add("correct");
			} else{
				e.classList.remove("correct");
				e.classList.add("incorrect");
			};
	});
	});
//Boton de siguiente y eliminar clases del check
var next = document.getElementById("next");
next.addEventListener('click', function(){ 
	items.forEach((e)=>{
			numero = e.id.split('-')[1];
			e.classList.remove("correct");
			e.classList.remove("incorrect");
	});
	});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  allowTouchMove: false,
    pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#next',
  },
});


/*const verbo = document.getElementById("a-1");
const regulares = document.getElementById("1")*/


/*verbos.addEventListener('dragstart', e => {
	e.dataTransfer.setData('id', e.target.id);
            console.log("start drag");
        });
regulares.addEventListener('dragover', e => {
            e.preventDefault();    
        });
regulares.addEventListener('drop', e => {
	const id = e.dataTransfer.getData('id');
	const numero = id.split('-')[1];
	if (e.target.dataset.id === numero) {
		document.getElementById(id).classList.add('correct');
	};
	console.log("ey");
});

irregulares.addEventListener('drop', e => {
	const id = e.dataTransfer.getData('id');
	const numero = id.split('-')[1];
	if (e.target.dataset.id === numero) {
		document.getElementById(id).classList.add('correct');
	};
	console.log("ey");
	
});*/

/*caja.forEach(e => e.addEventListener('dragstart', e => {
	delete e.target.dataset.id;
	e.dataTransfer.setData('id', e.target.id);

	 console.log("start drag");
}));

caja.forEach(e => e.addEventListener('dragover', e => {
	 e.preventDefault();

}));

caja.forEach(e => e.addEventListener('drop', e => {
	const id = e.dataTransfer.getData('id');
	const numero = id.split('-')[1];

	if ( e.target.dataset.id == numero ) {
		document.getElementById(id).classList.remove('incorrect');
		document.getElementById(id).classList.add('correct');
		
	} else {
		document.getElementById(id).classList.remove('correct');
   document.getElementById(id).classList.add('incorrect');
};
	console.log(e.target.dataset.id);
	console.log("ID DEL ELEMENTO:" + numero);
}));*/



