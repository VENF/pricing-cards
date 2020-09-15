# Price cards integrating with stripe

### demo site
https://pricing-cards.herokuapp.com

### Tecnologies
- Languages: `NodeJS` and `TypeScript` and `Docker`
- Framework: `Express` and `React`

### Initialize
```sh
npm run inst # install all the dependecies for backend and frontend

copy .env.example .env # you need a private test stripe api key
```

### Production
```sh
npm run build #build application in mode production

npm run prepare #in this step the compiled react folder will be moved to the public directory of the project

npm run start #run application in production
```