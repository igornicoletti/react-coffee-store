import { ProductComponents } from '../components'

const products = [
  {
    id: '1',
    image: '/images/cappuccino.png',
    name: 'Cappuccino',
    info: 'O espresso e a espuma de leite unem-se para criar o cappuccino clássico.',
    price: '20,90',
    filter: ['traditional']
  },
  {
    id: '2',
    image: '/images/lattemacchiato.png',
    name: 'Latte Macchiato',
    info: 'É um café de torra média levemente torrado, mas cheio de sabor.',
    price: '20,90',
    filter: ['express', 'hot']
  },
  {
    id: '3',
    image: '/images/vanillalatte.png',
    name: 'Vanilla Latte',
    info: 'Um clássico a um novo nível de delícia com um toque de baunilha.',
    price: '20,90',
    filter: ['express', 'hot']
  },
  {
    id: '4',
    image: '/images/sparklingmint.png',
    name: 'Sparkling Mint',
    info: 'O café gelado ganha vida com um toque brilhante e apelativo de menta.',
    price: '20,90',
    filter: ['cold']
  },
  {
    id: '5',
    image: '/images/icedlatte.png',
    name: 'Iced Latte',
    info: 'Uma bebida fresca e refrescante que pode saborear a qualquer hora do dia.',
    price: '20,90',
    filter: ['express', 'cold']
  },
  {
    id: '6',
    image: '/images/icedcaramelmacchiato.png',
    name: 'Iced Caramel',
    info: 'Café rico com um toque de baunilha, adoçado com um fio de caramelo.',
    price: '20,90',
    filter: ['express', 'cold']
  },
  /* {
    id: '7',
    image: '/images/caffemocha.png',
    name: 'Caffé Mocha',
    info: 'Um pouco de chantilly e chocolate são os elementos deste clássico.',
    price: '20,90',
  },
  {
    id: '8',
    image: '/images/affogatto.png',
    name: 'Affogato',
    info: 'O gelado do sorvete encontra o doce e torrado do espresso.',
    price: '20,90',
  } */
]

export const ProductPage = () => {
  return (
    <div className={'flex flex-col items-center gap-8'}>
      <div className={'flex flex-col items-center gap-6'}>
        <p className={'tracking-widest uppercase'}>Nossos produtos</p>
        <h2 className={'font-lander text-3xl md:text-5xl'}>Que tal uma xícara de café?</h2>
      </div>
      <div className={'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-x-32'}>
        {products.map((product) => (
          <ProductComponents {...product} />
        ))}
      </div>
    </div>
  )
}