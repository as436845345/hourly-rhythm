import { StyleSheet, Platform } from 'react-native';

// 定义 Web 端专属样式（用 any 绕过 TS 类型检查）
export const WebNoOutlineStyles = Platform.OS === 'web'
    ? ({ outlineStyle: 'none' } as any)
    : {};

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1, // 占满整个屏幕
        display: 'flex',
        flexDirection: 'column', // 垂直布局
        padding: 10,
    },
});
