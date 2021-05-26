class Dream {
  constructor(dream) {
    this.id = dream.id
    this.dream_datetime = dream.attributes.dream_datetime
    this.journal = dream.attributes.journal
    this.image_url = dream.attributes.image_url
    this.category = dream.attributes.category
    Dream.all.push(this)
  }

  renderDreamHtml() {
    return `
    <div data-id=${this.id}>
      <img src=${this.image_url} width="250">
      <h3>${this.journal}</h3>
      <p>${this.category.name}</p>
      <button data-id=${this.id}>edit</button>
    </div>
    <br/><br/>`;
  }
}

Dream.all = []
