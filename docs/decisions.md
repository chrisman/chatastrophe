# Decisions

> Decision log: choices made along the way

## Express Generator

I'll use the express generator to get a project up and running real fast:

```
express --view=pug --css=sass chatastrophe
```

I chose pug as a templating language because the express app apparently still uses jade as its default, which is obsolete. Could have used plain HTML, but, haven't used pug in a while. So why not?

Project default is plain CSS, which would be fine for a simple project like this, but I like sass.

## Deployment

Let's go ahead and create a heroku app at the beginning and be pushing to it along the way. 

```
heroku login
heroku git:remote -a chatastrophe
```


