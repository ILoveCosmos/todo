const API_UNSPLASH_KEY = "8irHPTAIootG_D21jxb9Y7WMkCGR_epZsdd3lJl30Sw";
const jsPhotoGrapper = document.querySelector(".phtograpper__title");
function handleImageLoad(event) {
  const url = `https://api.unsplash.com/search/photos?query=mountain&per_page=30&client_id=${API_UNSPLASH_KEY}&orientation=landscape`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      //   console.log(json);

      const random = Math.floor(Math.random() * 30);
      const photo = json.results[random];
      const photoGrapper = photo.user.name;
      const backGroundImage = photo.urls.regular;

      //   console.log(photo);
      if (photoGrapper !== null) {
        jsPhotoGrapper.innerText = `Photo by ${photoGrapper}`;
      }

      //   console.log(backGroundImage);
      document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${backGroundImage})`;
    });
}
function init() {
  window.addEventListener("load", handleImageLoad);
}

init();
