'use strict'
//функция перевода массива двоичных чисел в массив десятичных
function convert2in10 (arr){
	for (var i = 0; i <= 3; i++){
		arr[i] = parseInt(arr[i], 2);
	}
	return arr = arr.join('.');
} 
//перевод маски в двоичный вид из префикса 
function prefixTo2 (mask2, mask){
	var mask3 = mask2;
	for (var i = 0; i < mask; i++){	
		mask3 = '1' + mask3;
	}
	while (mask3.length < 32){
		mask3 = mask3 + '0';
	}
	mask3 = mask3.split(''); 
	for (i = 8; i <= 26; i+=9){
		mask3.splice(i, 0, '.');
	}
	mask3 = mask3.join('').split('.');
	return mask3;
}
//заполняем список возможных маск
var mask4 = '';
for (var ii = 1; ii <= 32; ii++){
	var prefix = 'prefix' + ii;
	var mask5 = convert2in10(prefixTo2(mask4, document.getElementById(prefix).value));
	document.getElementById(prefix).innerHTML = '/' + document.getElementById(prefix).value + ' (' + mask5 + ')';
}
function netcalc(){
	var range = document.getElementById('range').value
	var subnet, broadcast;
	var mask2 = '';
	//выбираем значение маски из списка значений
	var select = document.getElementById('32masks');
	var mask = select.options[select.selectedIndex].value;

	//перевод IP-адреса в двоичный вид
	range = range.split('.');
	for (var i = 0; i <= 3; i++){
		range[i] = parseInt(range[i], 10).toString(2);
		while (range[i].length < 8){
			range[i] = 0 + range[i];
		}
	}
	mask2 = prefixTo2(mask2, mask);
	//рассчёт сабнета и бродкаста
	subnet = range.slice().join('').split('');
	broadcast = range.slice().join('').split('');
	for (i = mask; i < 32; i++){
		subnet[i] = '0';
		broadcast[i] = '1';
	}
	for (i = 8; i <= 26; i+=9){
		subnet.splice(i, 0, '.');
		broadcast.splice(i, 0, '.');
	}
	subnet = subnet.join('').split('.');
	broadcast = broadcast.join('').split('.');
	//шаблонная маска	
	var wmask = mask2.join('').split('');
	for (i = 0; i < 32; i++){
		if (wmask[i] == 0) {wmask[i] = 1}
		else wmask[i] = 0;
	}
	for (i = 24; i >= 8; i-=8){
		wmask.splice(i, 0, '.')
	} 
	wmask = wmask.join('').split('.'); 
	//подсчёт максимального количества узлов в сети
	var maxHost = Math.pow(2, 32 - mask) - 2;


	document.getElementById('wmask2').innerHTML = wmask.join('.');
	convert2in10(wmask);
	document.getElementById('wmask').innerHTML = wmask.join('.');
	document.getElementById('subnet2').innerHTML = subnet.join('.');
	convert2in10(subnet);
	document.getElementById('subnet').innerHTML = subnet.join('.');
	document.getElementById('broadcast2').innerHTML = broadcast.join('.');
	convert2in10(broadcast);
	document.getElementById('broadcast').innerHTML = broadcast.join('.');
	document.getElementById('mask2').innerHTML = mask2.join('.');
	convert2in10(mask2);
	document.getElementById('mask').innerHTML = mask2.join('.');
	document.getElementById('maxHost').innerHTML = maxHost;
}