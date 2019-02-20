var submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', function(){
    // Name validation
    var firstName = document.getElementById('firstNameInput').value;
    var lastName = document.getElementById('lastNameInput').value;
    // Regex for only letters, but with international support
    var nameVal = /^[a-zA-ZàáâäãåąæčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    var firstNameResult = nameVal.test(firstName);
    var lastNameResult = nameVal.test(lastName);

    // Phone Number validation
    var phoneNumber = document.getElementById('phoneInput').value;
    // Regex for numbers only, has to be 8 in length (norwegian phone-number)
    var phoneVal = /^\d{8,8}$/;
    var phoneResult = phoneVal.test(phoneNumber);

    // Email validation
    var emailAddress = document.getElementById('emailInput').value;
    // Regex for email. name@name.name accepted
    var emailVal = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailResult = emailVal.test(emailAddress);

    // Validation feedback
    var firstNameErrCheck = document.getElementById('firstNameCheck');
    var lastNameErrCheck = document.getElementById('lastNameCheck');
    var phoneErrCheck = document.getElementById('phoneCheck');
    var emailErrCheck = document.getElementById('emailCheck');

    if (!firstNameResult && firstNameErrCheck === null) {
        var createFirstNameDiv = document.createElement('div');
        createFirstNameDiv.className = 'validationError';
        createFirstNameDiv.setAttribute("id", "firstNameCheck");
        createFirstNameDiv.innerHTML += "Invalid characters in name";
        document.getElementById('firstNameErr').appendChild(createFirstNameDiv);
    } else if (firstNameResult && firstNameErrCheck !== null) {
        firstNameErrCheck.parentNode.removeChild(firstNameErrCheck);
    }

    if (!lastNameResult && lastNameErrCheck === null) {
        var createLastNameDiv = document.createElement('div');
        createLastNameDiv.className = 'validationError';
        createLastNameDiv.setAttribute("id", "lastNameCheck");
        createLastNameDiv.innerHTML += "Invalid characters in name";
        document.getElementById('lastNameErr').appendChild(createLastNameDiv);
    } else if (lastNameResult && lastNameErrCheck !== null) {
        lastNameErrCheck.parentNode.removeChild(lastNameErrCheck);
    }

    if (!phoneResult && phoneErrCheck === null) {
        var createPhoneDiv = document.createElement('div');
        createPhoneDiv.className = 'validationError';
        createPhoneDiv.setAttribute("id", "phoneCheck");
        createPhoneDiv.innerHTML += "Invalid phone format, use 8 digits";
        document.getElementById('phoneErr').appendChild(createPhoneDiv);
    } else if (phoneResult && phoneErrCheck !== null) {
        phoneErrCheck.parentNode.removeChild(phoneErrCheck);
    }

    if (!emailResult && emailErrCheck === null) {
        var createEmailDiv = document.createElement('div');
        createEmailDiv.className = 'validationError';
        createEmailDiv.setAttribute("id", "emailCheck");
        createEmailDiv.innerHTML += "Email format invalid, use the following format: email@domain.com";
        document.getElementById('emailErr').appendChild(createEmailDiv);
    } else if (emailResult && emailErrCheck !== null) {
        emailErrCheck.parentNode.removeChild(emailErrCheck);
    }
    if (firstNameResult && lastNameResult && phoneResult && emailResult) {
        var url= "./contact_success.html";
        window.location = url;
    }
});