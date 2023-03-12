const cardDiv = document.createElement("div");
cardDiv.classList.add("card");

const image = document.createElement("img");
image.src = "/Users/akakigaboshvili/Desktop/js/card/files/taso.jpeg"
image.classList.add("rounded-img");
const name = document.createElement("h2");
name.innerHTML = "Anastasia Gaboshvili"

const ul = document.createElement("ul");
const lis = ["Job Description:", "React", "Javascript", "NodeJS"].map((lang) => {
    const li = document.createElement("li");
    li.innerHTML = lang;
    return li;
}).forEach((li) => ul.appendChild(li));

const followButton = document.createElement("button");
followButton.innerHTML = "Follow Me";
followButton.classList.add("btn");

cardDiv.appendChild(image);
cardDiv.appendChild(name);
cardDiv.appendChild(ul);
cardDiv.appendChild(followButton);

document.body.appendChild(cardDiv);