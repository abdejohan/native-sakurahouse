import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function WhereCard ({ label, description, imageSrc, handleEatingPlace }) {

    return (
        <TouchableOpacity onPress={()=> (handleEatingPlace)} className="p-3 flex flex-row flex-col items-center justify-center border border-pink-500 rounded-xl">
            <View className="h-40 w-40">
                <Image
                    className="max-w-full max-h-full object-contain"
                    source={imageSrc}
                    alt={label}
                />
            </View>
            <View className="p-4 text-center">
                <Text className="font-bold text-xl w-full">{label}</Text>
                <Text className="text-gray-700 mt-5">{description}</Text>
            </View>
        </TouchableOpacity>
    )
};
