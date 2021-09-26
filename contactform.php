<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $msg = $_POST['message'];

    $mailTo = "contact@dsabae.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$msg;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.php?mailsend");
    // header("Location: success.html");
}