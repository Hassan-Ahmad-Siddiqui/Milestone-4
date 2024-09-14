// Get refrences to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Add an event listener to the form
form.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();
    // collect the input values 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //    genrate the resume content dynamically
    var resumeHTML = "\n   <h2><b>Editable Resume</b></h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b><span contentsEditable=\"true\"> ".concat(name, "</span></p>\n   <p><b>Email:</b><span contentsEditable=\"true\"> ").concat(email, "</span></p>\n   <p><b>Phone:</b><span contentsEditable=\"true\"> ").concat(phone, "</span></p>\n   <h3>Education</h3>\n   <p contentsEditable=\"true\">").concat(education, "</p>\n   <h3>Experience</h3>\n   <p contentsEditable=\"true\">").concat(experience, "</p>\n   <h3>Skills</h3>\n   <p contentsEditable=\"true\">").concat(skills, "</p>\n   ");
    // Display the resume content in the display area
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("resume display not found");
    }
});
