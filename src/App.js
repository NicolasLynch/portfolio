import './App.css';
// import { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import CanvasDots from './components/CanvasDots';
import CanvasConnected from './components/CanvasConnected';
import SkillsList from './components/SkillsList';
import Project from './components/Project';
import Subtitle from './components/Subtitle';


import { useForm, ValidationError } from '@formspree/react';		/////////////////////////////



function ContactForm() {
	const [state, handleSubmit] = useForm("moqredvl");
	if (state.succeeded) {
		return(
			<div className='message-sent'>
				<p className='constact-text'>Your message has been successfully sent. Thanks!</p>
				<svg className='menssage-sent-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 226 226" style={{fill: '#000000'}}>
					<defs>{/* <linearGradient x1="178.54353" y1="145.42041" x2="178.54353" y2="160.63303" gradientUnits="userSpaceOnUse" id="color-1_bOBxRlSTr76T_gr1"><stop offset="0" stopColor="#b5d7f6"></stop><stop offset="1" stopColor="#ffbdc1"></stop></linearGradient> */}<linearGradient x1="113" y1="33.13372" x2="113" y2="189.09491" gradientUnits="userSpaceOnUse" id="color-2_bOBxRlSTr76T_gr2"><stop offset="0" stopColor="#51a2e9"></stop><stop offset="1" stopColor="#ff4d58"></stop></linearGradient><linearGradient x1="167.94978" y1="33.13372" x2="167.94978" y2="189.09491" gradientUnits="userSpaceOnUse" id="color-3_bOBxRlSTr76T_gr3"><stop offset="0" stopColor="#51a2e9"></stop><stop offset="1" stopColor="#ff4d58"></stop></linearGradient>{/* <linearGradient x1="112.71397" y1="74.00441" x2="112.71397" y2="112.20194" gradientUnits="userSpaceOnUse" id="color-4_bOBxRlSTr76T_gr4"><stop offset="0" stopColor="#b5d7f6"></stop><stop offset="1" stopColor="#ffbdc1"></stop></linearGradient> */}</defs>
					<g transform="">
						<g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
							<path d="M0,226v-226h226v226z" fill="none"></path>
							<g>
								<path d="M186.40763,152.86781l-10.93981,-10.44191c-2.2035,-2.10462 -5.85481,-0.54028 -5.85481,2.50719v20.88381c0,3.04747 3.65131,4.61181 5.85481,2.50719l10.93981,-10.44191c1.42663,-1.36659 1.42663,-3.64778 0,-5.01438z" fill="url(#color-1_bOBxRlSTr76T_gr1)"></path>
								<path d="M183.625,120.75816v-46.02984c0,-8.10422 -6.59284,-14.69706 -14.69706,-14.69706h-6.49044v-13.47172c0,-8.11481 -6.59991,-14.71472 -14.71472,-14.71472h-111.82056c-8.11481,0 -14.71472,6.59991 -14.71472,14.71472v83.86719c0,8.11128 6.59991,14.71119 14.71472,14.71119h6.47278v13.19628c0,8.10422 6.59284,14.69706 14.69706,14.69706h74.37166c6.45513,12.52534 19.4925,21.12394 34.52503,21.12394c21.41703,0 38.84375,-17.42672 38.84375,-38.84375c0,-15.05725 -8.63038,-28.11228 -21.1875,-34.55328zM165.96875,116.46769c-4.84488,0 -9.47081,0.93225 -13.75069,2.56016l-9.25894,-7.83231l33.60338,-28.43363v35.21362c-3.37234,-0.9605 -6.91772,-1.50784 -10.59375,-1.50784zM176.4495,73.60538l-58.50575,49.50813c-2.86384,2.4295 -7.02013,2.4295 -9.88397,0l-58.50928,-49.50813c0.54734,-3.67603 3.69722,-6.51163 7.52156,-6.51163h111.85588c3.82434,0 6.97069,2.83559 7.52156,6.51163zM49.4375,82.76544l33.60337,28.43362l-33.60337,28.43009zM140.82272,60.03125l14.55228,-12.31347v12.31347zM147.72278,38.90731c1.88922,0 3.60187,0.71331 4.93669,1.85391l-22.52231,19.05816l0.18363,0.21188h-73.24872c-1.02053,0 -2.01634,0.10594 -2.97684,0.30369l-23.13322,-19.57372c1.33481,-1.14059 3.04747,-1.85744 4.93669,-1.85744h111.82409zM35.90222,138.07541c-4.21984,0 -7.65222,-3.43238 -7.65222,-7.64869v-82.70541l19.04403,16.11662c-2.9945,2.69081 -4.91903,6.554 -4.91903,10.89038v63.34356h-6.47278zM57.07206,165.96875c-4.20925,0 -7.63456,-3.42531 -7.63456,-7.63456v-9.63678l0.09181,0.10947l38.98147,-32.98187l14.98663,12.68072c2.75437,2.32709 6.13025,3.49241 9.50259,3.49241c3.37234,0 6.75175,-1.16531 9.50259,-3.49241l14.98663,-12.68072l7.84644,6.63875c-9.99344,6.29975 -16.93234,17.00297 -18.03409,29.38353h-42.55156v7.0625h42.55862c0.22247,2.4295 0.68859,4.78484 1.33834,7.0625h-71.57491zM165.96875,187.09269c-17.52206,0 -31.78125,-14.25566 -31.78125,-31.78125c0,-17.52559 14.25919,-31.78125 31.78125,-31.78125c17.52206,0 31.78125,14.25566 31.78125,31.78125c0,17.52559 -14.25919,31.78125 -31.78125,31.78125z" fill="url(#color-2_bOBxRlSTr76T_gr2)"></path>
								<path d="M188.84772,150.31472c-0.00353,-0.00353 -0.00353,-0.00353 0,0l-10.94334,-10.44544c-2.03047,-1.93512 -5.01084,-2.46128 -7.58159,-1.37012c-2.57781,1.10528 -4.24456,3.62659 -4.24456,6.43041v6.91419h-21.1875v7.0625h21.1875v6.91066c0,2.80381 1.66675,5.32866 4.24456,6.43041c0.88634,0.37784 1.82566,0.565 2.75438,0.565c1.76209,0 3.49947,-0.66741 4.82722,-1.93512l10.94334,-10.44544c1.37366,-1.31363 2.16466,-3.15694 2.16466,-5.06028c0,-1.90334 -0.791,-3.74312 -2.16466,-5.05675zM173.14072,165.81691l-0.113,-20.83437l10.89037,10.39247z" fill="url(#color-3_bOBxRlSTr76T_gr3)"></path>
								<path d="M155.15959,74.05031h-84.89125c-3.29819,0 -4.79544,4.11744 -2.27059,6.23619l40.46106,33.80113c2.62725,2.18231 6.44453,2.17172 9.05766,-0.02825l39.92784,-33.79053c2.50719,-2.12581 1.00287,-6.21853 -2.28472,-6.21853z" fill="url(#color-4_bOBxRlSTr76T_gr4)"></path>
							</g>
						</g>
					</g>
				</svg>
			</div>
		);
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			{/* <label htmlFor="email">Email Address</label> */}
			<p className='contact-text'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
			<input className='contact-input' placeholder="Email" required id="email" type="email" name="email"/>
			<ValidationError prefix="Email" field="email" errors={state.errors}/>
			<textarea className='contact-input contact-textarea' placeholder="Message" required id="message" name="message"/>
			<ValidationError prefix="Message" field="message" errors={state.errors}/>
			<div className='contact-button-container'>
				<button className='contact-button' type="submit" disabled={state.submitting}>Submit</button>
				<div className='contact-button-underline'></div>
			</div>
	 	</form>
	);
  }


function App() {



	// const [items, setItems] = useState({
	// 	home: "",
	// 	skills: "",
	// 	projects: "",
	// 	contact: ""
	// });

	
	// const boxes = document.querySelectorAll('.observer')			// Esto ya lo vimos en el apunte 17-seleccionar-elementos-del-dom.      // Para refrezcar:   document.querySelectorAll(.selectorCSS)   Nos permite acceder a todos los elementos que coincidan con el nombre del selecctor CSS. Devuelve un nodeList. Recordar que como todo elemento CSS, su nombre debe llevar un punto "." al principio, de lo contrario no funcionara		

	// const callback = (entries) => {									// Este es el "callback" que usaremos como primer parametro para el constructor "IntersectionObserver" que esta más abajo.  Este callback recibe como parametro los elementos que tiene que vigilar, en este caso van a ser cada una de las cajas, por convención recibe el nombre de "entries"
	// 	console.log(entries)										// Esto nos vas a devolver un array con mucha información. Ya que cada caja va a ser un objeto guardado como un valor del array. Lo importante aquí entre toda es informcaión es la key "isIntersecting", ya que ella nos dice si la caja es "visible o no" por medio de los valores true o false  
	// 	entries.forEach(entry => {									// Esto lo vimos en el apunto "14. Arrays - Métodos II". Básicamente ejecuta la función una vez por cada elemento del array, funciona como un "bucle for".  // Recordar que "boxes" es un array de cajas.   
	// 		if(entry.isIntersecting){								// Estamos preguntando si estamos iterceptando ese elemento. Osea, si lo estamos viendo
	// 			console.log(`${entry.target.id} Esta siendo visto`)
	// 			if (entry.target.id === "home") {
	// 				setItems({home: "red", skills: "", projects: "",contact: ""})
	// 			} else (
	// 				setItems({home: "", skills: "", projects: "",contact: ""})
	// 			)
				
	// 			if (entry.target.id === "skills") {
	// 				setItems({home: "", skills: "red", projects: "",contact: ""})
	// 			} else (
	// 				setItems({home: "", skills: "", projects: "",contact: ""})
	// 			)
	// 			if (entry.target.id === "projects") {
	// 				setItems({home: "", skills: "", projects: "red",contact: ""})
	// 			} else (
	// 				setItems({home: "", skills: "", projects: "",contact: ""})
	// 			)
	// 			if (entry.target.id === "contact") {
	// 				setItems({home: "", skills: "", projects: "",contact: "red"})
	// 			} else (
	// 				setItems({home: "", skills: "", projects: "",contact: ""})
	// 			)
				
	// 			console.log(items)
	// 		}
	// 	})
	// }

	// const options = {												// Este objeto lo usaremos como segundo parametro para para el constructor "IntersectionObserver" que esta más abajo. 
	// 	// root:									    			// Es el elemento padre que vamos a estar vigilando. Lo normal (y por defecto) es que estemos vigilando el "viewport" (pantalla de nuestro navegador). Pero también se puede eleguir otro elemento si así lo deseamos  
	// 	//rootMargin: "200px"										// Funciona igual que el "margin:" en CSS y le podemos pasar de 1 a 4 parametros (al igual que el margin de CSS). En este caso que tenemos como valor 200px, siginifica que estamos escuchando todo lo que esta en el "viewport" (pantalla del navegador) más 200px extras que no se ven. Por ende estamos interceptando a los elemento 200px antes 
	// 	// threshold: 0.25                                           // Esto recibe valores entre 0 y 1, donde 0 es el valor por defecto. Este caso tengo un "0.25", eso significa que interceptaremos la caja cuando la veamos un 25% de esta caja.  // Si pueramos como valor "1" significaria que no estamos interceptando la caja hasta que se vea la caja por completo
	// }

	// const observer = new IntersectionObserver(callback, options)	// Estamos creando nuestro "Intersection Observer". Este constructor que recibe dos parametros. El primero es la funcion que se va a ejecurar cuando entre en nuestro rango de visión. Osea, que es lo que queremos que haga. En este caso pusimos "callback" porque es un calbacka  la espera que se ejecute algo. Este callback hay que crearlo con antelación; El segundo paramentro es opcional y en este caso lleva el nombre de "options", es un objeto que lleva dentro 3 propiedades que son opcionales. Este parametro debe ser creado con anterioridad  
	// boxes.forEach(element => observer.observe(element))				// Para que el "console.log(entries) de arriba se ejecute, necesitamos de esta linea de codigo. Esto lo vimos en el apunto "14. Arrays - Métodos II". Básicamente ejecuta la función una vez por cada elemento del array, funciona como un "bucle for".  // Recordar que "boxes" es un array de cajas.   // .observe() es un metodo que sirve para observar   // Con esto le decimos al navegador que "observe" a todas las cajas 
																	





	const section = document.querySelectorAll('section');
	const nav = document.querySelector('nav');
	const navList = document.querySelectorAll('.nav-list li')

	const options = {
		thereshold: '0.2'												// Significa que interceptaremos la caja cuando la veamos un 60% de esta 
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(e => {
			if (e.isIntersecting) {
				// // changing navbar style on scroll to next section
				// if (e.target.id !== "skills") {
				// 	nav.classList.add('active')
				// }
				// else {
				// 	nav.classList.remove('active')
				// }
				// section indicator
				navList.forEach(link => {
					// To remove active class from other
					link.classList.remove('active');

					if (e.target.id === link.dataset.nav) {
						link.classList.add('active');
					}
				})
			}

		});
	}, options);



	section.forEach(section => {
		observer.observe(section);
	})




	return (
		<div className="App">

			<CanvasConnected/>
			<header id='home' className='header'>
				<h1 className='title'>
					<p className='title--text animation-right'>Hello, I'm <span className='text-red'>Nico</span>.</p>
					<p className='title--text animation-left'>I'm a Front-end web developer.</p>
				</h1>
				<a href="#skills" className='view-button animation-top'>
					View my work
					<span className="material-icons-outlined icon-arrow">arrow_downward</span>
				</a>
			</header>
			{/* <nav className="menu">
				<ul className='items-list'>
					<li><a href="#home" className='item'>Home</a></li>
					<li><a href="#skills" className='item'>Skills</a></li>
					<li><a href="#projects" className='item'>Projects</a></li>
					<li><a href="#contact" className='item'>Contact</a></li>
				</ul>
			</nav> */}

			<nav className='menu'>
				<ul className='nav-list'>
					<li data-nav='home'><a href="#home">Home</a></li>
					<li data-nav='skills'><a href="#skills">Skills</a></li>
					<li data-nav='projects'><a href="#projects">Projects</a></li>
					<li data-nav='contact'><a href="#contact">Contact</a></li>
				</ul>
			</nav>

			<main>
				<section id='skills' className='skills'>
					<Subtitle subtitle='Skills'/>
					<SkillsList/>
				</section>
				<section id='projects' className='projects'>
					<Subtitle subtitle='Projects'/>
					<p className='description'>Most of these projects are challenges that consist of recreating fully functional web pages, taking some images as a reference.</p>
					<Project projectName='Todo App' 
							projectDescription=''
							srcMovil='./assets/images/todo-movil.jpg' 
							srcDesktop='./assets/images/todo-desktop.jpg' 
							repoLink='https://github.com/Cosmfulanito/todo-app' 
							liveLink='https://cosmfulanito.github.io/todo-app/'
							referenceLink='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW'
					/>
					<Project projectName='Weather App' 
							projectDescription=''
							srcMovil='./assets/images/weather-movil.jpg' 
							srcDesktop='./assets/images/weather-desktop.jpg' 
							repoLink='https://github.com/Cosmfulanito/clima' 
							liveLink='https://cosmfulanito.github.io/clima/'
							referenceLink='https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv'
					/>
					<Project projectName='Pomodoro App' 
							projectDescription=''
							srcMovil='./assets/images/pomodoro-movil.jpg' 
							srcDesktop='./assets/images/pomodoro-desktop.jpg' 
							repoLink='https://github.com/Cosmfulanito/pomodoro' 
							liveLink='https://cosmfulanito.github.io/pomodoro/'
							referenceLink='https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G'
					/>
					{/* <Project projectName='Calculator app' 
							projectDescription=''
							srcMovil='./assets/images/calculator-movil.jpg' 
							srcDesktop='./assets/images/calculator-desktop.jpg' 
							repoLink='https://github.com/Cosmfulanito/calculadora' 
							liveLink='https://cosmfulanito.github.io/calculadora/'
							referenceLink='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29'
					/> */}
					<Project projectName='Slideshow gallery' 
							projectDescription=''
							srcMovil='./assets/images/gallery-movil.jpg' 
							srcDesktop='./assets/images/gallery-desktop.jpg' 
							repoLink='https://github.com/Cosmfulanito/gallery' 
							liveLink='https://cosmfulanito.github.io/gallery/'
							referenceLink='https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6'
					/>
				</section>
				<section id='contact' className='contact'>
					<Subtitle subtitle='Contact'/>
					{/* <p>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p> */}
					<div className='contact-container'>
						<ContactForm/>
					</div>
					<div className='contact-links'>
						<a  href='https://github.com/Cosmfulanito' target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github contact-icon"></i>
						</a>
						<a  href='https://www.linkedin.com/in/cosme-fulanito-036670208/' target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin contact-icon"></i>					
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
