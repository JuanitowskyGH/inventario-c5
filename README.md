# inventario-c5

# INICIAR EL PROYECTO
En la terminal:
- Para el frontend y backend es la misma forma de iniciar, solo cambia la ruta:
cd frontend/backend
npm run dev

- npm install --legacy-peer-deps - Para instalar las dependecias por version

# COMANDOS GIT

- git clone https/: liga - Para clonar el repositorio
- git branch feature/hola-mundo - Crear nueva rama
- git checkout develop - Entrar a las ramas
- git status - Ver la rama y los cambios
- git add . - Agregar el commit
- git commit -m "mensaje" - Mensaje
- git push --set-upstream origin feature/hola-mundo - Subir las cosas

- git pull - Actualizar el git
- git rm .env --cached - quitar en env


# COMANDOS MIGRACIONES
Sequelize CLI [Node: 10.21.0, CLI: 6.0.0, ORM: 6.1.0]
npx sequelize <command>


Commands:
 - sequelize-cli migration:generate --name [name] Create a migration
 - sequelize db:migrate                        Run pending migrations
 - sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
 - sequelize db:migrate:status                 List the status of all migrations
 - sequelize db:migrate:undo                   Reverts a migration
 - sequelize db:migrate:undo:all               Revert all migrations ran
  
 - sequelize-cli seed:generate --name [name] Create a seeder 
 - sequelize db:seed                           Run specified seeder
 - sequelize db:seed --seed [name] Run seeder with name
 - sequelize db:seed:undo                      Deletes data from the database
 - sequelize db:seed:all                       Run every seeder
 - sequelize db:seed:undo:all                  Deletes data from the database
 - sequelize db:create                         Create database specified by configuration
  
 - sequelize db:drop                           Drop database specified by configuration
 - sequelize init                              Initializes project
 - sequelize init:config                       Initializes configuration
 - sequelize init:migrations                   Initializes migrations
 - sequelize init:models                       Initializes models
 - sequelize init:seeders                      Initializes seeders
  
 - sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
 - sequelize model:generate                    Generates a model and its migration [aliases: model:create]
 - sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]

Options:
  --version  Show version number                                                  [boolean]
  --help     Show help                                                            [boolean]
