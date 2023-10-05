import { View } from 'react-native';
import ItemCard from './ItemCard';

export default function ItemGrid ({ items, category, handleAddToMenu }) {

    return (
        <View className="grid">
            {
                items.map((item, index) => {
                    if (item.category == category.label) {
                        return (
                            <ItemCard
                                key={`${index}${item._id}-itemcard`}
                                item={item}
                                index={index}
                                handleAddToMenu={handleAddToMenu}
                            />
                        );
                    }
                    return null; // You should handle the case when the condition is not met, either return something or use 'null'
                })
            }
        </View>
    )
};
