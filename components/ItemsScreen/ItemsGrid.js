import { Text, View } from 'react-native';
import ItemCard from './ItemCard';

export default function ItemsGrid ({ items, category,
    handleAddToMenu
}) {
    return (
        <View className="flex flex-row flex-wrap mt-8 justify-center min-h-[90vh]">
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
                    return null;
                })
            }
        </View>
    )
};
