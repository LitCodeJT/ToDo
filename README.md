# README

## I am Tan Yan Feng, matriculation number: e0543688.
This is a web-based to-do list using a react frontend, sqlite backend, and ruby on rails to connect them.
Open command prompt and run

```
bundle install
```

to install all the necessary gems. Afterwards, run

```
rails db:migrate
```

to seed the database with dummy values. Afterwards, run

```
rails s
```

to start the server. After it has compiled, open http://localhost:3000/ in the browser of your choice.

### Additional notes:

- I created the database thinking that every item needed a boolean, to show if it one done or not. But afterwards, I realised that I could simply filter the list, to remove the entry.

### Current bugs:

- When I try to update the database with a new todo, null is passed as the props instead of what is written.
