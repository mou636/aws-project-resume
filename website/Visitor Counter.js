const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://2fzncy74jxnlpzr37lnb73or2m0octam.lambda-url.eu-west-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = "Visitor count: " + data;
}
updateCounter();