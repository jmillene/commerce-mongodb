db.produtos.find({},
  { nome: 1, _id: false,
},
{ "valoresNutricionais.quantidade": { $lt: 500 } }).skip(2);