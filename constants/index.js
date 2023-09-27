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