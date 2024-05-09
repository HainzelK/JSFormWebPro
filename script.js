const form = document.getElementById('form');
const outputDiv = document.getElementById("output");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        program: document.getElementById('program').value,
        address: document.getElementById('address').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        mother: document.getElementById('mother').value,
        father: document.getElementById('father').value,
        file: document.getElementById('inputGroupFile01').value
    };
    console.log(formData); //saving the output from the form into the console
    
    outputDiv.innerHTML = "Output"; 
    outputDiv.className = "output"; 
    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            const div = document.createElement("div");
            if (key === 'file') {
                div.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: `;
            } else {
                div.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${formData[key]}`;
            }
            outputDiv.appendChild(div);
        }
    } //outputting into the html so it can be seen

    const imgForm = document.getElementById('inputGroupFile01');
    if (imgForm.files.length != 0) {
        let file = imgForm.files[0];
        let image = document.createElement("img");
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            localStorage.setItem("image", reader.result);
            image.setAttribute("src", localStorage.getItem("image"));
            image.setAttribute("class", "output-image img-fluid w-50");
            outputDiv.appendChild(image);
        };
    } //for previewing the image
});



