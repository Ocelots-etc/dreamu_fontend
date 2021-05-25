class Dream {
  constructor(dream, dreamAttributes) {
    this.id = dream.id
    this.dream_datetime = dreamAttributes.dream_datetime
    this.journal = dreamAttributes.journal
    this.image_url = dreamAttributes.image_url
    this.category = dreamAttributes.category
    Dream.all.push(this)
  }
}

Dream.all = []
