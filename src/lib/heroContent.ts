export const imageModules = import.meta.glob('/static/images/backgrounds/*.{png,jpg}', {
    eager: true,
    query: {
        enhanced: true
    }
});

export const heroContent = {
'/about': {
    title: 'About Us',
    image: imageModules['/static/images/backgrounds/about.jpg']?.default,
    alt: 'Wallowa Land Trust team and community'
},
'/about/board': {
    title: 'Our Board',
    image: imageModules['/static/images/backgrounds/board.jpg']?.default,
    alt: 'Wallowa Land Trust board members',
    position: 'center 10%',
},
'/about/contact': {
    title: 'Contact Us',
    image: imageModules['/static/images/backgrounds/contact.jpg']?.default,
    alt: 'Wallowa Land Trust Office'
},
'/about/plan': {
    title: 'Our Plan',
    image: imageModules['/static/images/backgrounds/plan.jpg']?.default,
    alt: 'Wallowa landscape planning area',
    position: 'center 65%',
},
'/about/reports': {
    title: 'Annual Reports',
    image: imageModules['/static/images/backgrounds/reports.jpg']?.default,
    alt: 'Wallowa Land Trust conservation work',
    position: 'center 45%',

},
'/about/staff': {
    title: 'Our Staff',
    image: imageModules['/static/images/backgrounds/staff.jpg']?.default,
    alt: 'Wallowa Land Trust staff members',
    position: 'center 30%',
},
'/about/strategic-plan': {
    title: 'Strategic Plan',
    image: imageModules['/static/images/backgrounds/strategic-plan.jpg']?.default,
    alt: 'Wallowa conservation strategic planning'
},
'/conservation/easements': {
    title: 'Conservation Easements',
    image: imageModules['/static/images/backgrounds/easements.jpg']?.default,
    alt: 'Protected Wallowa landscape',
    position: 'center 55%',
},
'/conservation/plan': {
    title: 'Conservation Plan',
    image: imageModules['/static/images/backgrounds/conservation-plan.jpg']?.default,
    alt: 'Wallowa conservation planning map'
},
// '/conservation/properties': {
//     title: 'Protected Properties',
//     image: imageModules['/static/images/backgrounds/properties.jpg']?.default,
//     alt: 'Conserved Wallowa properties'
// },
'/executive-director-letter': {
    title: 'Letter from the Executive Director',
    image: imageModules['/static/images/backgrounds/director.jpg']?.default,
    alt: 'Executive Director message'
},
'/give': {
    title: 'Support Our Work',
    image: imageModules['/static/images/backgrounds/give.jpg']?.default,
    alt: 'Support Wallowa conservation'
},
// '/news': {
//     title: 'News & Updates',
//     image: imageModules['/static/images/backgrounds/news.jpg']?.default,
//     alt: 'Wallowa Land Trust news'
// },
'/news/events': {
    title: 'Events',
    image: imageModules['/static/images/backgrounds/events.png']?.default,
    alt: 'Wallowa Land Trust events',
    position: 'center 70%',
},
'/news/newsletters': {
    title: 'Newsletters',
    image: imageModules['/static/images/backgrounds/newsletters.jpg']?.default,
    alt: 'Wallowa Land Trust newsletters',
    position: 'center 30%',
},
'/news/press': {
    title: 'Press',
    image: imageModules['/static/images/backgrounds/press.jpg']?.default,
    alt: 'Wallowa Land Trust in the news',
    position: 'center 35%',
    },
// '/store': {
//     title: 'Store',
//     image: imageModules['/static/images/backgrounds/store.jpg']?.default,
//     alt: 'Wallowa Land Trust store',
//     position: 'center 85%',
// }
};