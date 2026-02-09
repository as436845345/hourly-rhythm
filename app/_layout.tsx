import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { LogBox } from 'react-native';
import { useEffect } from 'react';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';

import { useColorScheme } from '@/hooks/use-color-scheme';

// 作用：禁止 APP 自动关掉启动页。
// - 正常 Expo APP 启动后，系统会自动立刻隐藏启动页，进入页面；
// - 但自定义字体需要加载时间，如果启动页早早就关了，页面会先显示默认字体，等字体加载好再跳变成 Hourly-Rhythm，出现字体闪烁、跳变，很难看；
// - 加这行 = 告诉系统：不准自己关启动页，我让你关你再关。
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    'Icomoon': require('@/assets/icomoon/icomoon.ttf'),
  });

  useEffect(() => {
    if (error) {
      console.error("字体加载失败：", error); // 关键！打印具体错误信息
      LogBox.ignoreLogs(["字体加载失败"]); // 可选：屏蔽日志警告
    }
    if (loaded || error) {
      // 作用：手动关闭启动页，正式进入 APP 界面。
      // - 只有我们主动调用这行，启动页才会消失；
      // - 必须等 loaded=true（字体加载完成）或 error=true（加载失败）时才调用，保证字体加载完再进页面。
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  if (error) {
    throw error; // 关键！抛出错误以便在开发环境中捕获
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
