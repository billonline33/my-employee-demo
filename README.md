There are several ways to read data from sample-data.json, in the real scenario it would be read from web service.For that reason, I created a dummy json-server to simulate the web service.

To run the app from your local computer, run  "npm start",josn-server will be started automatically and run on port 3001.

Redux is not really required for a simple project like this. However, I assume the manager wants to test the candidates' redux skills, so I continue added code to use redux.

I have also publich the site to heroku, which can be found on http://employee-list-react.herokuapp.com/.

You can also run the web serivce on https://employee-list-api.herokuapp.com/

How the demo works:

1. Select "Sort By" will change the sort by field.
2. depends on the current sort by field, you can enter the search value. e.g. if the current Sort By is firstName, and you enter as in search box, it returns all employees who first name contains "as". 
