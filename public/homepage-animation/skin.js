// Garden Gnome Software - Skin
// Object2VR 3.0/10616
// Filename: MegaVision.ggsk
// Generated Cz 21. sty 19:13:14 2016

function object2vrSkin(player, base) {
	var me = this
	var flag = false
	var nodeMarker = new Array()
	var activeNodeMarker = new Array()
	this.player = player
	this.player.skinObj = this
	this.divSkin = player.divSkin
	var basePath = ''
	// auto detect base path
	if (base == '?') {
		var scripts = document.getElementsByTagName('script')
		for (var i = 0; i < scripts.length; i++) {
			var src = scripts[i].src
			if (src.indexOf('skin.js') >= 0) {
				var p = src.lastIndexOf('/')
				if (p >= 0) {
					basePath = src.substr(0, p + 1)
				}
			}
		}
	} else if (base) {
		basePath = base
	}
	this.elementMouseDown = new Array()
	this.elementMouseOver = new Array()
	var cssPrefix = ''
	var domTransition = 'transition'
	var domTransform = 'transform'
	var prefixes = 'Webkit,Moz,O,ms,Ms'.split(',')
	var i
	for (i = 0; i < prefixes.length; i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix = '-' + prefixes[i].toLowerCase() + '-'
			domTransition = prefixes[i] + 'Transition'
			domTransform = prefixes[i] + 'Transform'
		}
	}

	this.player.setMargins(0, 0, 0, 0)

	this.updateSize = function (startElement) {
		var stack = new Array()
		stack.push(startElement)
		while (stack.length > 0) {
			e = stack.pop()
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition()
			}
			if (e.hasChildNodes()) {
				for (i = 0; i < e.childNodes.length; i++) {
					stack.push(e.childNodes[i])
				}
			}
		}
	}

	parameterToTransform = function (p) {
		var hs = 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')'
		return hs
	}

	this.findElements = function (id, regex) {
		var r = new Array()
		var stack = new Array()
		var pat = new RegExp(id, '')
		stack.push(me.divSkin)
		while (stack.length > 0) {
			e = stack.pop()
			if (regex) {
				if (pat.test(e.ggId)) r.push(e)
			} else {
				if (e.ggId == id) r.push(e)
			}
			if (e.hasChildNodes()) {
				for (i = 0; i < e.childNodes.length; i++) {
					stack.push(e.childNodes[i])
				}
			}
		}
		return r
	}

	this.preloadImages = function () {
		var preLoadImg = new Image()
		preLoadImg.src = basePath + 'images/rotate__o.png'
		preLoadImg.src = basePath + 'images/rotate__a.png'
		preLoadImg.src = basePath + 'images/zoomin__o.png'
		preLoadImg.src = basePath + 'images/zoomin__a.png'
		preLoadImg.src = basePath + 'images/zoomout__o.png'
		preLoadImg.src = basePath + 'images/zoomout__a.png'
		preLoadImg.src = basePath + 'images/fullscreen__o.png'
		preLoadImg.src = basePath + 'images/fullscreen__a.png'
	}

	this.addSkin = function () {
		this._actionsbg = document.createElement('div')
		this._actionsbg.ggId = 'actions-bg'
		this._actionsbg.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._actionsbg.ggVisible = true
		this._actionsbg.className = 'ggskin ggskin_rectangle'
		this._actionsbg.ggType = 'rectangle'
		this._actionsbg.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -100 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -48 + h + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -100px;'
		hs += 'top:  -48px;'
		hs += 'width: 200px;'
		hs += 'height: 30px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'opacity: 0.6;'
		hs += 'visibility: inherit;'

		hs += 'border: 0px solid #000000;'
		this._actionsbg.setAttribute('style', hs)
		this.divSkin.appendChild(this._actionsbg)
		this._rotate = document.createElement('div')
		this._rotate.ggId = 'Rotate'
		this._rotate.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._rotate.ggVisible = false
		this._rotate.className = 'ggskin ggskin_button'
		this._rotate.ggType = 'button'
		this._rotate.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -55 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -45 + h + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -55px;'
		hs += 'top:  -45px;'
		hs += 'width: 24px;'
		hs += 'height: 24px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'visibility: hidden;'
		hs += 'cursor: pointer;'
		this._rotate.setAttribute('style', hs)
		this._rotate__img = document.createElement('img')
		this._rotate__img.className = 'ggskin ggskin_button'
		this._rotate__img.setAttribute('src', basePath + 'images/rotate.png')
		this._rotate__img.setAttribute('style', 'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;')
		this._rotate__img.className = 'ggskin ggskin_button'
		this._rotate__img['ondragstart'] = function () {
			return false
		}
		me.player.checkLoaded.push(this._rotate__img)
		this._rotate.appendChild(this._rotate__img)
		this._rotate.onclick = function () {
			me.player.moveToDefaultView(0.25)
			me.player.toggleAutorotate()
		}
		this._rotate.onmouseover = function () {
			me._rotate__img.src = basePath + 'images/rotate__o.png'
			me._rotate.ggIsOver = true
		}
		this._rotate.onmouseout = function () {
			me._rotate__img.src = basePath + 'images/rotate.png'
			me._rotate.ggIsOver = false
		}
		this._rotate.onmousedown = function () {
			me._rotate__img.src = basePath + 'images/rotate__a.png'
		}
		this._rotate.onmouseup = function () {
			if (me._rotate.ggIsOver) {
				me._rotate__img.src = basePath + 'images/rotate__o.png'
			} else {
				me._rotate__img.src = basePath + 'images/rotate.png'
			}
		}
		this.divSkin.appendChild(this._rotate)
		this._zoomin = document.createElement('div')
		this._zoomin.ggId = 'Zoom-in'
		this._zoomin.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._zoomin.ggVisible = false
		this._zoomin.className = 'ggskin ggskin_button'
		this._zoomin.ggType = 'button'
		this._zoomin.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -24 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -45 + h + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -24px;'
		hs += 'top:  -45px;'
		hs += 'width: 24px;'
		hs += 'height: 24px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'visibility: hidden;'
		hs += 'cursor: pointer;'
		this._zoomin.setAttribute('style', hs)
		this._zoomin__img = document.createElement('img')
		this._zoomin__img.className = 'ggskin ggskin_button'
		this._zoomin__img.setAttribute('src', basePath + 'images/zoomin.png')
		this._zoomin__img.setAttribute('style', 'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;')
		this._zoomin__img.className = 'ggskin ggskin_button'
		this._zoomin__img['ondragstart'] = function () {
			return false
		}
		me.player.checkLoaded.push(this._zoomin__img)
		this._zoomin.appendChild(this._zoomin__img)
		this._zoomin.onclick = function () {
			me.player.stopAutorotate()
		}
		this._zoomin.onmouseover = function () {
			me._zoomin__img.src = basePath + 'images/zoomin__o.png'
			me._zoomin.ggIsOver = true
		}
		this._zoomin.onmouseout = function () {
			me._zoomin__img.src = basePath + 'images/zoomin.png'
			me._zoomin.ggIsOver = false
		}
		this._zoomin.onmousedown = function () {
			me.player.changeFovLog(-5, true)
			me._zoomin__img.src = basePath + 'images/zoomin__a.png'
		}
		this._zoomin.onmouseup = function () {
			if (me._zoomin.ggIsOver) {
				me._zoomin__img.src = basePath + 'images/zoomin__o.png'
			} else {
				me._zoomin__img.src = basePath + 'images/zoomin.png'
			}
		}
		this.divSkin.appendChild(this._zoomin)
		this._zoomout = document.createElement('div')
		this._zoomout.ggId = 'Zoom-out'
		this._zoomout.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._zoomout.ggVisible = false
		this._zoomout.className = 'ggskin ggskin_button'
		this._zoomout.ggType = 'button'
		this._zoomout.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = 2 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -45 + h + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: 2px;'
		hs += 'top:  -45px;'
		hs += 'width: 24px;'
		hs += 'height: 24px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'visibility: hidden;'
		hs += 'cursor: pointer;'
		this._zoomout.setAttribute('style', hs)
		this._zoomout__img = document.createElement('img')
		this._zoomout__img.className = 'ggskin ggskin_button'
		this._zoomout__img.setAttribute('src', basePath + 'images/zoomout.png')
		this._zoomout__img.setAttribute('style', 'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;')
		this._zoomout__img.className = 'ggskin ggskin_button'
		this._zoomout__img['ondragstart'] = function () {
			return false
		}
		me.player.checkLoaded.push(this._zoomout__img)
		this._zoomout.appendChild(this._zoomout__img)
		this._zoomout.onmouseover = function () {
			me._zoomout__img.src = basePath + 'images/zoomout__o.png'
			me._zoomout.ggIsOver = true
		}
		this._zoomout.onmouseout = function () {
			me._zoomout__img.src = basePath + 'images/zoomout.png'
			me._zoomout.ggIsOver = false
		}
		this._zoomout.onmousedown = function () {
			me.player.changeFovLog(5, true)
			me._zoomout__img.src = basePath + 'images/zoomout__a.png'
		}
		this._zoomout.onmouseup = function () {
			if (me._zoomout.ggIsOver) {
				me._zoomout__img.src = basePath + 'images/zoomout__o.png'
			} else {
				me._zoomout__img.src = basePath + 'images/zoomout.png'
			}
		}
		this.divSkin.appendChild(this._zoomout)
		this._fullscreen = document.createElement('div')
		this._fullscreen.ggId = 'Fullscreen'
		this._fullscreen.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._fullscreen.ggVisible = false
		this._fullscreen.className = 'ggskin ggskin_button'
		this._fullscreen.ggType = 'button'
		this._fullscreen.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = 35 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -45 + h + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: 35px;'
		hs += 'top:  -45px;'
		hs += 'width: 24px;'
		hs += 'height: 24px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'visibility: hidden;'
		hs += 'cursor: pointer;'
		this._fullscreen.setAttribute('style', hs)
		this._fullscreen__img = document.createElement('img')
		this._fullscreen__img.className = 'ggskin ggskin_button'
		this._fullscreen__img.setAttribute('src', basePath + 'images/fullscreen.png')
		this._fullscreen__img.setAttribute('style', 'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;')
		this._fullscreen__img.className = 'ggskin ggskin_button'
		this._fullscreen__img['ondragstart'] = function () {
			return false
		}
		me.player.checkLoaded.push(this._fullscreen__img)
		this._fullscreen.appendChild(this._fullscreen__img)
		this._fullscreen.onclick = function () {
			me.player.toggleFullscreen()
		}
		this._fullscreen.onmouseover = function () {
			me._fullscreen__img.src = basePath + 'images/fullscreen__o.png'
			me._fullscreen.ggIsOver = true
		}
		this._fullscreen.onmouseout = function () {
			me._fullscreen__img.src = basePath + 'images/fullscreen.png'
			me._fullscreen.ggIsOver = false
		}
		this._fullscreen.onmousedown = function () {
			me._fullscreen__img.src = basePath + 'images/fullscreen__a.png'
		}
		this._fullscreen.onmouseup = function () {
			if (me._fullscreen.ggIsOver) {
				me._fullscreen__img.src = basePath + 'images/fullscreen__o.png'
			} else {
				me._fullscreen__img.src = basePath + 'images/fullscreen.png'
			}
		}
		this.divSkin.appendChild(this._fullscreen)
		this._draghor = document.createElement('div')
		this._draghor.ggId = 'Drag-hor'
		this._draghor.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._draghor.ggVisible = true
		this._draghor.className = 'ggskin ggskin_image'
		this._draghor.ggType = 'image'
		this._draghor.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -45 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -60 + h + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -45px;'
		hs += 'top:  -60px;'
		hs += 'width: 90px;'
		hs += 'height: 26px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'opacity: 0.8;'
		hs += 'visibility: inherit;'
		this._draghor.setAttribute('style', hs)
		this._draghor__img = document.createElement('img')
		this._draghor__img.className = 'ggskin ggskin_image'
		this._draghor__img.setAttribute('src', basePath + 'images/draghor.png')
		this._draghor__img.setAttribute('style', 'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;')
		this._draghor__img.className = 'ggskin ggskin_image'
		this._draghor__img['ondragstart'] = function () {
			return false
		}
		me.player.checkLoaded.push(this._draghor__img)
		this._draghor.appendChild(this._draghor__img)
		this._draghor.onmouseover = function () {
			me.elementMouseOver['draghor'] = true
		}
		this._draghor.onmouseout = function () {
			me.elementMouseOver['draghor'] = false
		}
		this._draghor.ontouchend = function () {
			me.elementMouseOver['draghor'] = false
		}
		this.divSkin.appendChild(this._draghor)
		this._hider = document.createElement('div')
		this._hider.ggId = 'hider'
		this._hider.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._hider.ggVisible = true
		this._hider.className = 'ggskin ggskin_rectangle'
		this._hider.ggType = 'rectangle'
		this._hider.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -1000 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -1000 + h / 2 + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -1000px;'
		hs += 'top:  -1000px;'
		hs += 'width: 1999px;'
		hs += 'height: 1999px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'opacity: 0.001;'
		hs += 'visibility: inherit;'
		hs += 'background: #ffffff;'
		hs += 'border: 1px solid #000000;'
		this._hider.setAttribute('style', hs)
		this._hider.onmouseover = function () {
			me.elementMouseOver['hider'] = true
		}
		this._hider.onmouseout = function () {
			me.elementMouseOver['hider'] = false
		}
		this._hider.ontouchend = function () {
			me.elementMouseOver['hider'] = false
		}
		this.divSkin.appendChild(this._hider)
		this._loader = document.createElement('div')
		this._loader.ggId = 'Loader'
		this._loader.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._loader.ggVisible = true
		this._loader.className = 'ggskin ggskin_container'
		this._loader.ggType = 'container'
		this._loader.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -123 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -272 + h / 2 + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -123px;'
		hs += 'top:  -272px;'
		hs += 'width: 245px;'
		hs += 'height: 297px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'visibility: inherit;'
		this._loader.setAttribute('style', hs)
		this._bg = document.createElement('div')
		this._bg.ggId = 'bg'
		this._bg.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._bg.ggVisible = true
		this._bg.className = 'ggskin ggskin_rectangle'
		this._bg.ggType = 'rectangle'
		this._bg.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -999 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -876 + h / 2 + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -999px;'
		hs += 'top:  -876px;'
		hs += 'width: 1999px;'
		hs += 'height: 1999px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'visibility: inherit;'
		hs += 'background: #ffffff;'
		hs += 'border: 1px solid #000000;'
		this._bg.setAttribute('style', hs)
		this._loader.appendChild(this._bg)
		this._image_1 = document.createElement('div')
		this._image_1.ggId = 'Image 1'
		this._image_1.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.5, sy: 0.5 }
		this._image_1.ggVisible = true
		this._image_1.className = 'ggskin ggskin_image'
		this._image_1.ggType = 'image'
		this._image_1.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -24 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = 174 + h / 2 + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -24px;'
		hs += 'top:  174px;'
		hs += 'width: 50px;'
		hs += 'height: 50px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += cssPrefix + 'transform: ' + parameterToTransform(this._image_1.ggParameter) + ';'
		hs += 'visibility: inherit;'
		this._image_1.setAttribute('style', hs)
		this._image_1__img = document.createElement('img')
		this._image_1__img.className = 'ggskin ggskin_image'
		this._image_1__img.setAttribute('src', basePath + 'images/image_1.png')
		this._image_1__img.setAttribute('style', 'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;')
		this._image_1__img.className = 'ggskin ggskin_image'
		this._image_1__img['ondragstart'] = function () {
			return false
		}
		me.player.checkLoaded.push(this._image_1__img)
		this._image_1.appendChild(this._image_1__img)
		this._loader.appendChild(this._image_1)
		this._logo = document.createElement('div')
		this._logo.ggId = 'logo'
		this._logo.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
		this._logo.ggVisible = true
		this._logo.className = 'ggskin ggskin_image'
		this._logo.ggType = 'image'
		this._logo.ggUpdatePosition = function () {
			this.style[domTransition] = 'none'
			if (this.parentNode) {
				w = this.parentNode.offsetWidth
				this.style.left = -122 + w / 2 + 'px'
				h = this.parentNode.offsetHeight
				this.style.top = -96 + h / 2 + 'px'
			}
		}
		hs = 'position:absolute;'
		hs += 'left: -122px;'
		hs += 'top:  -96px;'
		hs += 'width: 245px;'
		hs += 'height: 244px;'
		hs += cssPrefix + 'transform-origin: 50% 50%;'
		hs += 'visibility: inherit;'
		this._logo.setAttribute('style', hs)
		this._logo__img = document.createElement('img')
		this._logo__img.className = 'ggskin ggskin_image'
		this._logo__img.setAttribute('src', basePath + 'images/logo.png')
		this._logo__img.setAttribute('style', 'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;')
		this._logo__img.className = 'ggskin ggskin_image'
		this._logo__img['ondragstart'] = function () {
			return false
		}
		me.player.checkLoaded.push(this._logo__img)
		this._logo.appendChild(this._logo__img)
		this._loader.appendChild(this._logo)
		this.divSkin.appendChild(this._loader)
		this.preloadImages()
		this.divSkin.ggUpdateSize = function (w, h) {
			me.updateSize(me.divSkin)
		}
		this.divSkin.ggViewerInit = function () {}
		this.divSkin.ggLoaded = function () {
			me._bg.style[domTransition] = 'none'
			me._bg.style.visibility = 'hidden'
			me._bg.ggVisible = false
			me.player.toggleAutorotate()
			me._image_1.style[domTransition] = 'none'
			me._image_1.style.visibility = 'hidden'
			me._image_1.ggVisible = false
			me._logo.style[domTransition] = 'none'
			me._logo.style.visibility = 'hidden'
			me._logo.ggVisible = false
		}
		this.divSkin.ggReLoaded = function () {}
		this.divSkin.ggLoadedLevels = function () {}
		this.divSkin.ggReLoadedLevels = function () {}
		this.divSkin.ggEnterFullscreen = function () {}
		this.divSkin.ggExitFullscreen = function () {}
		this.skinTimerEvent()
	}
	this.hotspotProxyClick = function (id) {}
	this.hotspotProxyOver = function (id) {}
	this.hotspotProxyOut = function (id) {}
	this.changeActiveNode = function (id) {
		var newMarker = new Array()
		var i, j
		var tags = me.player.userdata.tags
		for (i = 0; i < nodeMarker.length; i++) {
			var match = false
			if (nodeMarker[i].ggMarkerNodeId == id && id != '') match = true
			for (j = 0; j < tags.length; j++) {
				if (nodeMarker[i].ggMarkerNodeId == tags[j]) match = true
			}
			if (match) {
				newMarker.push(nodeMarker[i])
			}
		}
		for (i = 0; i < activeNodeMarker.length; i++) {
			if (newMarker.indexOf(activeNodeMarker[i]) < 0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility = 'inherit'
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility = 'hidden'
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate()
				}
			}
		}
		for (i = 0; i < newMarker.length; i++) {
			if (activeNodeMarker.indexOf(newMarker[i]) < 0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility = 'hidden'
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility = 'inherit'
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate()
				}
			}
		}
		activeNodeMarker = newMarker
	}
	this.skinTimerEvent = function () {
		setTimeout(function () {
			me.skinTimerEvent()
		}, 10)
		var hs = ''
		if (me._actionsbg.ggParameter) {
			hs += parameterToTransform(me._actionsbg.ggParameter) + ' '
		}
		hs += 'translate(' + (0.01 * me.player.mouse.x + 0.2) + 'px,0px) '
		me._actionsbg.style[domTransform] = hs
		var hs = ''
		if (me._rotate.ggParameter) {
			hs += parameterToTransform(me._rotate.ggParameter) + ' '
		}
		hs += 'translate(' + (0.01 * me.player.mouse.x + 0.2) + 'px,0px) '
		me._rotate.style[domTransform] = hs
		var hs = ''
		if (me._zoomin.ggParameter) {
			hs += parameterToTransform(me._zoomin.ggParameter) + ' '
		}
		hs += 'translate(' + (0.01 * me.player.mouse.x + 0.2) + 'px,0px) '
		me._zoomin.style[domTransform] = hs
		var hs = ''
		if (me._zoomout.ggParameter) {
			hs += parameterToTransform(me._zoomout.ggParameter) + ' '
		}
		hs += 'translate(' + (0.01 * me.player.mouse.x + 0.2) + 'px,0px) '
		me._zoomout.style[domTransform] = hs
		var hs = ''
		if (me._fullscreen.ggParameter) {
			hs += parameterToTransform(me._fullscreen.ggParameter) + ' '
		}
		hs += 'translate(' + (0.01 * me.player.mouse.x + 0.2) + 'px,0px) '
		me._fullscreen.style[domTransform] = hs
		if (me.elementMouseOver['draghor']) {
			me._rotate.style[domTransition] = 'none'
			me._rotate.style.visibility = 'inherit'
			me._rotate.ggVisible = true
			me.player.stopAutorotate()
		}
		var hs = ''
		if (me._draghor.ggParameter) {
			hs += parameterToTransform(me._draghor.ggParameter) + ' '
		}
		hs += 'translate(' + (0.01 * me.player.mouse.x + 0.2) + 'px,0px) '
		me._draghor.style[domTransform] = hs
		if (me.elementMouseOver['hider']) {
			me._hider.style[domTransition] = 'none'
			me._hider.style.visibility = 'hidden'
			me._hider.ggVisible = false
			me._draghor.style[domTransition] = 'none'
			me._draghor.style.visibility = 'hidden'
			me._draghor.ggVisible = false
			me.player.stopAutorotate()
			me.player.moveToDefaultView(0.2)
			me._rotate.style[domTransition] = 'none'
			me._rotate.style.visibility = 'inherit'
			me._rotate.ggVisible = true
			me._zoomin.style[domTransition] = 'none'
			me._zoomin.style.visibility = 'inherit'
			me._zoomin.ggVisible = true
			me._zoomout.style[domTransition] = 'none'
			me._zoomout.style.visibility = 'inherit'
			me._zoomout.ggVisible = true
			me._fullscreen.style[domTransition] = 'none'
			me._fullscreen.style.visibility = 'inherit'
			me._fullscreen.ggVisible = true
		}
		var hs = ''
		if (me._image_1.ggParameter) {
			hs += parameterToTransform(me._image_1.ggParameter) + ' '
		}
		hs += 'rotate(' + -1.0 * (300 * me.player.getPercentLoaded() + 100) + 'deg) '
		me._image_1.style[domTransform] = hs
	}
	this.addSkin()
}
