<?php
    $errors = '';
    $myemail = 'robertasharp@yahoo.com';
    if(empty($_POST['name'])  ||
       empty($_POST['email']) ||
       empty($_POST['message']))
    {
        $errors .= "\n Error: all fields are required";
    }
    $first_name = $_POST['fname'];
    $last_name = $_POST['lname'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];
    if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address))
    {
        $errors .= "\n Error: Invalid email address";
    }
    
    if( empty($errors))
    {
    $to = $myemail;
    $email_subject = "Contact form submission: $first_name, $last_name";
    $email_body = "You have received a new message. ".
    " Here are the details:\n Name: $first_name, $last_name \n ".
    "Email: $email_address\n Message \n $message";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    header('Location: contact-form-thank-you.html');
    }
    ?>