//function for preloader
window.addEventListener('load', () => {
  const preload = document.querySelector('#preload');
  setTimeout( function() {
    preload.style.display= "none";
    preload.style.visibility= "hidden";
  }, 3500 );
});


function storeFormData() {
    // Get form values
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let city = document.getElementById("city").value;
    let career = document.getElementById("career").value;

    // Create an object to store the form data
    var formData = {
      name: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      city: city,
      career: career,
    };
    
    // Convert the object to a JSON string
    var formDataJSON = JSON.stringify(formData);

    // Store the JSON string in localStorage
    localStorage.setItem("formData", formDataJSON);

    // Show a success message
    // alert("Registration successful!");

    //redirect
    window.location= "../pages/thank-you.html";    
  }


   // create a function that checks if user exist in local storage
   const validateData = () => {

    //get user email and password
   let email = document.getElementById("inputEmail4").value;
   let password = document.getElementById("inputPassword4").value;

   //console.log(password)

   // get list of user obj from localStorage
   let formDataParse = JSON.parse(localStorage.getItem("formData"));
   //console.log(formDataParse)

   if (formDataParse.email === email && formDataParse.password === password) {
       //redirect
    window.location= "../pages/contact.html";
  } else {
    window.location= "../pages/sorry.html";
  }


}



