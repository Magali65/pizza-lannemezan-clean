module.exports = [
  {
    name: 'Fromagère',
    description: 'Tomate ou crème fraîche, 3 fromages, mozzarella',
    prices: {
      petite: 7.5,
      moyenne: 12.5,
      grande: 14.5
    }
  },
  {
    name: 'Savoyarde',
    description: 'Crème fraîche, pommes de terre, raclette, reblochon, lardons, mozzarella',
    prices: {
      petite: 7.5,
      moyenne: 13.5,
      grande: 15.5
    }
  },
  {
    name: 'Cammenbert',
    description: 'Crème fraîche,camembert, confiture de cerise noire, ventrèche, roquette, mozzarella, crème balsamique',
    prices: {
      moyenne: 14,
      grande: 16
    }
  },
  {
    name: 'Chèvre',
    description: 'Tomate ou crème fraîche, mozzarella',
    prices: {
      petite: 7,
      moyenne: 11,
      grande: 13
    },
    option: {
      name: 'Miel',
      prices: {
        petite: 0.5,
        moyenne: 0.5,
        grande: 0.5
      }
    }
  }
]
