(function(global) {
	var contentBundle = {
		chCn: {
			room1: 'Quite Peaceful Studio',
			room2: 'dddsd',
			room3: 'zzzzz',
			rateHeader: 'Star Rating',
			'HOUSE.ENTIRE': 'Entire Guest House',
			'BED.QUEEN': 'Queen',
			'GUESTS': 'guests',
			'BEDROOM': 'bedroom',
			'BED': 'bed',
			'BATH': 'bath',
			'HIGHLIGHT-HEADER': 'HOME HIGHLIGHTS',
			'VIEW.PHOTO': 'View Photos'
		},
		enEn: {
			room1: 'Codish',
			room2: 'gss',
			room3: 'zzzz',
			rateHeader: 'Star Rating'
		}
	}

	var language = 'chCn';

	var c = function(key) {
		return contentBundle[language][key];
	}

	var dc = function(structureContent) {
		return structureContent[language];
	}

	window.c = c;
	window.el = encodeURIComponent;
	window.dl = decodeURIComponent;
	window.dc = dc;
})(window);