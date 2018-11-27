const { clipboard } = require('electron');

const clippingsList = document.getElementById('clippings-list');
const copyFromClipboardButton = document.getElementById('copy-from-clipboard');

const createClippingElement = (clippingText) => {
	const clippingElement = document.createElement('article');

	clippingElement.classList.add('clippings-list-item');

	clippingElement.innerHTML = `
		<div class="clipping-text" disabled="true"></div>
	  <div class="clipping-controls">
	    <button class="copy-clipping">&rarr; Clipboard</button>
	    <button class="publish-clipping">Publish</button>
	    <button class="remove-clipping">Remove</button>
		</div>
	`;

	clippingElement.querySelector('.clipping-text').innerText = clippingText;
	return clippingElement;
};

const addClippingToList = () => {
	const clippingText = clipboard.readText();
	const clippingElement = createClippingElement(clippingText);
	clippingsList.prepend(clippingElement);
};

copyFromClipboardButton.addEventListener('click', addClippingToList);


clippingsList.addEventListener('click', (event) => {
	const hasClass = className =>
		event.target.classList.contains(className);

	if(hasClass('remove-clipping')) console.log('Remove Clipping');
	if(hasClass('copy-clipping')) console.log('Copy Clipping');
	if(hasClass('publish-clipping')) console.log('Publish Clipping');
});

const removeClipping = (target) => {
	target.parentNode.parentNode.remove();
};