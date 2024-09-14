// Get refrences to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
// Add an event listener to the form
form.addEventListener("submit", (event: Event) => {
    // Prevent the form from submitting
    event.preventDefault();
    // collect the input values 
   const name = (document.getElementById("name") as HTMLInputElement).value;
   const email = (document.getElementById("email") as HTMLInputElement).value;
   const phone = (document.getElementById("phone") as HTMLInputElement).value;
   const education = (document.getElementById("education") as HTMLInputElement).value;
   const experience = (document.getElementById("experience") as HTMLInputElement).value;
   const skills = (document.getElementById("skills") as HTMLInputElement).value;
   

//    genrate the resume content dynamically
   const resumeHTML = `
   <h2><b>Editable Resume</b></h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b><span contentsEditable="true"> ${name}</span></p>
   <p><b>Email:</b><span contentsEditable="true"> ${email}</span></p>
   <p><b>Phone:</b><span contentsEditable="true"> ${phone}</span></p>
   <h3>Education</h3>
   <p contentsEditable="true">${education}</p>
   <h3>Experience</h3>
   <p contentsEditable="true">${experience}</p>
   <h3>Skills</h3>
   <p contentsEditable="true">${skills}</p>
   `;
   // Display the resume content in the display area
   if (resumeDisplayElement) {
       resumeDisplayElement.innerHTML = resumeHTML;
   }else{
       console.error("resume display not found")
   }
})