const url = "https://dog.ceo/api/breeds/image/random";

const getFacts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    let img = document.createElement("img");

    img.src = data.message;
    img.alt = "Ramdon Kutta";
    img.style.width = "300px";
    img.style.height = "auto";

    document.querySelector(".container").append(img);
  } catch (err) {
    console.error("Error to fetch image of dogs", err);
  }
};

getFacts();
