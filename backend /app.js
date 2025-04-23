create new file
// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Simula promoções da Amazon
app.get('/api/promocoes', (req, res) => {
  const produtos = [
    {
      titulo: "Mouse Logitech M170",
      preco: "R$ 59,90",
      link: "https://www.amazon.com.br/dp/B01N5K2F9T?tag=seu-id-afiliado",
      imagem: "https://m.media-amazon.com/images/I/51otD4UuO7L._AC_SL1000_.jpg"
    },
    {
      titulo: "Fone JBL Tune 510BT",
      preco: "R$ 199,90",
      link: "https://www.amazon.com.br/dp/B08X1WNK4S?tag=seu-id-afiliado",
      imagem: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SL1500_.jpg"
    }
  ];
  res.json(produtos);
});

app.listen(port, () => {
  console.log(API rodando em http://localhost:${port});
});
