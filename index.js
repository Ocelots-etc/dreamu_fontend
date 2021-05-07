const endPoint = "http://localhost:3001/api/v1/dreams"

document.addEventListener('DOMContentLoaded', () => {
  getDreams()
});

function getDreams() {
  fetch(endPoint)
    .then(response => response.json())
    .then(dreams => {
      dreams.data.forEach(dream => {
        const dreamMarkup = `
        <div data-id=${dream.id}>
          <img src=${dream.attributes.image_url} height="200" width="250">
          <h3>${dream.attributes.journal}</h3>
          <p>${dream.attributes.category.name}</p>
          <button data-id=${dream.id}>edit</button>
        </div>
        <br><br>`;

          document.querySelector('#dream-container').innerHTML += dreamMarkup
      })
    })
} 

// function getDreams() {
//   fetch(endPoint)
//     .then(response => response.json())
//     .then(json => console.log(json));
// }