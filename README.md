# calorie-backend
A NodeJs API to track the macro nuntrient in your food.

It uses `Express and `MongoDB` and `Yarn` as package manager, so just make sure you have these dependencies installed before you clone this repo.

## How to use it ?
 - Just clone this repo and install the dependencies using `yarn`.
 - Run the application using `yarn local`.
 - visit [127.0.0.1:3000](127.0.0.1:3000)
 
 
## How to seed data ?
There is a `seeder.csv` file inside the data directory that contains a csv containing some seed data that you can use to just get started with the `API`.
In order to make the seed the data to MongoDB, just visit `127.0.0.1:3000/api/calorieApp/seed`.

Once the seeding is done, you could visit `127.0.0.1:3000/api/calorie` to view all the food items available and it's macro nutrient information.

NOTE: Since it is difficult to initiate PUT/PATCH/POST/DELETE dierctly from the browser, I recommend you to use a API client like [postman](https://www.postman.com/) or [hopscotch](https://hoppscotch.io/).

