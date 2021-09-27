$(document).ready(function() {
    
    // Validate Name
    $("#name-error").hide();
    const fName = document.getElementById('first_name');
    const lName = document.getElementById('last_name');

    $('#first_name').keyup(function () {
        validateFirstName();
    })
    
    $('#last_name').keyup(function () {
        validateLastName();
    })

    function validateFirstName() {
        let fNameValue = $('#first_name').val();

        if (fNameValue.length === 0) {
            $('#name-error').show();
            $('#name-error').html("First name cannot be left blank.");
            usernameError = false;
            return false;
        } else {
            $('#name-error').hide();
        }
    }
    
    function validateLastName() {
        let lNameValue = $('#last_name').val();

        if (lNameValue.length === 0) {
            $('#name-error').show();
            $('#name-error').html("Last name cannot be left blank.");
            usernameError = false;
            return false;
        } else {
            $('#name-error').hide();
        }
    }
    
    
    // Validate Email
    $("#mail-error").hide();

    const email = document.getElementById('email');
    
    email.addEventListener('blur', () => {
        let mailFrom = email.value;
        let mailPattern = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        
        if (mailPattern.test(mailFrom)) {
            $("#mail-error").hide();
            email.classList.remove('is-invalid');
            emailError = true;
        } else {
            email.classList.add('is-invalid');
            $("#mail-error").show();
            $("#mail-error").html("Invalid E-mail. Try again.");
            emailError = false;
        }
    })
    
    // Validate Confirm E-mail
    const confEmail = document.getElementById('conf_email');

    confEmail.addEventListener('blur', () => {
        let confEmailError = true;
        
        $('#conf_email').keyup(function () {
            validateConfEmail();
        })
        
        function validateConfEmail() {
            let mailFrom = email.value;
            let confEmailVal = confEmail.value;
            console.log(confEmailVal + " " + mailFrom);

            if (confEmailVal != mailFrom) {
                $("#mail-error").show();
                $("#mail-error").html("E-mails must match.");
                confEmail.classList.add('is-invalid');
                confEmailError = false;
                return false;
            } else {
                $("#mail-error").hide();
                confEmail.classList.remove('is-invalid');
                confEmailError = true;
            }
        }
    })
})
