//function for preloader
// window.addEventListener('load', () => {
  //  const preload = document.querySelector('#preload');
  //  setTimeout( function() {
    // preload.className += " hidden";
    // preload.classList.add('hidden');
    // preload.style.display= 'none';
    // preload.style.background= 'green';
    // preload.style.setProperty('visibility', 'hidden', 'important');
  //  }, 3500 );    
// });


const myTimer = setTimeout(preloads, 3500);
const preload = document.querySelector('#preload');

function preloads() {
  preload.className += " hidden";
}


function storeFormData() {
    // Get form values
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value.toLowerCase();
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

  // Function to load and display saved form data from localStorage
  function loadFormData() {
    // Retrieve the JSON string from localStorage
    var formDataJson = localStorage.getItem('formData');
    
    if (formDataJson) {
      // Convert the JSON string back to an object
      var formData = JSON.parse(formDataJson);

      //capitalize the first character of our form data string and extract it
      let fname = formData.name
      fname = fname.charAt(0).toUpperCase() + fname.slice(1);
      let fnames = fname.charAt(0).toUpperCase();
       

      // Display the form data in the respective fields
      document.getElementById('welcome-contact').innerHTML =`Welcome ${fname}`;
       document.getElementById('container-header').innerHTML = fnames;
      // document.getElementById('password').value = formData.password;
    }
    
  }

  loadFormData()

  
//function for creating phone contact
  function createFormData() {
    // Get form values
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let email = document.getElementById("email1").value.toLowerCase();
      let phoneNumber = document.getElementById("phoneNumber1").value;
    let city = document.getElementById("city1").value;
    let career = document.getElementById("career1").value;

    // Create an object to store the form data
    var formData1 = {
      fname: fName,
      lname: lName,
      email: email,
      phoneNumber: phoneNumber,
      city: city,
      career: career,
    };
    
    // Convert the object to a JSON string
    var formDataJSON1 = JSON.stringify(formData1);

    // Store the JSON string in localStorage
    localStorage.setItem("formData1", formDataJSON1);

    // Show a success message
    // alert("Registration successful!");

    //redirect
    window.location= "../pages/contact.html";    
  }

  // Function to load and display saved contact data from localStorage
  function loadCreateFormData() {
    // Retrieve the JSON string from localStorage
    var formDataJson1 = localStorage.getItem('formData1');
    
    if (formDataJson1) {
      // Convert the JSON string back to an object
      var formData1 = JSON.parse(formDataJson1);

      //capitalize the first character of our form data string and extract it
      let fname = formData1.fname
      fname = fname.charAt(0).toUpperCase() + fname.slice(1);
      let lname = formData1.lname
      lname = lname.charAt(0).toUpperCase() + lname.slice(1);
             

      // Display the form data in the respective fields
      document.getElementById('main-name').innerHTML =`${fname} ${lname}`;
       document.getElementById('main-no').innerHTML = formData1.phoneNumber;
      // document.getElementById('password').value = formData.password;
    }
    
  }
  loadCreateFormData();

















// //function for creating phone contact
// function createFormData() {

//   const formData1 = [];


// // constructor function as object template
// function Student(firstname, lastname, emailaddress, phonenumber, career, stcity) {
//   this.firstName = firstname;
//   this.lastName = lastname;
//   this.email = emailaddress;
//   this.phone = phonenumber;
//   this.career = career
//   this.city = stcity;
// }
// // function to create object
// function createObj() {
//   // get form values
//   const fname = document.querySelector('#firstName').value;
//   const lname = document.querySelector('#lastName').value;
//   const email = document.querySelector('#email1').value;
//   const phone = document.querySelector('#phoneNumber1').value;
//   const career = document.getElementById("career1").value;
//   const city = document.querySelector('#city1').value;
  

//   const studentObj = new Student(fname, lname, email, phone, career,  city);
//   return studentObj;
// }

//     const newStudent = createObj()
//     formData1.push(newStudent);
 
//   // Convert the object to a JSON string
//   let formDataJSON1 = JSON.stringify(formData1);

//   // Store the JSON string in localStorage
//   localStorage.setItem("formData1", formDataJSON1);

//   //redirect
//   window.location= "../pages/contact.html";    
// }

// Function to load and display saved contact data from localStorage
// function loadCreateFormData() {
//   // Retrieve the JSON string from localStorage
//   let formDataJson1 = localStorage.getItem('formData1');
  
//   if (formDataJson1) {
//     // Convert the JSON string back to an object
//     var formData1 = JSON.parse(formDataJson1);

//     //capitalize the first character of our form data string and extract it
//     let fname = formData1.fname
//     fname = fname.charAt(0).toUpperCase() + fname.slice(1);
//     let lname = formData1.lname
//     lname = lname.charAt(0).toUpperCase() + lname.slice(1);
           

//     // Display the form data in the respective fields
//     document.getElementById('main-name').innerHTML =`${fname} ${lname}`;
//      document.getElementById('main-no').innerHTML = formData1.phoneNumber;
//     // document.getElementById('password').value = formData.password;
//   }
  
// }
//loadCreateFormData();

