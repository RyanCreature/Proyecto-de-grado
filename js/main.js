
/* FLIPBOOK */
const flipbook = document.getElementById("book");
// Object.freeze(flipbook)
// let flipbook2 = Object.assign(flipbook);
// var clone = flipbook.cloneNode(true);
// Object.freeze (clone)
let previous = document.getElementById("previous");
let next = document.getElementById("next")
let Wpage = $('#Wpage').width();
var page = document.querySelectorAll(".own-size");
 /* CONTROL DE AUDIOS */
var audios = document.querySelectorAll(".audio")
audios.forEach((e)=>{
  var sonido = e.getAttribute("href")
  var sound = new Howl({
    src: sonido,
    html5: true,
     preload: false, 
    onplay: function(){e.firstChild.style.color="#77df70"},
    onend: function(){e.firstChild.style.color="black"},
  })
  e.addEventListener("click", (e)=>{event.preventDefault();sound.play();});
});

	if ($(window).width() > 1000) {
		 page.forEach((e)=>{
 	e.style.width = `calc(${Wpage}px / 2 - 16px)`;
 })
		$("#book").turn({
	display:"double",
	autoCenter: true,
	elevation: 50,
	duration: 1000,
	acceleration: true,
	when: {
		turning: function(e, page, view){
			var book = $(this),
				pages = book.turn('pages');
				if (page>=2)
					$('#book .p2').addClass('fixed');
				else
					$('#book .p2').removeClass('fixed');

				if (page<book.turn('pages'))
					$('#book .final').addClass('fixed');
				else
					$('#book .final').removeClass('fixed');
		}
	},
});
}



// var audios = document.querySelectorAll(".audio")
// audios.forEach((e)=>{
//   var sonido = e.getAttribute("href")
//   var sound = new Howl({
//     src: sonido,
//     preload: false, 
//     html5: true,
//     onplay: function(){e.firstChild.style.color="#77df70"},
//     onend: function(){e.firstChild.style.color="black"},
//   })
//   e.addEventListener("click", (e)=>{event.preventDefault();sound.play();});
// });
 /* CONTROL DEL FLIPBOOK */
    		$(window).bind('keydown', function(e){
		if (e.keyCode==37)
			$('#book').turn('previous');
		else if (e.keyCode==39)
			$('#book').turn('next');	 
	});
$(previous).bind('click', function(e){
    $("#book").turn('previous');
})
$(next).bind('click', function(ev){
	$("#book").turn('next');
	ev.stopPropagation();
})
// flipbook.addClass('animated'); 