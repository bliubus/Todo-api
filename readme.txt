git init
npm init
npm install express@4.13.3 --save

heroku create
heroku rename bin-todo-api
git status
git add .
git commit -am "Init repo"
git push heroku master
heroku open

npm install body-parser@1.13.3 --save
npm install underscore@1.8.3 --save

npm install sequelize@3.5.1 --save
npm install sqlite3@3.0.10 --save

// postgres on heroku
heroku addons:create heroku-postgresql:hobby-dev
heroku pg:wait
~/projects/learning/nodejs/node-course/todo-api$ heroku addons:create heroku-postgresql:hobby-dev
Creating postgresql-flexible-63729... done, (free)
Adding postgresql-flexible-63729 to bin-todo-api... done
Setting DATABASE_URL and restarting bin-todo-api... done, v15
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Use `heroku addons:docs heroku-postgresql` to view documentation.
npm install pg@4.4.1 --save
npm install pg-hstore@2.3.2 --save



========================================================
~/projects/learning/nodejs/node-course/todo-api$ heroku addons:create heroku-postgresql
Creating postgresql-spherical-45498... done, (free)
Adding postgresql-spherical-45498 to bin-todo-api... done
Setting DATABASE_URL and restarting bin-todo-api... done, v11
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Use `heroku addons:docs heroku-postgresql` to view documentation.
~/projects/learning/nodejs/node-course/todo-api$ heroku addons:create heroku-postgresql:hobby-dev
Creating postgresql-curly-70900... done, (free)
Adding postgresql-curly-70900 to bin-todo-api... done
Setting HEROKU_POSTGRESQL_TEAL_URL and restarting bin-todo-api... done, v12
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Use `heroku addons:docs heroku-postgresql` to view documentation.


heroku pg:reset postgresql-spherical-45498 --confirm bin-todo-api
heroku ps:stop postgresql-spherical-45498 --confirm bin-todo-api
heroku addons:destroy postgresql-spherical-45498 --confirm bin-todo-api
heroku addons:destroy postgresql-curly-70900 --confirm bin-todo-api
heroku addons:destroy postgresql-flexible-63729 --confirm bin-todo-api
========================================================

npm install bcrypt@0.8.5 --save
