import { Tabs } from "expo-router";
import React from 'react';

import { IconSymbol } from '@/components/ui/IconSymbol';

type TabIconProps = {
  icon: LucideIcon;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({ icon: Icon, color, name, focused }) => {
  return (
    <View
      className="min-w-[112px] min-h-[84px] flex-1 items-center justify-center gap-2 mt-8"
      style={{ opacity: focused ? 1 : 0.5 }}
    >
      <Icon color={color} size={24} />
      <Text
        className={`${focused ? "font-bold" : "font-regular"} tracking-wider`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#91B8C9",
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#1A2B33",
          // paddingVertical: 10,
          height: 80,
          position: "relative",
          overflow: "hidden",
          borderWidth: 0,
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
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={Trophy}
              color={color}
              name="Leaderboard"
              focused={focused}
            />
          ),
        }}

      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={LucideSettings}
              color={color}
              name="Settings"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
