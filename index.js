(function(global) {

var data = {
  	stars: [1,1,1,1,1],
  	navs: {

  	},
  	rooms: [
  		{
  			roomId: '#ny-ozone-park-room1',
  			roomName: 'room1',
  			part: 'HOUSE.ENTIRE',
  			rate: 5,
  			maxGuests: 2,
  			roomDetail: {
	  			beds: [{
	  				bedType: 'BED.QUEEN'
	  			}],
	  			desks: 1,
	  			chairs:2,
	  			couchNum: 1
  			},
  			houseRules: {
  				commonRules: [
	  				'No Smoking',
	  				'Not Suitable for pets',
	  				'No parties or events',
	  				'Check-in is anytime after 3PM',
	  				'Check out by 11 AM'
	  				],
	  			MoreRules: ''
  			},
  			cancellations: [
  			],
  			bathRoomNum: 1,
  			homeHighLights: {
  				chCn: '<p><span>Sparkling clean .</span> 18 recent guests have said that this home was sparkling clean</p>' +
  							'<p><span>Great location .</span> 100% of recent guests gave this home’s location a 5-star rating.</p>' + 
  							'<p><span>Great check-in experience ·</span> 100% of recent guests gave this home’s check-in process a 5-star rating.</p>'
  			},
  			amenities: {
  				basic: {
  					kitchen: {
  						allow: true,
  						desciption: 'Continuous access in the listing'
  					},
  					Dryer: {
  						allow: true,
  						desciption: 'In the building, free or for a fee'
  					},
  					laptopFriendlySpace: {
  						allow: true,
  						desciption: 'A table or desk with space for a laptop and a chair that’s comfortable to work in'
  					},
  					washer: {
  						allow: true,
  						desciption: 'A table or desk with space for a laptop and a chair that’s comfortable to work in'
  					},
  					iron: {
  						allow: true
  					},
  					tv: {
  						allow: true
  					},
  					airCondition: {
  						allow: true
  					},
  					essentials: {
  						allow: true
  					},
  					heating: {
  						allow: true
  					},
  					hotWater: {
  						allow: true
  					},
	  				wifi: {
	  					allow: true
	  				},
  				},
  				facilities: {
  					freeParkingPremises: {
  						allow: true
  					},
  					freeStreetParking: {
  						allow: true
  					}
  				},
  				dining: {
  					kitchen: {
  						allow: true,
  						description: 'Space where guests can cook their own meals'
  					},
  					coffeeMaker: {
  						allow: true
  					},
  					cookingBasics: {
  						allow: true,
  						description: 'Pots and pans, oil, salt and pepper'
  					},
  					dishsAndSilverware: {
  						allow: true
  					},
  					microwave: {
  						allow: true
  					},
  					refrigerator: {
  						allow: true
  					}
  				},
  				guestAccess: {
  					privateEntrace: {
  						allow: true,
  						description: 'Separate street or building entrance'
  					}
  				},
  				bedAndBath: {
  					hangers: {
  						allow: true
  					},
  					shampoo: {
  						allow: true
  					},
  					hairDryer: {
  						allow: true
  					},
  					bedLinens: {
  						allow: true
  					},
  					extraPillowsAndBlankets: {
  						allow: true
  					}
  				},
  				outDoor: {
  					bbqGrill: {
  						allow: true,
  						description: 'need get approve from owner'
  					},
  					gardenOrBackyard: {
  						allow: true
  					}
  				}
  			},
  			introText: 'This was an excellent experience. Chris was quick to respond and gave me all the information I needed. They were really welcoming. The studio is lovely, clean, comfortable and well equipped. My favorit',
  			images: {
  				details: [
  					'https://a0.muscache.com/im/pictures/8440139/bb2a057c_original.jpg?aki_policy=x_large',
  					'https://a0.muscache.com/im/pictures/8440134/2728ca68_original.jpg?aki_policy=x_large',
  					'https://a0.muscache.com/im/pictures/8440128/9a1388b5_original.jpg?aki_policy=x_large'
  				]
  			} 
  		},
  		{
  			roomId: '#ny-ozone-park-room2',
  			roomName: 'room1',
  			rate: 5,
  			maxGuests: 2,
  			bedRooms: [{
	  			bedNum: 1,
	  			bedType: 'BED.QUEEN',
	  			couchNum: 1
  			}],
  			houseRules: {
  				commonRules: [
	  				'No Smoking',
	  				'Not Suitable for pets',
	  				'No parties or events',
	  				'Check-in is anytime after 3PM',
	  				'Check out by 11 AM'
	  				],
	  			MoreRules: ''
  			},
  			bathRoomNum: 1,
  			homeHighLights: {
  				clean: '18 recent guests have said that this home was sparkling clean',
  				location: '100% of recent guests gave this home’s location a 5-star rating.',
  				checkInExperience: '100% of recent guests gave this home’s check-in process a 5-star rating.'
  			},
  			amenities: {
  				basic: {
  					kitchen: {
  						allow: true,
  						desciption: 'Continuous access in the listing'
  					},
  					Dryer: {
  						allow: true,
  						desciption: 'In the building, free or for a fee'
  					},
  					laptopFriendlySpace: {
  						allow: true,
  						desciption: 'A table or desk with space for a laptop and a chair that’s comfortable to work in'
  					},
  					washer: {
  						allow: true,
  						desciption: 'A table or desk with space for a laptop and a chair that’s comfortable to work in'
  					},
  					iron: {
  						allow: true
  					},
  					tv: {
  						allow: true
  					},
  					airCondition: {
  						allow: true
  					},
  					essentials: {
  						allow: true
  					},
  					heating: {
  						allow: true
  					},
  					hotWater: {
  						allow: true
  					},
	  				wifi: {
	  					allow: true
	  				},
  				},
  				facilities: {
  					freeParkingPremises: {
  						allow: true
  					},
  					freeStreetParking: {
  						allow: true
  					}
  				},
  				dining: {
  					kitchen: {
  						allow: true,
  						description: 'Space where guests can cook their own meals'
  					},
  					coffeeMaker: {
  						allow: true
  					},
  					cookingBasics: {
  						allow: true,
  						description: 'Pots and pans, oil, salt and pepper'
  					},
  					dishsAndSilverware: {
  						allow: true
  					},
  					microwave: {
  						allow: true
  					},
  					refrigerator: {
  						allow: true
  					}
  				},
  				guestAccess: {
  					privateEntrace: {
  						allow: true,
  						description: 'Separate street or building entrance'
  					}
  				},
  				bedAndBath: {
  					hangers: {
  						allow: true
  					},
  					shampoo: {
  						allow: true
  					},
  					hairDryer: {
  						allow: true
  					},
  					bedLinens: {
  						allow: true
  					},
  					extraPillowsAndBlankets: {
  						allow: true
  					}
  				},
  				outDoor: {
  					bbqGrill: {
  						allow: true,
  						description: 'need get approve from owner'
  					},
  					gardenOrBackyard: {
  						allow: true
  					}
  				}
  			},
  			introText: 'This was an excellent experience. Chris was quick to respond and gave me all the information I needed. They were really welcoming. The studio is lovely, clean, comfortable and well equipped. My favorit',
  			images: {
  				details: [
  					'https://a0.muscache.com/im/pictures/8440132/ee3c329e_original.jpg?aki_policy=x_large',
  					'https://a0.muscache.com/im/pictures/8440139/bb2a057c_original.jpg?aki_policy=x_large',
  					'https://a0.muscache.com/im/pictures/8440139/bb2a057c_original.jpg?aki_policy=x_large'
  				]
  			} 
  		}
  	]
 };

var service = {
	getRoomInfo: function(roomId) {
		return data.rooms.filter(function(room) {
			return room.roomId === roomId;
		})[0];
	}
}

var carouselView = Ractive.extend({
  isolated: true,
  template: '#carouselView',
  partials: {
	icon: document.getElementById('iconPartial').innerHTML,
	img: document.getElementById('imgPartial').innerHTML
  },
  onrender: function() {
  	var self = this,
  		urls = self.get('urls');
  	self.on({
  		next: function() {
  			var currentSelectIndex = self.get('currentSelectIndex') || 0;
  			self.set('currentSelectIndex', (currentSelectIndex + 1) === urls.length ? currentSelectIndex : currentSelectIndex + 1);
  		},
  		previous: function() {
  			var currentSelectIndex = self.get('currentSelectIndex') || 0;
  			self.set('currentSelectIndex', (currentSelectIndex - 1) < 0 ? currentSelectIndex : currentSelectIndex - 1);
  		},
  		close: function() {
  			setTimeout(function() {
  				self.set('show', false);
  			}, 0);
  		},
  		stopPropagation: function(event) {
  			event.original.stopPropagation();
  		}
  	});

  	$('body').addClass('non-scroll');
  },
  onteardown: function() {
  	$('body').removeClass('non-scroll');
  }
});


var mainController = {
	render: function() {
		var ractive = new Ractive({
			target: 'main',
			template: '#template',
			partials: {
				img: document.getElementById('imgPartial').innerHTML,
				article: document.getElementById('articlePartial').innerHTML,
				star: document.getElementById('starPartial').innerHTML,
				icon: document.getElementById('iconPartial').innerHTML
			},
			data: {
				c: c,
				dc: dc,
				stars: data.stars,
				rooms: data.rooms
			},
			init: function() {
				var self = this;
				self.on({
					'navigateToRoom': function(event) {
						var context = event.get();
						location.hash = '#/room;roomId=' + el(context.roomId);
					}
				});
			}
		});
	}
}


var roomController = {
	render: function() {
		var roomId = dl(_hashState.params.roomId),
			room = service.getRoomInfo(roomId);

		if(!room) {
			errorUtils.noRoomFound();
			return;
		}

		var model = {
			room: room,
			stars: data.stars,
			c: c,
			dc: dc,
			showMorepics: false
		};

		return new Ractive({
			target: 'main',
			template: '#room',
			magic: true,
			partials: {
				img: document.getElementById('imgPartial').innerHTML,
				article: document.getElementById('articlePartial').innerHTML,
				star: document.getElementById('starPartial').innerHTML,
				icon: document.getElementById('iconPartial').innerHTML
			},
			data: model,
			components: {
				carouselView: carouselView
			},
			onrender: function() {
				var self = this;
				self.on({
					viewMorePics: function() {
						self.set('showMorepics', true);
					}
				})
			}
		});
	}
}


var errorUtils = {
	noRoomFound: function() {
		location.hash = '#/main';
	},
	noPageFound: function() {
		location.hash = '#/main';
	}
}

var routeMapper = {
	'/room': roomController,
	'/main': mainController,
	'/': mainController
};

var getNavContext = function() {
	var matchs =  location.hash.match('#(\/[^;]+);?(.*)');
	var hash = matchs && matchs[1] || -1,
		_params = matchs && matchs[2] || '',
		params = {};

	_params.split(';').forEach(function(seg) {
		var expression = seg.split('=');
		expression[0] && ( params[expression[0]] = expression[1] || '');
	});

	return {
		matchHash: hash,
		params: params
	}
};

var _hashState = {};

$(window).bind('hashchange', function() {
	_hashState = getNavContext();
	var hash = _hashState.matchHash;
	var keys = Object.keys(routeMapper);
	for(var i = 0; i < keys.length; i++) {
		if(hash === keys[i]) {
			routeMapper[keys[i]].render();
			return;
		}
	}

	mainController.render();
	location.hash = '#/main';
	return;
}).trigger('hashchange');
})(window);