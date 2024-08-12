import { Anchor, Eye, LaptopMinimal, Star } from 'lucide-react'

export const navLinks = [
	{
		name: 'Home',
		id: 0,
	},
	{
		name: 'About',
		id: 1,
	},
	{
		name: 'Service',
		id: 2,
	},
	{
		name: 'Portfolio',
		id: 3,
	},
	{
		name: 'Blog',
		id: 4,
	},
]

export const statistic = [
	{
		number: '300+',
		label: 'Project Delivery',
		id: 0,
	},
	{
		number: '8',
		label: 'Years Experience',
		id: 1,
	},
	{
		number: '16',
		label: 'Awards',
		id: 2,
	},
	{
		number: '70+',
		label: 'Happy Clients',
		id: 3,
	},
]

export const services = [
	{
		icon: Anchor,
		title: 'UI/UX Design',
		decr: 'I’ve created a user interface and user experience with some proccess and method.',
		id: 0,
		active: false,
	},
	{
		icon: LaptopMinimal,
		title: 'Web Development',
		decr: 'I’ve created a user interface and user experience with some proccess and method.',
		id: 0,
		active: true,
	},
	{
		icon: Eye,
		title: 'Visual Branding',
		decr: 'I’ve created a user interface and user experience with some proccess and method.',
		id: 0,
		active: false,
	},
	{
		icon: Star,
		title: 'App Development',
		decr: 'I’ve created a user interface and user experience with some proccess and method.',
		id: 0,
		active: false,
	},
]

export const portfolio = [
	{
		img: '/public/portfolio.jpg',
		title: 'Website Design',
		decr: 'Our website designers have penetrated the mysteries of emotional response to color, image,  and eye-tracking. Every element is geared to create maximum appeal.',
		id: 0,
	},
	{
		img: '/public/portfolio1.png',
		title: 'Product Design',
		decr: 'Our website designers have penetrated the mysteries of emotional response to color, image,  and eye-tracking. Every element is geared to create maximum appeal.',
		id: 1,
	},

	{
		img: '/public/portfolio2.png',
		title: 'App Design',
		decr: 'Our website designers have penetrated the mysteries of emotional response to color, image,  and eye-tracking. Every element is geared to create maximum appeal.',
		id: 1,
	},

	{
		img: '/public/portfolio3.png',
		title: 'DashBoard Design',
		decr: 'Our website designers have penetrated the mysteries of emotional response to color, image,  and eye-tracking. Every element is geared to create maximum appeal.',
		id: 1,
	},
]
