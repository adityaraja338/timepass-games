// screens/HomeScreen.tsx
import React from "react";
import { View, Text, FlatList } from "react-native";
import GameCard from "../../components/GameCard";
import { Bell } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { images } from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const games = [
  {
    title: "Tic Tac Toe",
    image: images.tictactoe,
  },
  {
    title: "Sudoku",
    image: images.sudoko,
  },
  {
    title: "Ludo",
    image: images.ludo,
  },
  {
    title: "Connect Four",
    image: images.connectFour,
  },
  {
    title: "Checkers",
    image: images.checkers,
  },
  {
    title: "Minesweeper",
    image: images.minesweeper,
  },
  {
    title: "2048",
    image: images.image7,
  },
  {
    title: "Memory Match",
    image: images.image8,
  },
];

const HomeScreen = () => {
  const handleGamePress = (gameTitle: string, gameImage: any) => {
    router.push({
      pathname: `/game/[gameTitle]`,
      params: {
        gameTitle: gameTitle,
        gameImage: JSON.stringify({ uri: gameImage })
      }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-primary px-4 pt-3 w-full">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-white text-xl font-bold">Game Hub</Text>
        <TouchableOpacity>
          <Bell color="white" size={24} />
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <FlatList
        data={games}
        keyExtractor={(item) => item.title}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <GameCard
            title={item.title}
            image={item.image}
            onPress={() => handleGamePress(item.title, item.image)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;