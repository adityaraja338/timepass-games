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
      </Stack>
    </>)
}
