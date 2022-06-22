function soma(num1,num2){
	try {
    if(isNaN(num1) || isNaN(num2)) throw (`[sum]Impossible to sum ${num1} + ${num2}`);
	}
	catch(err) {
		return err;
	}
	sum = num1+num2;
	return sum;
}

function sub(num1,num2){
	
	try {
    if(isNaN(num1) || isNaN(num2)) throw (`[subtract]Impossible to sum ${num1} - ${num2}`);
	}
	catch(err) {
		return err;
	}
	subt = soma(num1,-num2);
	return subt;
	
}

function muly(num1,num2){
	
	try {
    if(isNaN(num1) || isNaN(num2)) throw (`[multiply]Impossible to sum ${num1} * ${num2}`);
	}
	catch(err) {
		return err;
	}
	mul=num1*num2;	
	return mul;
	
}

function back(){
al = document.querySelector('#all');
array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
'https://images7.alphacoders.com/423/423348.jpg'];
x = parseInt(Math.random()*3)
al.style.background = "url('"+array[x]+"')";
}



window.onload = function(){
back();
};