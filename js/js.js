// Verifique se o luxy.js está sendo corretamente inicializado. Normalmente, ele precisa ser configurado com um seletor para o wrapper que contém os elementos animados. No seu caso, você está usando o id="luxy".
document.addEventListener('DOMContentLoaded', function () {
    if (luxy && typeof luxy.init === 'function') {
        luxy.init({
            wrapper: '#luxy', // ID do wrapper principal
            targets: '.header__navegation a, .work__item, .benefits__item', // Adicione os seletors dos elementos animados
            wrapperSpeed: 0.08, // Ajuste conforme necessário
        });
    } else {
        console.error('luxy.js não foi carregado corretamente ou falta a função init.');
    }
});
// -----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

	'use strict';



	Splitting();
	luxy.init();
	gsap.registerPlugin(ScrollTrigger);

	const gTl = gsap.timeline();
	gTl.from(".title .char", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
	gTl.to(".header__img", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease: "expo.out" }, "-=1");
	gTl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

	const gsapSq = gsap.utils.toArray('.section-title__square');
	gsapSq.forEach((gSq, i) => {
		const rotat = gsap.from(gSq, 3, { rotation: 720 });
		ScrollTrigger.create({
			trigger: gSq,
			animation: rotat,
			start: 'top bottom',
			scrub: 1.9
		});
	});


	//header
	function header() {
		gsap.to('.title_paralax', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			yPercent: -150
		})
		gsap.to('.header .stroke', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: 50
		})
		gsap.to('.header__img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -70
		})
		gsap.to('.header__img img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			scale: 1.3
		})
		gsap.to('.header__marq-wrapp', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -50
		})
		gsap.to('.header__marq-star img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			rotate: -720
		})
	}
	header();


	//about
	function about() {
		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 80
		})
		gsap.from('.about__img img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			scale: 1.6
		})
		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '.about__wrapp',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 50
		})
	}
	about();


	//benefits
	function benefits() {
		gsap.from('.benefits__num', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.benefits__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	benefits();


	//portfolio
	function portfolio() {
		gsap.from('.work__item, .work__item-num', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.work',
				start: 'top bottom',
				scrub: 1.9
			}
		})
		gsap.from('.work__item-img img', {
			scale: 1.6,
			scrollTrigger: {
				trigger: '.work__wrapp',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	portfolio();


	//serv
	function serv() {
		gsap.from('.serv__item-arrow', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.serv__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	serv();

	//sticky serv
// ================ menu icon navbar ================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');

// Menu icon click event que estava atrapalhando a linkar no blog.html
// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// };

// Scroll sections active link
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  // Scroll sections active link
  sections.forEach(seca => {
    let top = window.scrollY;
    let offset = seca.offsetTop - 150;
    let height = seca.offsetHeight;
    let id = seca.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
};



	// Menu icon click event
menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
  };
// ================ swiper ================
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	grabCursor: true,
	pagination: {                    
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });
  

	//footer
	function footer() {
		gsap.from('.footer__div span', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			opacity: 0,
			scrollTrigger: {
				trigger: '.footer',
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: 1.9
			}
		})
	}
	footer();
});



// <!-- SCRIPT PARA CONTAGEM DE NUMEROS E TESTIMONIAL -->

	
        // Função para animar os números
        function animateCounters() {
            const counters = document.querySelectorAll(".counter");
            const speed = 200; // Velocidade da animação

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;

                    // Incremento por frame
                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 20); // Ajuste do tempo
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });
        }

        // Observador para ativar a contagem quando a seção for visível
        const section = document.getElementById('counters');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect(); // Para de observar após ativar a animação
                }
            });
        }, { threshold: 0.5 }); // 50% da seção visível

        observer.observe(section);
    

// <!-- /SCRIPT PARA CONTAGEM DE NUMEROS E TESTIMONIAL -->




// SCRIPT PARA ÁREA DE ATUAÇÃO

const menuItems = document.querySelectorAll('.menu-item');
const paragraphs = document.querySelectorAll('.content p');
const title = document.getElementById('#title_about_actuation');

menuItems.forEach(item => {
	item.addEventListener('click', () => {
		const target = item.getAttribute('data-target');
		paragraphs.forEach(p => {
			p.classList.remove('active');
			if (p.id === target) {
				p.classList.add('active');
				
				title_about_actuation.textContent = item.textContent.replace(/\s?[▶]/g, '').trim() + ' ▼';

			}
		});
	});
});
//  /SCRIPT PARA ÁREA DE ATUAÇÃO 


// ================ dark light mode ================
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

