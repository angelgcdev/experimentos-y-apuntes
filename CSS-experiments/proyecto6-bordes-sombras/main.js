/**/
const apiKey = "";
const url = "https://api.thecatapi.com/v1/images/search?limit=10";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0]);

    const catContainer = document.getElementById("cat__container");
    data.forEach((cat) => {
      const figure = document.createElement("figure");
      figure.classList.add("cat__item");

      const img = document.createElement("img");
      img.classList.add("cat__image");
      img.src = cat.url;
      img.alt = "A random cat image";
      img.style.width = "400px";
      img.style.margin = "10px";

      const figCaption=document.createElement('figcaption');
      figCaption.textContent='A kitty image';

      figure.appendChild(img);
      figure.appendChild(figCaption);
      catContainer.appendChild(figure);
    });
  })
  .catch((error) => console.error("Error fetching cat images:", error));
