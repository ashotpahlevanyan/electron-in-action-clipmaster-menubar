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