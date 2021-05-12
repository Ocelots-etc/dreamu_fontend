const endPoint = "http://localhost:3001/api/v1/dreams";
document.addEventListener("DOMContentLoaded", () => {
  getDreams();
  const createDreamForm = document.querySelector("#create-dream-form");
  createDreamForm.addEventListener("submit", (e) => createFormHandler(e));
});
function getDreams() {
  fetch(endPoint)
    .then((response) => response.json())
    .then((dreams) => {
      dreams.data.forEach((dream) => {
        const dreamMarkup = `
        <div data-id=${dream.id}>
          <img src=${dream.attributes.image_url} width="250">
          <h3>${dream.attributes.journal}</h3>
          <p>${dream.attributes.category.name}</p>
          <button data-id=${dream.id}>edit</button>
        </div>
        <br/><br/>`;
        document.querySelector("#dream-container").innerHTML += dreamMarkup;
      });
    });
}

function createFormHandler(e) {
  e.preventDefault();
  const dream_datetimeInput = document.querySelector("#input-dream_datetime")
    .value;
  const dreamInput = document.querySelector("#input-dream").value;
  const imageInput = document.querySelector("#input-url").value;
  const categoryId = parseInt(document.querySelector("#categories").value);
  postFetch(dream_datetimeInput, dreamInput, imageInput, categoryId)
}

function postFetch(dream_datetime, journal, image_url, category_id) {
  // build body object outside of fetch
  const bodyData = {dream_datetime, journal, image_url, category_id}
  fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
  },
    body: JSON.stringify(bodyData) //sending data here
  })
  .then(response => response.json())
  .then(dream => {
    const dreamData = dream.data
    // render JSON response
    const dreamMarkup = `
    <div data-id=${dream.id}>
      <img src=${dreamData.attributes.image_url} height="200" width="250">
      <h3>${dreamData.attributes.journal}</h3>
      <p>${dreamData.attributes.category.name}</p>
      <button data-id=${dream.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#dream-container').innerHTML += dreamMarkup


  })
}

let dream_datetimeInput = new dtsel.DTS('input[name="dream_datetime"]', {
  showTime: true,
});



// function getDreams() {
//   fetch(endPoint)
//     .then(response => response.json())
//     .then(json => console.log(json));
// }