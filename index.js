const endPoint = "http://localhost:3001/api/v1/dreams";
document.addEventListener("DOMContentLoaded", () => {
  // fetch and load dreams
  getDreams();
  const createDreamForm = document.querySelector("#create-dream-form");
  createDreamForm.addEventListener("submit", (e) => createFormHandler(e));
});

function getDreams() {
  fetch(endPoint)
    .then((response) => response.json())
    .then((dreams) => {
      dreams.data.forEach((dream) => {
        // check that your data is nested in the console so you can
        // successfully access the attributes of each individual object

        let newDream = new Dream(dream);

        document.querySelector("#dream-container").innerHTML +=
          newDream.renderDreamHtml();

        // render(dream)
      });
    });
}

function createFormHandler(e) {
  e.preventDefault();
  const dream_datetime = document.querySelector("#input-dream_datetime").value;
  const journal = document.querySelector("#input-dream").value;
  const image_url = document.querySelector("#input-url").value;
  const category_id = parseInt(document.querySelector("#categories").value);
  const bodyData = { dream_datetime, journal, image_url, category_id };
  postFetch(bodyData);
}
function postFetch(bodyData) {
  // build body object outside of fetch
  fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(bodyData), //sending data here
  })
    .then((response) => response.json())
    .then((dream) => {
      const dreamData = dream.data;
      // render JSON response
      let newDream = new Dream(dreamData);

      document.querySelector("#dream-container").innerHTML +=
        newDream.renderDreamHtml();

      // render(dreamData)
    });
}
let dream_datetimeInput = new dtsel.DTS('input[name="dream_datetime"]', {
  showTime: true,
});
