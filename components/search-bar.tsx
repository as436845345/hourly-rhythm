import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { WebNoOutlineStyles } from '@/constants/style';

type Props = {
    height?: number,
    style?: StyleProp<ViewStyle>,
}

export default function SearchBar({ height, style, ...otherProps }: Props) {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false); // 模拟加载状态

    const handleClear = () => {
        setSearchText('');
        setIsLoading(false);
    };

    const handleSearch = () => {
        if (searchText.trim() === '') return;
        setIsLoading(true);
        // 模拟搜索请求
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <View style={[styles.container, style, { height: height || 32 }]} {...otherProps}>
            {/* 左侧放大镜图标 */}
            <Ionicons name="search" size={16} color="#888" style={styles.leftIcon} />

            {/* 输入框 */}
            <TextInput
                style={[styles.input, WebNoOutlineStyles]}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search"
                placeholderTextColor="#888"
                returnKeyType="search"
                onSubmitEditing={handleSearch}
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
            />

            {/* 右侧操作区：加载指示器 / 清除按钮 */}
            <View style={styles.rightContainer}>
                {isLoading ? (
                    <Ionicons name="reload" size={16} color="#888" style={styles.spinner} />
                ) : searchText.length > 0 ? (
                    <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                        <Ionicons name="close-circle" size={16} color="#888" />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // macOS 浅灰色背景
        borderRadius: 8, // 圆角
        borderWidth: 1,
        borderColor: '#d0d0d0', // 细边框
        padding: 8,
    },
    leftIcon: {
        marginRight: 6,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        padding: 0,
        outlineStyle: undefined
    },
    rightContainer: {
        marginLeft: 6,
    },
    clearButton: {
        padding: 2,
    },
    spinner: {
        padding: 2,
    },
});