let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault()
  // Do something with the event
  console.log("The event is firing!")

  let ourFormData = new FormData(event.target)

  let userFirstName = ourFormData.get("firstName")

  let updatedHtmlContent = `
                   <h2>Congratulations, ${userFirstName}!</h2>

                    <p>You're on your way to becoming a BBQ Master!</p>
                    
                    <p class="fine-print">You will get weekly updates on courses...</p>
                `
  let ourMainContent = document.getElementById("Main-Content")
  ourMainContent.innerHTML = updatedHtmlContent
})