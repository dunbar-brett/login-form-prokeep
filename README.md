# React + Vite + Vitest

This is a simple Login Form built with Vite and React for a tech assessment with Prokeep.


## Installation Method
1. Clone the repo

    `git clone https://github.com/dunbar-brett/login-form-prokeep.git`
2. Cd into the directory

    `cd login-form-prokeep`
3. Install node modules

    `npm i`
4. Start the development server

    `npm run dev`


## Unit Tests
1. In the project directory run:

    `npm test`
2. Notice that after running the tests a new `coverage` directory was created. 
3. Open `coverage/index.html` to see a UI of the test results and the file coverage.


## Scope for the assessment
1.  The  login  form  should  have  an  email  input  and  a  password  input.  
2.  The  login  form  should  validate  that  the  email  is  a  valid  email  input  and  the  password  field  has  at  least  one  character  before  you  process  the  submit  action.  
3.  You  are  free  to  do  on  change  or  submit  validation  –  extra  points  for  onChange.  
4.  Build  a  unit  test  for  the  form  –  testing  both  a  valid  login  and  an  invalid  login.  you  are  free  to  use  whatever  testing  stack  you  like.  
5.  Include  a  “dev”  or  “run”  script  in  your  package.json  scripts  
6.  Include  a  “test”  script  in  your  package.json  scripts  
7.  Upload  to  a  code  sharing  service  such  as  GitHub,  Gitlab,  etc.  and  let  us  know  where  to  find  it.


## Note to the reviewers
I took the liberty and modified the validation for the password, checking for at least one character made it difficult to show the validation for the error messaging. So to show that it validates for not empty or a minimum character count, I bumped it up to 8 characters. 

Thank you for your time reviewing this project, I had fun putting in a little extra effort in the UI and styling the form.