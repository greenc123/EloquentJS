const scale = 10;

class PictureCanvas {
	constructor(picture, pointerDown) {
		this.dom = elt("canvas", {
			onmousedown: (event) => this.mouse(event, pointerDown),
			ontouchstart: (event) => this.touch(event, pointerDown),
		});
		this.syncState(picture);
	}
	syncState(picture) {
		if (this.picture == picture) return;
		this.picture = picture;
		drawPicture(this.picture, this.dom, scale);
	}
}

PictureCanvas.prototype.mouse = function (downEvent, onDown) {
	if (downEvent.button != 0) return;
	let pos = pointerPosition(downEvent, this.dom);
	let onMove = onDown(pos);
	if (!onMove) return;
	let move = (moveEvent) => {
		if (moveEvent.buttons == 0) {
			this.dom.removeEventListener("mousemove", move);
		} else {
			let newPos = pointerPosition(moveEvent, this.dom);
			if (newPos.x == pos.x && newPos.y == pos.y) return;
			pos = newPos;
			onMove(newPos);
		}
	};
	this.dom.addEventListener("mousemove", move);
};

function pointerPosition(pos, domNode) {
	let rect = domNode.getBoundingClientRect();
	return {
		x: Math.floor((pos.clientX - rect.left) / scale),
		y: Math.floor((pos.clientY - rect.top) / scale),
	};
}
