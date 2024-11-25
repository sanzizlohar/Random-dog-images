const url = "https://dog.ceo/api/breeds/image/random";

const getFacts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Select the container div
    const container = document.querySelector(".container");

    // Clear any existing content in the container
    container.innerHTML = "";

    let img = document.createElement("img");

    img.src = data.message;
    img.alt = "Random Kutta";
    img.style.width = "300px";
    img.style.height = "auto";

    document.querySelector(".container").appendChild(img);
  } catch (err) {
    console.error("Error to fetch image of dogs", err);
  }
};

document.querySelector("button").addEventListener("click", getFacts);

getFacts();
