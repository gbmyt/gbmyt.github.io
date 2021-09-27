<?php

if (isset($_POST['submit'])) {
    $name = $_POST['first_name']." ".$_POST['last_name'];
    $subject = "Custom Build Request";
    $mailFrom = $_POST['email'];
    $confMail = $_POST['conf_email'];
    $msg = $_POST['message'];

    $mailTo = "contact@dsabae.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$msg;

    $mailpattern = "/^[a-zA-Z0-9-_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/";
    $validation_error;
    
    if (preg_match($mailpattern, $mailFrom)) {
        if ($mailFrom === $confMail) {
            mail($mailTo, $subject, $txt, $headers);
            header("Location: success.html");
        } else {
            header("Location: errors/conf-error.php"); 
        }
    } else {
        // $validation_error = "Hint: Double check your e-mail address."; 
        header("Location: errors/mail-error.php"); 
    }
}