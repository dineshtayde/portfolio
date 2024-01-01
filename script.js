const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})


// download cv

// function downloadFile(URL, fileName){
// 	let link = document.createElement("a");

// 	link.setAttribute("download", fileName);
// 	link.href = URL;

// 	document.body.appendChild(link);
// 	link.click();
// 	link.remove();
// }

// ################################## dark theme ############################

var icon = document.getElementById("icon");


icon.onclick = function(){
	document.body.classList.toggle("change-theme");
}