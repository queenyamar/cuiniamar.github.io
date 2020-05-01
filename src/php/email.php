<?php
    if(isset($_GET['email'])) {
        // Email Setup
        $email_to = "amarqueenykenn@gmaol.com";
        $email_subject = "Portfolio: Employer Response";

        // Error Function
        function died($error) {
            echo "Sorry, something went wrong. Can you please try again?";
            die();
        }

        // Validation expected data exists
        if(!isset($_GET['name']) && !isset($_GET['email']) && !isset($_GET['subject']) && !isset($_GET['message'])) {
            died("Sorry, something went wrong with the form submitted.");
        }

        // Required Data
        $name = $_GET['name'];
        $email = $_GET['email'];
        $subject = $_GET['subject'];
        $message = $_GET['message'];

        // Email Validation
        $error_message = "";
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
        if(!preg_match($email_exp, $email_from)) {
            $error_message .= 'Email Address entered is invalid.';
        }

        // Name Validation
        $string_exp = "/^[A-Za-z .'-]+$/";
        if(!preg_match($string_exp, $name)) {
            $string_exp .= 'Name entered is invalid.';
        }
        if(!preg_match($string_exp, $subject)) {
            $string_exp .= 'Subject entered is invalid.';
        }

        if(strlen($message) < 2) {
            $error_message .= 'Message/comment entered seems to have some problems.';
        }

        if(strlen($message) > 0) {
            died($error_message);
        }

        $email_message = "Email details below.\n\n";

        function clean_string($string) {
            $bad = array("content-type", "bcc:", "to:", "cc:", "href:");
            return str_replace($bad, "", $string);
        }

        $email_message .= "Name: " .clean_string($name)."\n";
        $email_message .= "Email: " .clean_string($email)."\n";
        $email_message .= "Subject: " .clean_string($subject)."\n";
        $email_message .= "message: " .clean_string($message)."\n";

        // Create Email Headers
        $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: '. $email_from ."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        @mail($email, $subject, $message, $headers);
    }
?>