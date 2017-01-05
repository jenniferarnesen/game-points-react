# Points Game

In this game, you are given a number of items (labeled with letters),
each with a point value, and some with a bonus scheme. For example:

| Item  | Unit points | Bonus     |
| ----- |:-----------:| ---------:|
| A     | 50          | 200 for 3 |
| B     | 30          |  90 for 2 |
| C     | 20          |           |

Every time you click on one of the items you will get points.

To set up:

(prerequisites: node, npm)

```
npm install
```


To run in the browser (defaults to localhost:8080):

```
npm start
```


To run the unit tests:

```
npm test
```

To run the e2e tests:

```
webdriver-manager start
npm start
npm run e2e (in a separate terminal)
```
