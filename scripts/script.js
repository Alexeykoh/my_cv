// scroll to anchor
const anchors = document.querySelectorAll ('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener ('' +
		'click', function (event) {
		event.preventDefault ();
		const blockID = anchor.getAttribute ('href')
		document.querySelector ('' + blockID).scrollIntoView ({
			behavior: 'smooth',
			block:    'start'
		})
	})
}

// top button
const topButton = document.querySelector ('.top__span');
window.onscroll = function () {
	let top = window.scrollY;
	if (top >= 30) {
		topButton.classList.add ('active')
	} else {
		topButton.classList.remove ('active')
	}
}

function topScroll () {
	window.scrollTo ({
		top:      0,
		behavior: "smooth"
	});
}

document.querySelector ('.top__span').addEventListener ('click', topScroll)


//burger
const hamburger = document.querySelector ('.hamburger');
const navMenu   = document.querySelector ('.nav__menu');

hamburger.addEventListener ('click', burger)

function burger () {
	hamburger.classList.toggle ('active');
	navMenu.classList.toggle ('active');
}

// mail me
let mailMe = document.querySelector ('.button__email-me')
mailMe.addEventListener ('click', sendMail)

function sendMail () {
	window.open ('mailto:alexeykoh@icloud.com?subject=Hi, front-end developer!&body=I am glad to say that I liked your portfolio and I am ready to discuss the work with you.');
}

// toggle theme (new)
const currentTheme = localStorage.getItem ('theme');
const lightTheme   = document.getElementById ('theme__light')
const darkTheme    = document.getElementById ('theme__dark')

lightTheme.addEventListener ('click', darkTh)
darkTheme.addEventListener ('click', lightTh)

if (currentTheme === 'dark') {
	darkTheme.classList.remove ('hidden')
	lightTheme.classList.add ('hidden')
	//
	document.documentElement.setAttribute ('data-theme', 'dark');
	localStorage.setItem ('theme', 'dark');
} else {
	darkTheme.classList.add ('hidden')
	lightTheme.classList.remove ('hidden')
	//
	document.documentElement.setAttribute ('data-theme', 'light');
	localStorage.setItem ('theme', 'light');
}

function darkTh () {
	if (localStorage.getItem ('theme') === 'light') {
		darkTheme.classList.remove ('hidden')
		lightTheme.classList.add ('hidden')
		//
		document.documentElement.setAttribute ('data-theme', 'dark');
		localStorage.setItem ('theme', 'dark');
	}
}

function lightTh () {
	if (localStorage.getItem ('theme') === 'dark') {
		darkTheme.classList.add ('hidden')
		lightTheme.classList.remove ('hidden')
		//
		document.documentElement.setAttribute ('data-theme', 'light');
		localStorage.setItem ('theme', 'light');
	}
}




