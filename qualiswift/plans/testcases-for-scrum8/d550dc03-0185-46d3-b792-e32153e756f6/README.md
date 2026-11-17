Qualiswift approved plan: New_TestPlan_ForGitHub
Version 5 · SHA-256 2be2530772f748bb5c8e3453dcf42fe84df91d2bc235fe54a44d968f64a0efcb
1. Verify Login Page Elements Visibility
Case ID: TC-001
Story IDs: SCRUM-8
Preconditions: OrangeHRM demo application must be accessible. Login page must be displayed.
1. Open the OrangeHRM demo application login page.
Step Test Data: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Verify that the Username field is displayed.
3. Verify that the Password field is displayed.
4. Verify that the Login button is displayed.
Step Expected: The login page displays Username field, Password field, and Login button.
Test Data: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Expected: The login page displays Username field, Password field, and Login button.
2. Login with Valid Credentials
Case ID: TC-002
Story IDs: SCRUM-8
Preconditions: OrangeHRM demo application must be accessible. User must have valid login credentials. Login page must be displayed.
1. Navigate to the OrangeHRM login page.
Step Test Data: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter valid username 'Admin' in the Username field.
Step Test Data: Admin
3. Enter valid password 'admin123' in the Password field.
Step Test Data: admin123
4. Click the Login button.
Step Expected: User is authenticated successfully and redirected to the Dashboard page.
Test Data: Username: Admin
Password: admin123
Expected: User is authenticated successfully and redirected to the Dashboard page.
3. Login with Invalid Username and Password
Case ID: TC-003
Story IDs: SCRUM-8
Preconditions: OrangeHRM demo application must be accessible. Login page must be displayed.
1. Navigate to the OrangeHRM login page.
Step Test Data: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter invalid username 'InvalidUser' in the Username field.
Step Test Data: InvalidUser
3. Enter invalid password 'WrongPassword123' in the Password field.
Step Test Data: WrongPassword123
4. Click the Login button.
Step Expected: Login is rejected and an appropriate error message is displayed.
Test Data: Application URL- https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Username: InvalidUser
Password: WrongPassword123
Expected: Login is rejected and an appropriate error message is displayed.
4. Login with Empty Username and Password Fields
Case ID: TC-004
Story IDs: SCRUM-8
Preconditions: OrangeHRM demo application must be accessible. Login page must be displayed.
1. Open the OrangeHRM login page.
2. Leave Username and Password fields empty.
3. Click the Login button.
Step Expected: Required-field validation messages are displayed for both Username and Password fields.
Expected: Required-field validation messages are displayed for both Username and Password fields.
5. Verify Password Field Masking
Case ID: TC-005
Story IDs: SCRUM-8
Preconditions: OrangeHRM demo application must be accessible. Login page must be displayed.
1. Navigate to the OrangeHRM login page.
2. Enter any password value in the Password field.
3. Observe the displayed characters in the Password field.
Step Expected: The password characters are masked and not displayed in plain text.
Test Data: Password: any string
Expected: The password characters are masked and not displayed in plain text.
