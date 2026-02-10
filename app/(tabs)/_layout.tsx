import { Tabs } from 'expo-router';
import React from 'react';

import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="music-list"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Entypo size={28} name="folder-music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="clock"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="alarm-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
