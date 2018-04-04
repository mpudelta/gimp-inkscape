var videoHoverTimeout = 0;

window.addEventListener('load', function () {
	var vid = document.getElementsByTagName('video');
	for (n in vid) {
		if (vid[n].getAttribute && vid[n].getAttribute('controls') == null) {
			vid[n].addEventListener('mouseover', function () {
				clearTimeout(videoHoverTimeout);
				if (this.paused) {
					var v = this;
					videoHoverTimeout = setTimeout(function () {
						v.play();
					}, 500);
				}
			});
			vid[n].addEventListener('mouseout', function () {
				clearTimeout(videoHoverTimeout);
			});
			vid[n].addEventListener('click', function () {
				if (this.paused == false) this.pause();
				else this.play();
			});
		}
	}/*
	vid.each(function () {
		$(this).on('click', function () {
			console.log('what');
			if (this.paused == false) {
				this.pause();
				this.firstChild.nodeValue = 'Play';
			} else {
				this.play();
				this.firstChild.nodeValue = 'Pause';
			}
		});
	});*/
});
