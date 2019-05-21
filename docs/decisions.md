# Decisions

> Decision log: choices made along the way

## Express Generator

I'll use the express generator to get a project up and running real fast:

```
express --view=pug --css=sass chatastrophe
```

I chose pug as a templating language because the express app apparently still
uses jade as its default, which is obsolete. Could have used plain HTML, but,
haven't used pug in a while. So why not?

Project default is plain CSS, which would be fine for a simple project like
this, but I like sass.

## Deployment

Let's go ahead and create a heroku app at the beginning and be pushing to it
along the way. 

```
heroku login
heroku git:remote -a chatastrophe
```

## Websockets

For a web messenger app, the very first thing I think about reaching for is
websockets. `socket.io` is a library I've used in the past, and a quick google
search shows that it still seems to be popular, so that's what I'm going with.

## User flow

- Base goal: get the chat working on the `/chat` endpoint

- Reach goal: use the `/` endpoint to allow the user to enter a nickname that
  will be broadcast along with the message when chatting. Probably save to
  localstorage. Absence of nick will redirect a user to the "registration page"
