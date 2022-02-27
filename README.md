# Password Generator

A simple password generator that gathers the user's password criteria through a series of browser prompts.

![](./assets/firstprompt.png)
![](./assets/generatedpassword.png)

## Challenges

In this challenge I had to use what we learned about JavaScript in this past week's module to generate a random password that can differ greatly depending on the user's answers to the prompts. Creating the prompts and combining the users selected characters together into an array was straightforward. I was honestly stumped when it came time to actually get the program to gather random characters from the selectedChar array. I knew I would need to use math.random eventually, but I wasn't entirely sure how to get it to work with an array. I ended up going with a for loop that will 'grab' one character from an selectedChar array at a time and repeat until it had enough characters to meet the users password length request. These characters were then added to a password array and converted to a string using the join method.

The deployed application can be found [here](https://mannygarcia98.github.io/Challenge-3-Password-Gen/).
<br>Below are the challenge requirements.

## User Story

AS AN employee with access to sensitive data
<br>I WANT to randomly generate a password that meets certain criteria
<br>SO THAT I can create a strong password that provides greater security

## Acceptance Criteria

GIVEN I need a new, secure password
<br>WHEN I click the button to generate a password
<br>THEN I am presented with a series of prompts for password criteria
<br>WHEN prompted for password criteria
<br>THEN I select which criteria to include in the password
<br>WHEN prompted for the length of the password
<br>THEN I choose a length of at least 8 characters and no more than 128 characters
<br>WHEN asked for character types to include in the password
<br>THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
<br>WHEN I answer each prompt
<br>THEN my input should be validated and at least one character type should be selected
<br>WHEN all prompts are answered
<br>THEN a password is generated that matches the selected criteria
<br>WHEN the password is generated
<br>THEN the password is either displayed in an alert or written to the page
