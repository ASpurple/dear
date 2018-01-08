(function(box){
	var cw = document.documentElement.clientWidth;
	var ch = document.documentElement.clientHeight;
	box.style.width = cw + "px";
	box.style.height = ch + "px";
	box.style.backgroundColor = "#000";
	box.style.position = "fixed";
	box.style.left = 0;
	box.style.top = 0;
	var acolor = ["#FF4500","#EE00EE","#912CEE","#7FFFD4","#00EE76","#EEEE00","#FFFF00","#FF0000"];
	function Star(){
		var s = document.createElement("span");
		var size = ran(2,6) + "px";
		s.style.display = "block";
		s.style.width = size;
		s.style.height = size;
		s.style.borderRadius = "50%";
		s.style.backgroundColor = acolor[ran(0,acolor.length)];
		s.style.position = "absolute";
		s.style.left = ran(0,cw) + "px";
		s.style.top = ran(0,ch) + "px";
		s.style.boxShadow = "0px 0px 8px #fff";
		s.style.opacity = "0";
		box.appendChild(s);
		var op = 0;
		var up = true;
		s.timer = setInterval(function(){
			up?op++:op--;
			if(op == 100)up = !up;
			if(op == 0){
				clearInterval(s.timer);
				box.removeChild(s);
				s = null;
				Star();
				return;
			}
			s.style.opacity = op/100;
		},20);
	}
	//Éú³ÉËæ»úÊý
	function ran(x,y){
		var r = Math.random()*(y-x)+x;
		return Math.floor(r);
	}
	for(var i=0;i<99;i++){
		setTimeout(Star,i*20);
	}
})(document.getElementById("bg"));
