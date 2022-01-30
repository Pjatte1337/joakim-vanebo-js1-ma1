//Question 1:
let cat = {
    complain: function () {
        console.log("Meow!");
    },
};


//Question 2:
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question 3:
heading.style.fontSize = "2em";


//Question 4:
heading.className = "subheading";


//Question 5:
const paragraphs = document.querySelectorAll("p");

console.dir(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    console.dir(paragraphs[i].innerHTML);
    paragraphs[i].style.color = "red";
}


//Question 6:
const resultContainer = document.querySelector(".results");


resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow" 


//Question 7:
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function listElement(list){
    for (var i = 0; i < cats.length; i++){
        let catName = cats[i].name;
        console.log(catName);
    }
}

listElement();


//Question 8:
function createCats(cats) {
    
    let newHTML = "";

    for (let i = 0; i < cats.length; i++) {
    let catName = cats[i].name;
    let catAge = cats[i].age;
    
        if (!catAge) {
            catAgeUnknown = "Age unknown";
            newHTML += `<div>
                       <h5> ${catName}</h5>
                        <p>${catAgeUnknown}</p>
                    </div>`;
        } else {

        newHTML += `<div>
                       <h5> ${catName}</h5>
                        <p>${catAge}</p>
                    </div>`;
}
    }
    return newHTML;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;