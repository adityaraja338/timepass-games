import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";
import React from 'react';

import { IconSymbol } from '@/components/ui/IconSymbol';

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        // source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          // paddingVertical: 10,
          height: 80,
          position: "relative",
          overflow: "hidden",
          // borderWidth: 2,
          // borderColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{  
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          tabBarStyle: {
            height: 'auto',
          }
        }}
      />
    </Tabs>
  );
}
