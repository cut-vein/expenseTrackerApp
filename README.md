# ExpenseTrackerApp

This is the source code for the first part , the rest of the code will be uploaded as I upload the next parts.

## Youtube Links
Part 1 : https://youtu.be/XERS3j3hx_8

## STEPS
First of all cd into frontEnd and the to backend and do "npm i" to install node modules\
Second , go to backend /server and change the port for the cors if you want to
Third , go to backend and run "npx prisma generate" and the create a .env File for the DATABASE_URL\
See here : https://www.prisma.io/docs/reference/database-reference/connection-urls \
Example : DATABASE_URL=postgresql://janedoe:mypassword@localhost:5432/mydb

## Available Scripts
You need to run progresql and provide the correct DATABASE_URL TO PRISMA!!\
cd into backEnd and run "npm run dev" this script will start both the backend and the frontend

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
