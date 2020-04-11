var overview = document.querySelector('#overview');

console.log(overview);


var viewPics = document.querySelectorAll('.viewpic');

viewPics.forEach(function(pic){
	
	console.log(pic.dataset.img);
	
	
	pic.addEventListener('mouseover', () => {
		overview.setAttribute('src', pic.dataset.img);
		
		pic.addEventListener('mouseout', () => {
			overview.setAttribute('src', '');
		});
	});
});

viewpic