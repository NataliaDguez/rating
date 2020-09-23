var radios = document.querySelectorAll('input[name=rating]');

document.addEventListener("click", function(event) {
  var targ = event.target.parentElement;
  if (!(targ && targ.classList.contains('rating'))) {
    radios.forEach(e => {
      if (e.checked) {
        e.checked = false;
      }
    });
  }
});

//ESTE MAL

    //var box = document.querySelector('box');

// Detect all clicks on the document
//document.addEventListener('click', function(event) {
	// If user clicks inside the element, do nothing
	//if (event.target.closest('box')) return; 
	// If user clicks outside the element,
   // box.classList.add('.rating-reset');
//});


