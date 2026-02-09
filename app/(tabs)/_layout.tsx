import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

import { Icon } from '@/components/ui/icomoon-icon';

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
          tabBarIcon: ({ color }) => <Icon size={28} name="music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="music-list"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Icon size={28} name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="clock"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Icon size={28} name="clock" color={color} />,
        }}
      />
    </Tabs>
  );
}
