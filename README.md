REST-BASIC-NODEJS
=================

Basic App Rest con Node y Express


TEST
====

GET : curl -i http://localhost:3000/tareas/

POST : curl -i -X POST http://localhost:3000/tareas --data '{}' -H "Content-T

PUT : curl -i -X PUT http://localhost:3000/tareas/1 --data '{"estado":"completa"}' -H "Content-Type: application/json"

DELETE : curl -i -X DELETE http://localhost:3000/tareas/1
