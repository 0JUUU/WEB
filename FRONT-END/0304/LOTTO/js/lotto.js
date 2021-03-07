window.onload = function() {
	document.getElementById("start").onclick = function() {
		console.log("button click");
		const COUNT = 6;
		var count = 0;
		
		var ball = document.getElementsByClassName('lotto');
		var list = [];
		console.log(ball);
		
		var generateLotto = setInterval(function() {
			if(count > 5) {
				clearInterval(generateLotto)
			} else {
				while(true) {
					var NUM = Math.floor(Math.random()*45) + 1;
					console.log(NUM);
					if(list.indexOf(NUM) < 0) {
						list.push(NUM);
						break;
					}
				}
				ball[count].style.display = '';
				ball[count++].innerHTML = NUM;
				console.log(NUM);
				
			}
		}, 1000)
		console.log(list);
	}
}