
window.onload = function () {
	zp.app.banner();
};
var zp = {};
	zp.ui = {};
	zp.app ={};
	// Tab Banner
	zp.app.banner = function () {
		var oBr = document.getElementById('banner');
		var aLi = oBr.getElementsByTagName('li');
		var BtnPrev = document.getElementById('prev');
		var BtnNext = document.getElementById('next');
		var aTab = document.getElementById('tab');
		var aBtnA = aTab.getElementsByTagName('a');

		var Now = 0;

		// Auto Tab 
	  BrAuto = function () {
			BtnNext.onclick();
		};
		oBr.onmouseover = function () {
			clearInterval( BrAuto.timer );
		};
		BtnPrev.onmouseover = function () {
			clearInterval( BrAuto.timer );
		};
		BtnNext.onmouseover = function () {
			clearInterval( BrAuto.timer );
		};

		oBr.onmouseout = function () {
			clearInterval( BrAuto.timer );
			BrAuto.timer = setInterval(BrAuto,2000);
		};
		BtnPrev.onmouseout = function () {
			clearInterval( BrAuto.timer );
			BrAuto.timer = setInterval(BrAuto,2000);
		};
		BtnNext.onmouseout = function () {
			clearInterval( BrAuto.timer );
			BrAuto.timer = setInterval(BrAuto,2000);
		};

		BrAuto.timer = setInterval(BrAuto,2000);
		aCtive(Now);

		function BrTab(Now) {
			for (var i = 0; i < aLi.length; i++) {
					aLi[i].style.opacity ='0';
					aLi[i].style.transform = 'scale(.3, .3)';
			}
			aLi[Now].style.opacity = '1';
			for (var i = 0; i < aLi.length; i++) {
					aLi[i].style.left = "100%";
			}
			aLi[Now].style.left = '0';
			aLi[Now].style.transform = 'scale(1, 1)';
			if ( Now !== 0 ) {
				aLi[Now-1].style.left = '-100%';
				aLi[Now-1].style.transform = 'scale(.3, .3)';
			}else{
				aLi[aLi.length-1].style.left = '-100%';
				aLi[aLi.length-1].style.transform = 'scale(.3, .3)';
			}
		}

		// A hover Tab
		
		function aCtive(Now) {
			for (var i = 0; i < aBtnA.length; i++) {
				aBtnA[i].className = "";
				aBtnA[i].setAttribute("index",i);
			}
			aBtnA[Now].className = "hover";
		}
		aClick();
		function aClick() {
			for (var i = 0; i < aBtnA.length; i++) {
				aBtnA[i].onclick = function () {
					this.className = "hover";
					aCtive(this.getAttribute("index"));
					BrTab(this.getAttribute("index"));
				};
			}
		}

		// Left + Rigth Tab
		BtnPrev.onclick = function () {
			Now === 0 ? Now = aLi.length-1 : Now--;
			BrTab(Now);
			aCtive(Now);
		};
		BtnNext.onclick = function () {
			Now++;
			Now = Now%=aLi.length;
			BrTab(Now);
			aCtive(Now);
		};


	};

	/* Re Top */
	var sdelay=0;
	function returnTop() {
	 window.scrollBy(0,-100);//Only for y vertical-axis
	 if(document.body.scrollTop>0) { 
	  sdelay= setTimeout('returnTop()',50);
	 }
	}

/* Banner End */

