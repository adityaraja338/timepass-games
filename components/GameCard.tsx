// // components/GameCard.tsx
// import React from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";


// type Props = {
//   title: string;
//   image: any;
//   onPress?: () => void;
// };

// const onPress = () => {
//   console.log("Game card pressed");
// }

// const GameCard: React.FC<Props> = ({ title, image }) => {
//   return (
//     <TouchableOpacity className="w-[46%] mb-4" onPress={onPress}>
//       <View className="rounded-xl overflow-hidden bg-white dark:bg-gray-800">
//         <Image
//           source={image}
//           className="w-full h-[173px]"
//           resizeMode="cover"
//         />
//         <Text className="text-center text-sm font-semibold text-white py-2">
//           {title}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default GameCard;


// components/GameCard.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  image: any;
  onPress?: () => void;
};

const GameCard: React.FC<Props> = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity className="w-[46%] mb-4" onPress={onPress}>
      <View className="rounded-xl overflow-hidden bg-white dark:bg-gray-800">
        <Image
          source={image}
          className="w-full h-[173px]"
          resizeMode="cover"
        />
        <Text className="text-center text-sm font-semibold text-white py-2">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;