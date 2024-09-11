// Q1
let title = document.getElementsByClassName("titleH1")[0];

title.style.color = "blue";

title.style.backgroundColor = "#ddd";

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Q2
let mainPragraph = document.getElementById("pragraph");

mainPragraph.style.fontWeight = "bold";
mainPragraph.classList.add("mainPrag");

// ------------------------------------------------------------------------------------------------------------------------------------------- //

Q3
let mainLogo = document.getElementsByTagName("logo")[0];

mainLogo.src = ("https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D");
// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Q4
let mainlist = document.querySelector("#lists");

mainlist.textContent = `
    <li class='li'>Text One</li> 
    <li class='li'>Text Two</li> 
    <li class='li'>Text Three</li> 
`;

let mainlistLi = document.getElementsByClassName("#lists")

mainlistLi.style.color = "blue";
// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Q5


