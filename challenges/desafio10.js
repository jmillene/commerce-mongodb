db.produtos.find({},
{ nome: 1, _id: false },
{ "valoresNutricionais.proteinas.quantidade": { $gte: 30, $lte: 40 } }).limit(3);