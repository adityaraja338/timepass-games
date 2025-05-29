import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import './global.css';

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={false} />
      <Stack >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="game/[gameTitle]"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1A2B33",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold"
            },
            presentation: "card"
          }}
        />
      </Stack>
    </>)
}
