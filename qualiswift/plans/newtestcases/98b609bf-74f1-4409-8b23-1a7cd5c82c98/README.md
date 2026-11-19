Qualiswift approved plan: New_Test_Plan_19
Version 3 · SHA-256 18176be790fb722125f98cb3b1f5352c6ebf921c3b36c471acc72d13848a7963
1. Successful Login with Valid Username and Password
Case ID: TC-001
Story IDs: 186
Preconditions: User is registered with valid username and password.
1. Navigate to https://www.saucedemo.com/ login page.
Step Test Data: https://www.saucedemo.com/ login
2. Enter the valid username 'standard_user' in the username field.
Step Test Data: standard_user
3. Enter the valid password 'secret_sauce' in the password field.
Step Test Data: secret_sauce
4. Click on the login button.
5. Verify that the user is redirected to the Products page.
6. Verify that the Products page is displayed and accessible.
7. Verify that the user session remains active after login.
Step Expected: User is able to log in successfully using the valid credentials, is redirected to and can view the Products page, the password field masks input characters, and the user session is maintained after login.
Test Data: https://www.saucedemo.com/ login
Username: standard_user, Password: secret_sauce
Expected: User is able to log in successfully using the valid credentials, is redirected to and can view the Products page, the password field masks input characters, and the user session is maintained after login.
