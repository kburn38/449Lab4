// JavaScript source code
function SetAllAttributes()
{
	let sun = document.getElementById("sun");
	let mercury = document.getElementById("mercury");
	let venus = document.getElementById("venus");
	let earth = document.getElementById("earth");
	let mars = document.getElementById("mars");
	let jupiter = document.getElementById("jupiter");
	let saturn = document.getElementById("saturn");
	let uranus = document.getElementById("uranus");
	let neptune = document.getElementById("neptune");

	let sunName = document.getElementById("sun").childNodes.item(1).childNodes.item(3);
	let sunAU = document.getElementById("sun").childNodes.item(1).childNodes.item(5);
	let mercuryName = document.getElementById("mercury").childNodes.item(1).childNodes.item(3);
	let mercuryAU = document.getElementById("mercury").childNodes.item(1).childNodes.item(5);
	let venusName = document.getElementById("venus").childNodes.item(1).childNodes.item(3);
	let venusAU = document.getElementById("venus").childNodes.item(1).childNodes.item(5);
	let earthName = document.getElementById("earth").childNodes.item(1).childNodes.item(3);
	let earthAU = document.getElementById("earth").childNodes.item(1).childNodes.item(5);
	let marsName = document.getElementById("mars").childNodes.item(1).childNodes.item(3);
	let marsAU = document.getElementById("mars").childNodes.item(1).childNodes.item(5);
	let jupiterName = document.getElementById("jupiter").childNodes.item(1).childNodes.item(3);
	let jupiterAU = document.getElementById("jupiter").childNodes.item(1).childNodes.item(5);
	let saturnName = document.getElementById("saturn").childNodes.item(1).childNodes.item(3);
	let saturnAU = document.getElementById("saturn").childNodes.item(1).childNodes.item(5);
	let uranusName = document.getElementById("uranus").childNodes.item(1).childNodes.item(3);
	let uranusAU = document.getElementById("uranus").childNodes.item(1).childNodes.item(5);
	let neptuneName = document.getElementById("neptune").childNodes.item(1).childNodes.item(3);
	let neptuneAU = document.getElementById("neptune").childNodes.item(1).childNodes.item(5);

	sunName.innerHTML = sun.className;
	sunAU.innerHTML = sun.dataset.au;
	mercuryName.innerHTML = mercury.className;
	mercuryAU.innerHTML = mercury.dataset.au;
	venusName.innerHTML = venus.className;
	venusAU.innerHTML = venus.dataset.au;
	earthName.innerHTML = earth.className;
	earthAU.innerHTML = earth.dataset.au;
	marsName.innerHTML = mars.className;
	marsAU.innerHTML = mars.dataset.au;
	jupiterName.innerHTML = jupiter.className;
	jupiterAU.innerHTML = jupiter.dataset.au;
	saturnName.innerHTML = saturn.className;
	saturnAU.innerHTML = saturn.dataset.au;
	uranusName.innerHTML = uranus.className;
	uranusAU.innerHTML = uranus.dataset.au;
	neptuneName.innerHTML = neptune.className;
	neptuneAU.innerHTML = neptune.dataset.au;

	console.log(sunName);
	console.log(sunAU);
	console.log(mercuryName);
	console.log(mercuryAU);
	console.log(venusName);
	console.log(venusAU);
	console.log(earthName);
	console.log(earthAU);
	console.log(marsName);
	console.log(marsAU);
	console.log(jupiterName);
	console.log(jupiterAU);
	console.log(saturnName);
	console.log(saturnAU);
	console.log(uranusName);
	console.log(uranusAU);
	console.log(neptuneName);
	console.log(neptuneAU);
}