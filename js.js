function validateForm() {
    // Validate Name
    var name = document.getElementById("Name").value;
    if (name.trim() === "") {
        alert("Please enter your Name");
        return false;
    }

    // Validate Email
    var email = document.getElementById("EMail").value;
    if (email.trim() === "" || !isValidEmail(email)) {
        alert("Please enter a valid Email address");
        return false;
    }

    // Validate Country Code
    var countryCode = document.getElementById("COUNTRY CODE").value;
    if (countryCode.trim() === "") {
        alert("Please enter your Country Code");
        return false;
    }

    // Validate Phone Number
    var phoneNumber = document.getElementById("PhoneNumber").value;
    if (phoneNumber.trim() === "") {
        alert("Please enter your Phone Number");
        return false;
    }

    // Validate Company Name
    var companyName = document.getElementById("COMPANY NAME").value;
    if (companyName.trim() === "") {
        alert("Please enter your Company Name");
        return false;
    }

    // Validate Job Title
    var jobTitle = document.getElementById("JOB TITLE").value;
    if (jobTitle.trim() === "") {
        alert("Please enter your Job Title");
        return false;
    }

    // Validate Gender
    var gender = document.querySelector('input[name="GENDER:"]:checked');
    if (!gender) {
        alert("Please select your Gender");
        return false;
    }

    // Validate Age (between 15 and 70)
    var age = document.getElementById("AGE:").value;
    if (isNaN(age) || age < 15 || age > 70) {
        alert("Please enter a valid age between 15 and 70");
        return false;
    }

    // Validate Country
    var country = document.querySelector('input[name="COUNTRY"]');
    if (country.value.trim() === "") {
        alert("Please enter your Country");
        return false;
    }

    // Validate City
    var city = document.querySelector('input[name="CITY"]');
    if (city.value.trim() === "") {
        alert("Please enter your City");
        return false;
    }

    // Validate Workshop Selection
    var workshop = document.getElementById("WORKSHOP:").value;
    if (workshop.trim() === "" || workshop === "SELECT") {
        alert("Please select a Workshop");
        return false;
    }

    // Validate Date of Attending Workshop
    var dateOfWorkshop = document.getElementById("DATE OF ATTENDING WORKSHOP:").value;
    if (dateOfWorkshop.trim() === "" || dateOfWorkshop === "SELECT") {
        alert("Please select a Date of Attending Workshop");
        return false;
    }

    // Validate Will you bring a guest
    var bringGuest = document.querySelector('input[name="WILL YOU BRING A GUEST?"]:checked');
    if (!bringGuest) {
        alert("Please select whether you will bring a guest or not");
        return false;
    }

    // Validate Payment Method
    var paymentMethod = document.querySelector('input[name="PAYMENT:"]:checked');
    if (!paymentMethod) {
        alert("Please select a Payment Method");
        return false;
    }

    // Validate Card Number
    var cardNumber = document.querySelector('input[name="CARD NUMBER"]').value;
    if (cardNumber.trim() === "") {
        alert("Please enter your Card Number");
        return false;
    }

    // Validate Card Expiration Date
    var cardExpirationDate = document.querySelector('input[name="CARD EXPIRATION DATE"]').value;
    if (cardExpirationDate.trim() === "") {
        alert("Please enter your Card Expiration Date");
        return false;
    }

    // Validate Card CVV
    var cardCVV = document.querySelector('input[name="CARD CVV"]').value;
    if (cardCVV.trim() === "") {
        alert("Please enter your Card CVV");
        return false;
    }

    // Validate Billing Address
    var billingAddress = document.querySelector('textarea[name="BILLING ADDRESS:"]').value;
    if (billingAddress.trim() === "") {
        alert("Please enter your Billing Address");
        return false;
    }

    // Validate ID Card Upload
    var idCardFile = document.querySelector('input[name="ID_CARD"]').files[0];
    if (!idCardFile || !isValidFileType(idCardFile, ['jpg', 'jpeg'])) {
        alert("Please select a valid ID card file in JPG format");
        return false;
    }

    // Validate Profile Upload
    var profileFile = document.querySelector('input[name="PROFILE"]').files[0];
    if (!profileFile || !isValidFileType(profileFile, ['pdf'])) {
        alert("Please select a valid profile file in PDF format");
        return false;
    }

    // Continue with other validations as needed

    return true; // If all validations pass, the form will be submitted
}

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidFileType(file, allowedTypes) {
    var fileName = file.name;
    var fileType = fileName.split('.').pop().toLowerCase();
    return allowedTypes.includes(fileType);
}
