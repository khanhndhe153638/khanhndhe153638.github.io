document.getElementById("open-popup-btn").addEventListener("click",function(){
	document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
	document.getElementsByClassName("popup")[0].classList.remove("active");
});

const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)


function moveHover() {
	const i = Math.floor(Math.random()*500)+2;
	const j = Math.floor(Math.random()*500)+2;

	b.style.left=i+"px"
	b.style.top=j+"px"
}

// generate text in input
function textGenerate() {
	var n = "";
	var text = " " + CONFIG.reply;
	var a = Array.from(text);
	var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
	var count = textVal.length;
	if (count > 0) {
		for (let i = 1; i <= count; i++) {
			n = n + a[i];
			if (i == text.length + 1) {
				$('#txtReason').val("");
				n = "";
				break;
			}
		}
	}
	$('#txtReason').val(n);
	setTimeout("textGenerate()", 1);
}