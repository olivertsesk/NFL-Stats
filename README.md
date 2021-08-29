
1. Create a web app. This must be able to do the following steps
    1. Create a webpage which displays a table with the contents of [`rushing.json`](/rushing.json)
    2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_
    3. The user should be able to filter by the player's name
    4. The user should be able to download the sorted data as a CSV, as well as a filtered subset
    
2. The system should be able to potentially support larger sets of data on the order of 10k records.

3. Update the section `Installation and running this solution` in the README file explaining how to run your code

### Installation and running this solution

Prerequisite - Nodejs is installed
Technology used:
Frontend - AngularJs
Backend - NestJs

1. Clone repo
2. Cd in Frontend folder and run `npm install`
3. To start the angular app with mock data run `npm run mock-data` (will start a mock server at port 3000)
4. To start the angular app with nestjs run `npm run start` (require Nest to be running)
6. Cd in Backend folder and run `npm run start`
7. Navigate to localhost:4200

### Notes
Created a cloud mongoDB for the Database which is connected to NestJs.
Endpoint available - api/rushings @DELETE
                                  @POST
                                  @GET
                                
Postman collection can be found under the backend folder

Used PrimeNG to help to generate table
