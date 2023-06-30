import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targers = ["items", "form"]
  connect() {
    // console.log('i am connected to the insert_in_list controller')
    // console.log("my form", this.formTarget)
    // console.log("my items", this.itemsTarget)
    // console.log("my controller", this.element)
    this.csrfToken = document.querySelector('meta[name= "csrf-token"]').getAttribute("content")
  }

  send(event) {
    event.preventDefault()

    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json", "X-CSRF-Token": this.csrfToken },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
  }
}
