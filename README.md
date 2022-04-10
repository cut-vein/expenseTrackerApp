# ExpenseTrackerApp
This is the source code for the second part , the rest of the code will be uploaded as I upload the next parts.

## Youtube Links
Part 1 : https://youtu.be/XERS3j3hx_8
Part 2 :

## STEPS
First of all cd into frontEnd , then to backend and do "npm i" to install node modules\
Second , go to backend/server.js and change the port for the cors if you want to\
Third , go to backend and run "npx prisma generate" and then create an .env file for the DATABASE_URL\
See here : https://www.prisma.io/docs/reference/database-reference/connection-urls \
Example : DATABASE_URL=postgresql://janedoe:mypassword@localhost:5432/mydb

## Available Scripts
You need to run progresql and provide the correct DATABASE_URL TO PRISMA!!\
cd into backEnd and run "npm run dev" this script will start both the backend and the frontend

