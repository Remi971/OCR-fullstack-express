const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => { // Le middleware ne prend pas d'adresse en premier paramètre afin de s'appliquer à toutes les routes
  res.setHeader('Access-Control-Allow-Origin', '*'); // '*' permet d'accéder à notre API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // ajouter les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');// envoie des requêtes avec les méthodes mentionnées
  next();
})

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json( {
    message: 'Objet créé !'
  });
});

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });


module.exports = app;