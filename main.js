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

// Q3
let mainLogo = document.getElementsByTagName("img")[0];
mainLogo.setAttribute('src', 'https://images.unsplash.com/photo-1725882176928-8cfdf8000c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D');
// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Q4
let mainlist = document.querySelector("#lists");

for (let i = 0; i < 3; i++){
    let li = document.createElement('li');

    li.style.display = 'inline-block';
    li.style.color = "blue";
    li.style.border = "2px solid #666";
    li.style.padding = "20px 10px"

    mainlist.appendChild(li);

    li.textContent = li.textContent + "W3 - D4 - LAB1 " + [i];
};
// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Q5
let maintable = document.createElement("table");
let tableBody = document.createElement("tbody");

for (let i = 0; i < 2; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
        const td = document.createElement("td");
        const tdText = document.createTextNode(`W3 - D4 - LAB1`)
        td.appendChild(tdText);
        row.appendChild(td);
    };

    maintable.appendChild(row);
};

maintable.appendChild(tableBody);
document.body.appendChild(maintable);
maintable.setAttribute("border", "3");
maintable.classList.add("tableCss");
