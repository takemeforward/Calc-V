var numString;
var add = /[+]/;
var sub = /[-]/;
var mul = /[*]/;
var div = /[/]/;
let numberOfDigit = 0;
// keyboard eventListner
document.querySelector(".result-text").disabled = true;
document.addEventListener('keydown',function(event){
	writeString(event.key)
});

// Mouse click event listner
for(let i = 0; i<document.querySelectorAll(".sm-btn").length; i++)
document.querySelectorAll(".sm-btn")[i].addEventListener("click",function(){writeString(this.innerText);});

document.querySelector(".reset").addEventListener("click",function(){writeString(this.innerText)});
document.querySelector(".eq").addEventListener("click",function(){writeString(this.innerText)});

// string writer function starts
function writeString(key) {
	if(key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9' || key === '0' || key === '+' || key === '-' || key === '/' || key === '*' || key === '.'){
		if(numberOfDigit<12){
			var n = document.querySelector(".result").value;
			document.querySelector(".result").value = n+key;
			numberOfDigit++;
		}	
	}
	else if(key=== 'RESET') {
		reset();
	}
	else if(key == 'Backspace' || key === 'DEL' || key == 'Delete') {
		del();
	}
	else if(key === '=' || key == 'Enter') {
		var string = document.querySelector(".result").value;
		if(string.search(add)!=-1)
		{
			var num1 = string.slice(0,string.search(add));
			var num2 = string.slice(string.search(add)+1,string.length);
			num2 = parseFloat(num2);
			num1 = parseFloat(num1);
			document.querySelector(".result").value = num2 + num1;
		}
		else if(string.search(sub)!=-1) {
			var num1 = string.slice(0,string.search(sub));
			var num2 = string.slice(string.search(sub)+1,string.length);
			num2 = parseFloat(num2);
			num1 = parseFloat(num1);
			document.querySelector(".result").value = num1 - num2;
		}
		else if(string.search(mul)!=-1) {
			var num1 = string.slice(0,string.search(mul));
			var num2 = string.slice(string.search(mul)+1,string.length);
			num2 = parseFloat(num2);
			num1 = parseFloat(num1);
			document.querySelector(".result").value = num2 * num1;
		}
		else if(string.search(div)!=-1) {
			var num1 = string.slice(0,string.search(div));
			var num2 = string.slice(string.search(div)+1,string.length);
			num2 = parseFloat(num2);
			num1 = parseFloat(num1);
			document.querySelector(".result").value = num1 / num2;
		}
	}

}
function del() {
	//This legendry code is written by me hip hip hurreh
	numberOfDigit--;
	var text = document.querySelector(".result").value;
			text = text.replace(text.at(text.length-1),'');
			document.querySelector(".result").value = text;
}
function reset() {
	location.reload();
}