export const imageModules = import.meta.glob('/static/images/backgrounds/*.{png,jpg}', {
	eager: true,
	query: {
		enhanced: true
	}
});

export const heroContent = {
	'/about/board': {
		title: 'Our Board',
		image: imageModules['/static/images/backgrounds/board.jpg']?.default,
		alt: 'Wallowa Mountains at sunset',
		position: 'center 10%',
		credit: {
			photographer: 'Evan Sanchez',
			url: 'https://unsplash.com/photos/snow-covered-by-mountain-near-river-under-sunset-d3BjAHvN8G0'
		}
	},
	'/about/contact': {
		title: 'Contact Us',
		image: imageModules['/static/images/backgrounds/contact.jpg']?.default,
		alt: 'The Lostine River',
		credit: {
			photographer: 'Garik Asplund',
			url: 'https://www.flickr.com/photos/asplund/14601037445/in/album-72157645587889093'
		}
	},
	'/about/plan': {
		title: 'Our Plan',
		image: imageModules['/static/images/backgrounds/plan.jpg']?.default,
		alt: 'Chief Joseph Mountain as seen from the west moraine',
		position: 'center 65%',
		credit: {
			photographer: 'Garik Asplund',
			url: 'https://www.flickr.com/photos/asplund/14599083374/in/album-72157645587889093'
		}
	},
	'/about/reports': {
		title: 'Annual Reports',
		image: imageModules['/static/images/backgrounds/reports.jpg']?.default,
		alt: 'The Imnaha Canyon',
		position: 'center 45%',
		credit: {
			photographer: 'Garik Asplund',
			url: 'https://www.flickr.com/photos/asplund/34227598445/in/album-72157672737846003'
		}
	},
	'/about/staff': {
		title: 'Our Staff',
		image: imageModules['/static/images/backgrounds/staff.jpg']?.default,
		alt: 'Wallowa Lake from Mount Howard',
		position: 'center 30%',
		credit: {
			photographer: 'Colin PDX',
			url: 'https://www.flickr.com/photos/colin-pdx/21611211829/'
		}
	},
	'/conservation/easements': {
		title: 'Conservation Easements',
		image: imageModules['/static/images/backgrounds/easements.jpg']?.default,
		alt: 'Wallowa Lake and the west moraine at sunset',
		position: 'center 55%',
		credit: {
			photographer: 'Dan Meyers',
			url: 'https://unsplash.com/photos/a-view-of-a-mountain-range-with-a-lake-in-the-foreground-hus3TC-C3RQ'
		}
	},
	'/conservation/plan': {
		title: 'Conservation Plan',
		image: imageModules['/static/images/backgrounds/conservation-plan.jpg']?.default,
		alt: 'Summer storms in Wallowa Valley',
		credit: {
			photographer: 'Garik Asplund',
			url: 'https://photos.app.goo.gl/6eV5hXWoUv3DggMm9'
		}
	},
	// '/executive-director-letter': {
	// 	title: 'Letter from the Executive Director',
	// 	image: imageModules['/static/images/backgrounds/director.jpg']?.default,
	// 	alt: 'Executive Director message',
	// 	credit: {
	// 		photographer: 'Wallowa Land Trust Staff',
	// 		url: 'https://wallowa.org/photo-credits'
	// 	}
	// },
	'/give': {
		title: 'Support Our Work',
		image: imageModules['/static/images/backgrounds/give.jpg']?.default,
		alt: 'Wallowa Lake and the east moraine at sunset',
		credit: {
			photographer: 'Garik Asplund',
			url: 'https://www.flickr.com/photos/asplund/14600429632/in/album-72157645587889093/'
		}
	},
	'/news/events': {
		title: 'Events',
		image: imageModules['/static/images/backgrounds/events.png']?.default,
		alt: 'Cedar Waxwings',
		position: 'center 70%',
		credit: {
			photographer: 'Jo Jeffries',
			url: '/newsletters/WallowaLands_2022_Fall.pdf#view=fit'
		}
	},
	'/news/newsletters': {
		title: 'Newsletters',
		image: imageModules['/static/images/backgrounds/newsletters.jpg']?.default,
		alt: 'Wallowa Mountains at sunset from the north country',
		position: 'center 30%',
		credit: {
			photographer: 'Leon Werdinger',
			url: 'https://www.leonwerdinger.com/portfolio/G000006FzANaM3Sc/I0000UYa.MUrBTho'
		}
	},
	'/news/press': {
		title: 'Press',
		image: imageModules['/static/images/backgrounds/press.jpg']?.default,
		alt: 'Native wildflower blooming',
		position: 'center 35%',
		credit: {
			photographer: 'Joan Greenman',
			url: 'https://pixabay.com/photos/native-wildflower-wallowa-blossom-968131/'
		}
	}
};