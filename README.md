This is a Rails 4 app using Angular and Postgres.

So far it doesn't do much more than that.

===================================================

my notes to self:

- on postgres:
rails new myapp --database=postgresql
you'll need to remove the username from the database.yml 
then run:
createdb dbname
to create database (e.g.: createdb tweet_wrangler)

- localhost:3000/api/tweets.json references tweets in the database, uses :api scope in the routes file

- rails g resource in Rails 4 is much the same:
you get a :resource in routes, a controller and a model


