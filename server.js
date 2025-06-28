const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet({
  contentSecurityPolicy: {
     directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", 'https://api.weather.com', 'https://api.open-meteo.com']
    }
  }
}));

app.use(express.static('public'));

app.get('/verificar-sesion', (req, res) => {
  res.json({ activo: false });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
