let formBtn = document.getElementById('formBtn');
formBtn.onclick = function() {

	let formComList = document.getElementById('formComList');
	let formComItem = document.getElementById('formComItem');
	let formNum = document.getElementById('formNum');
	let formText = document.getElementById('formText');
	let formInput = document.getElementById('formInput');

	let num = formComList.getElementsByTagName('li').length;
	num++;


	let formNewCom = document.createElement('li');
	formComList.append(formNewCom);
	formNewCom.classList.add('form__com-item');

	let formNewComNum = document.createElement('span');
	formNewCom.append(formNewComNum);
	formNewComNum.classList.add('form__com-item-num');
	formNewComNum.textContent = '#' + num;

	let formNewComText = document.createElement('p');
	formNewCom.append(formNewComText);
	formNewComText.classList.add('form__com-item-text'); 
	formNewComText.textContent = formInput.value;

	formInput.value = '';

}