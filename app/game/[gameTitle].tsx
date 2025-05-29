// // app/game/[gameTitle].tsx
// import React from "react";
// import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useLocalSearchParams, router } from "expo-router";
// import { ArrowLeft, Play } from "lucide-react-native";

// // Mock game modes/variations for each game
// const getGameModes = (gameTitle: string) => {
//   const gameModes = {
//     "Tic Tac Toe": [
//       { id: "classic", name: "Classic 3x3", difficulty: "Easy" },
//       { id: "ultimate", name: "Ultimate Tic Tac Toe", difficulty: "Hard" },
//       { id: "ai", name: "vs AI", difficulty: "Medium" },
//     ],
//     "Sudoku": [
//       { id: "easy", name: "Easy Puzzle", difficulty: "Easy" },
//       { id: "medium", name: "Medium Puzzle", difficulty: "Medium" },
//       { id: "hard", name: "Hard Puzzle", difficulty: "Hard" },
//       { id: "expert", name: "Expert Puzzle", difficulty: "Expert" },
//     ],
//     "Ludo": [
//       { id: "2player", name: "2 Players", difficulty: "Easy" },
//       { id: "4player", name: "4 Players", difficulty: "Medium" },
//       { id: "tournament", name: "Tournament", difficulty: "Hard" },
//     ],
//     "Connect Four": [
//       { id: "classic", name: "Classic", difficulty: "Easy" },
//       { id: "ai", name: "vs AI", difficulty: "Medium" },
//       { id: "tournament", name: "Tournament", difficulty: "Hard" },
//     ],
//     "Checkers": [
//       { id: "classic", name: "Classic Checkers", difficulty: "Medium" },
//       { id: "ai", name: "vs AI", difficulty: "Hard" },
//       { id: "blitz", name: "Blitz Mode", difficulty: "Expert" },
//     ],
//     "Minesweeper": [
//       { id: "beginner", name: "Beginner (9x9)", difficulty: "Easy" },
//       { id: "intermediate", name: "Intermediate (16x16)", difficulty: "Medium" },
//       { id: "expert", name: "Expert (30x16)", difficulty: "Hard" },
//     ],
//     "2048": [
//       { id: "classic", name: "Classic 2048", difficulty: "Medium" },
//       { id: "5x5", name: "5x5 Grid", difficulty: "Hard" },
//       { id: "unlimited", name: "Unlimited Mode", difficulty: "Easy" },
//     ],
//     "Memory Match": [
//       { id: "easy", name: "4x4 Grid", difficulty: "Easy" },
//       { id: "medium", name: "6x6 Grid", difficulty: "Medium" },
//       { id: "hard", name: "8x8 Grid", difficulty: "Hard" },
//     ],
//   };

//   return gameModes[gameTitle as keyof typeof gameModes] || [];
// };

// const getDifficultyColor = (difficulty: string) => {
//   switch (difficulty) {
//     case "Easy": return "#4ADE80";
//     case "Medium": return "#FBBF24";
//     case "Hard": return "#F87171";
//     case "Expert": return "#A855F7";
//     default: return "#6B7280";
//   }
// };

// type GameModeCardProps = {
//   mode: { id: string; name: string; difficulty: string };
//   onPress: () => void;
// };

// const GameModeCard: React.FC<GameModeCardProps> = ({ mode, onPress }) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       className="bg-gray-800 rounded-xl p-4 mb-3 flex-row items-center justify-between"
//     >
//       <View className="flex-1">
//         <Text className="text-white font-semibold text-lg mb-1">{mode.name}</Text>
//         <View className="flex-row items-center">
//           <View
//             className="px-2 py-1 rounded-full"
//             style={{ backgroundColor: getDifficultyColor(mode.difficulty) + "20" }}
//           >
//             <Text
//               className="text-xs font-medium"
//               style={{ color: getDifficultyColor(mode.difficulty) }}
//             >
//               {mode.difficulty}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <Play color="#fff" size={24} />
//     </TouchableOpacity>
//   );
// };

// const GameScreen = () => {
//   const { gameTitle } = useLocalSearchParams<{ gameTitle: string }>();
//   const gameModes = getGameModes(gameTitle || "");

//   const handleGameModePress = (modeId: string) => {
//     // Here you would navigate to the actual game play screen
//     console.log(`Starting ${gameTitle} - ${modeId}`);
//     // You can add navigation to specific game play screens here
//     // router.push(`/gameplay/${gameTitle.toLowerCase().replace(/\s+/g, '-')}?mode=${modeId}`);
//   };

//   const handleBackPress = () => {
//     router.back();
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-primary border border-red-600">
//       {/* Header */}
//       <View className="flex-row items-center px-4 py-3 border-b border-gray-700">
//         <TouchableOpacity onPress={handleBackPress} className="mr-4">
//           <ArrowLeft color="#fff" size={24} />
//         </TouchableOpacity>
//         <Text className="text-white text-xl font-bold flex-1">{gameTitle}</Text>
//       </View>

//       {/* Game Modes List */}
//       <View className="flex-1 px-4 pt- border-t border-red-400">
//         <Text className="text-white text-xl font-semibold mb-4">Choose Game Mode</Text>

//         <FlatList
//           data={gameModes}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item }) => (
//             <GameModeCard
//               mode={item}
//               onPress={() => handleGameModePress(item.id)}
//             />
//           )}
//           ListEmptyComponent={
//             <View className="items-center justify-center py-12">
//               <Text className="text-gray-400 text-center">
//                 No game modes available for {gameTitle}
//               </Text>
//             </View>
//           }
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default GameScreen;



// app/game/[gameTitle].tsx
import React, { useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router, useNavigation } from "expo-router";
import { Play } from "lucide-react-native";

// Mock game modes/variations for each game
const getGameModes = (gameTitle: string) => {
  const gameModes = {
    "Tic Tac Toe": [
      { id: "classic", name: "Classic 3x3", difficulty: "Easy" },
      { id: "ultimate", name: "Ultimate Tic Tac Toe", difficulty: "Hard" },
      { id: "ai", name: "vs AI", difficulty: "Medium" },
    ],
    "Sudoku": [
      { id: "easy", name: "Easy Puzzle", difficulty: "Easy" },
      { id: "medium", name: "Medium Puzzle", difficulty: "Medium" },
      { id: "hard", name: "Hard Puzzle", difficulty: "Hard" },
      { id: "expert", name: "Expert Puzzle", difficulty: "Expert" },
    ],
    "Ludo": [
      { id: "2player", name: "2 Players", difficulty: "Easy" },
      { id: "4player", name: "4 Players", difficulty: "Medium" },
      { id: "tournament", name: "Tournament", difficulty: "Hard" },
    ],
    "Connect Four": [
      { id: "classic", name: "Classic", difficulty: "Easy" },
      { id: "ai", name: "vs AI", difficulty: "Medium" },
      { id: "tournament", name: "Tournament", difficulty: "Hard" },
    ],
    "Checkers": [
      { id: "classic", name: "Classic Checkers", difficulty: "Medium" },
      { id: "ai", name: "vs AI", difficulty: "Hard" },
      { id: "blitz", name: "Blitz Mode", difficulty: "Expert" },
    ],
    "Minesweeper": [
      { id: "beginner", name: "Beginner (9x9)", difficulty: "Easy" },
      { id: "intermediate", name: "Intermediate (16x16)", difficulty: "Medium" },
      { id: "expert", name: "Expert (30x16)", difficulty: "Hard" },
    ],
    "2048": [
      { id: "classic", name: "Classic 2048", difficulty: "Medium" },
      { id: "5x5", name: "5x5 Grid", difficulty: "Hard" },
      { id: "unlimited", name: "Unlimited Mode", difficulty: "Easy" },
    ],
    "Memory Match": [
      { id: "easy", name: "4x4 Grid", difficulty: "Easy" },
      { id: "medium", name: "6x6 Grid", difficulty: "Medium" },
      { id: "hard", name: "8x8 Grid", difficulty: "Hard" },
    ],
  };

  return gameModes[gameTitle as keyof typeof gameModes] || [];
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "#4ADE80";
    case "Medium": return "#FBBF24";
    case "Hard": return "#F87171";
    case "Expert": return "#A855F7";
    default: return "#6B7280";
  }
};

type GameModeCardProps = {
  mode: { id: string; name: string; difficulty: string };
  onPress: () => void;
};

const GameModeCard: React.FC<GameModeCardProps> = ({ mode, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-gray-800 rounded-xl p-4 mb-3 flex-row items-center justify-between"
    >
      <View className="flex-1">
        <Text className="text-white font-semibold text-lg mb-1">{mode.name}</Text>
        <View className="flex-row items-center">
          <View
            className="px-2 py-1 rounded-full"
            style={{ backgroundColor: getDifficultyColor(mode.difficulty) + "20" }}
          >
            <Text
              className="text-xs font-medium"
              style={{ color: getDifficultyColor(mode.difficulty) }}
            >
              {mode.difficulty}
            </Text>
          </View>
        </View>
      </View>
      <Play color="#fff" size={24} />
    </TouchableOpacity>
  );
};

const GameScreen = () => {
  const { gameTitle } = useLocalSearchParams<{ gameTitle: string }>();
  const navigation = useNavigation();
  const gameModes = getGameModes(gameTitle || "");

  // Set the header title dynamically
  useEffect(() => {
    navigation.setOptions({
      title: gameTitle || "Game",
    });
  }, [navigation, gameTitle]);

  const handleGameModePress = (modeId: string) => {
    // Here you would navigate to the actual game play screen
    console.log(`Starting ${gameTitle} - ${modeId}`);
    // You can add navigation to specific game play screens here
    // router.push(`/gameplay/${gameTitle.toLowerCase().replace(/\s+/g, '-')}?mode=${modeId}`);
  };

  return (
    <View className="flex-1 bg-primary">
      {/* Game Modes List */}
      <View className="flex-1 px-4 pt-6">
        <Text className="text-white text-lg font-semibold mb-4">Choose Game Mode</Text>

        <FlatList
          data={gameModes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <GameModeCard
              mode={item}
              onPress={() => handleGameModePress(item.id)}
            />
          )}
          ListEmptyComponent={
            <View className="items-center justify-center py-12">
              <Text className="text-gray-400 text-center">
                No game modes available for {gameTitle}
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default GameScreen;