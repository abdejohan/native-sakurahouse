import sushis from '../assets/categories/sushi.png';
import dishes from '../assets/categories/ramen-color.png'
import drinks from '../assets/categories/drink.png';
import sweets from '../assets/categories/mochi.png';

export const categories = [
    {
        label: 'Sushis',
        japaneseLabel: '寿司',
        icon: sushis,
        description: 'Fresh and flavorful Japanese delicacies.',
    },
    {
        label: 'Drinks',
        japaneseLabel: '飲み物',
        icon: drinks,
        description: 'Refreshing beverages to quench your thirst.'
    },
    {
        label: 'Sweets',
        japaneseLabel: 'お菓子',
        icon: sweets,
        description: 'Tempting treats for your sweet tooth.'
    },
    {
        label: 'Dishes',
        japaneseLabel: '食器',
        icon: dishes,
        description: 'Delectable and diverse culinary creations.'
    }
]

export const items = [
    {
        id: 1,
        price: 4.99,
        category: 'Sushis',
        title: 'Sashimi',
        description: 'Experience the epitome of Japanese culinary artistry with our exquisite selection of sashimi. Delicately sliced, fresh raw fish and seafood are expertly arranged to showcase their vibrant colors and flavors. Each bite offers a sublime combination of textures and tastes, allowing you to savor the pure essence of the ocean.',
        image: 'https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688029725/q7jxyvcwn562tazjdbrw.jpg'
    },
    {
        id: 2,
        price: 4.1,
        category: 'Drinks',
        title: 'Mugicha',
        description: 'Mugicha, also known as "barley tea," is a refreshing and popular beverage in Japan and other Asian countries. This aromatic and caffeine-free infusion is made from roasted barley grains, which give it a rich, toasty flavor and a warm brown hue. Mugicha is commonly enjoyed both hot and cold, making it a versatile thirst-quencher throughout the year.',
        image: 'https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934848/bg7vjubouiqkb0osvypi.webp'
    },
]