const products = [
  {
    id: '1',
    image: '/images/cappuccino.png',
    name: 'Cappuccino',
    info: 'O espresso e a espuma de leite unem-se para criar o cappuccino clássico.',
    price: 20.90,
    filter: ['hot']
  },
  {
    id: '2',
    image: '/images/lattemacchiato.png',
    name: 'Latte Macchiato',
    info: 'É um café de torra média levemente torrado, mas cheio de sabor.',
    price: 20.90,
    filter: ['hot']
  },
  {
    id: '3',
    image: '/images/vanillalatte.png',
    name: 'Vanilla Latte',
    info: 'Um clássico a um novo nível de delícia com um toque de baunilha.',
    price: 20.90,
    filter: ['hot']
  },
  {
    id: '4',
    image: '/images/sparklingespresso.png',
    name: 'Sparkling Espresso',
    info: 'O café gelado ganha vida com um toque brilhante e apelativo de menta.',
    price: 20.90,
    filter: ['cold']
  },
  {
    id: '5',
    image: '/images/icedlatte.png',
    name: 'Iced Latte',
    info: 'Uma bebida fresca e refrescante que pode saborear a qualquer hora do dia.',
    price: 20.90,
    filter: ['cold']
  },
  {
    id: '6',
    image: '/images/caramelmacchiato.png',
    name: 'Caramel Macchiato',
    info: 'Café rico com um toque de baunilha, adoçado com um fio de caramelo.',
    price: 20.90,
    filter: ['cold']
  }
]

export const ProductApi = async () => {
  try {
    return await fetch('http://localhost:8000/products').then((response) => response.json())
  } catch {
    return products
  }
}