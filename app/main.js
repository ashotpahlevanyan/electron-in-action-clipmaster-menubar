const { globalShortcut, Menu } = require('electron');
const Menubar = require('menubar');

const secondaryMenu = Menu.buildFromTemplate([
	{
		label: 'Quit',
		click() { menubar.app.quit(); },
		accelerator: 'CommandOrControl+Q'
	},
]);

const menubar = Menubar({
	preloadWindow: true,
	index: `file://${__dirname}/index.html`
});

menubar.on('ready', () => {
	console.log('Application is ready');

	menubar.tray.on('right-click', () => {
		menubar.tray.popUpContextMenu(secondaryMenu);
	});

	const createClipping = globalShortcut.register('CommandOrControl+!', () => {
		menubar.window.webContents.send('create-new-clipping');
	});

	const writeClipping = globalShortcut.register('CommandOrControl+Alt+@', () => {
		menubar.window.webContents.send('write-to-clipboard');
	});

	const publishClipping = globalShortcut.register('CommandOrControl+Alt+#', () => {
		menubar.window.webContents.send('publish-clipping');
	});

	if(!createClipping) {
		console.error('Registration Failed', 'createClipping');
	}

	if(!writeClipping) {
		console.error('Registration Failed', 'writeClipping');
	}

	if(!publishClipping) {
		console.error('Registration Failed', 'publishClipping');
	}
});

menubar.on('after-create-window', () => {
	menubar.window.loadURL(`file://${__dirname}/index.html`);
});
