Qualiswift approved plan: User_Story_For_Dev-Ops
Version 6 · SHA-256 5799013775f3dec02602110c0c556fd9e03009b593e648f9ed97188bc5e7f7a1
1. Login with valid username and password
Case ID: TC-001
Story IDs: 156
Preconditions: User is on the SauceDemo login page.
1. Navigate to the SauceDemo login page.
Step Test Data: https://www.saucedemo.com/
2. Enter username: standard_user.
Step Test Data: standard_user
3. Enter password: secret_sauce.
Step Test Data: secret_sauce
4. Click the login button.
Step Expected: User is redirected to the Products page indicating successful login.
Test Data: https://www.saucedemo.com/
Username: standard_user, Password: secret_sauce
Expected: User is redirected to the Products page indicating successful login.
2. Login with invalid username
Case ID: TC-002
Story IDs: 156
Preconditions: User is on the SauceDemo login page.
1. Navigate to the SauceDemo login page.
Step Test Data: https://www.saucedemo.com/
2. Enter username: invalid_user.
Step Test Data: invalid_user
3. Enter password: secret_sauce.
Step Test Data: secret_sauce
4. Click the login button.
Step Expected: An error message is displayed indicating invalid username or credentials.
Test Data: https://www.saucedemo.com/
Username: invalid_user, Password: secret_sauce
Expected: An error message is displayed indicating invalid username or credentials.
3. Login with invalid password
Case ID: TC-003
Story IDs: 156
Preconditions: User is on the SauceDemo login page.
1. Navigate to the SauceDemo login page.
Step Test Data: https://www.saucedemo.com/
2. Enter username: standard_user.
Step Test Data: standard_user
3. Enter password: invalid_password.
Step Test Data: invalid_password
4. Click the login button.
Step Expected: An error message is displayed indicating invalid password or credentials.
Test Data: https://www.saucedemo.com/
Username: standard_user, Password: invalid_password
Expected: An error message is displayed indicating invalid password or credentials.
4. Login with empty username and password fields
Case ID: TC-004
Story IDs: 156
Preconditions: User is on the SauceDemo login page.
1. Navigate to the SauceDemo login page.
2. Ensure username and password fields are empty.
3. Click the login button.
Step Expected: An error message is displayed indicating that username and password cannot be empty and user remains on the Login page.
Test Data: https://www.saucedemo.com/
Username: (empty), Password: (empty)
Expected: An error message is displayed indicating that username and password cannot be empty and user remains on the Login page.
