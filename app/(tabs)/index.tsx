import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 从 Ionicons 组件中提取出所有合法的 name 类型
type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

export default function MusicPlayScreen() {
    // 音乐名称 useState
    const [musicName, setMusicName] = useState('音乐名称');

    // 图片资源 useState
    const [image, setImage] = useState(require('@/assets/images/test.jpg'));

    // 初始化 useState 时，指定类型为 IoniconsName
    const [musicPlayPauseIcon, setMusicPlayPauseIcon] = useState<IoniconsName>('play-circle');

    // 2. 切换图标/状态的方法
    const toggleIcon = () => {
        setMusicPlayPauseIcon(prev => prev === 'play-circle' ? 'pause-circle' : 'play-circle');
    };

    return (
        <Text style={styles.container}>
            {/* 1. 顶部信息区 */}
            <View style={styles.header}>
                <Text style={styles.musicName}>播放中: {musicName}</Text>
            </View>

            {/* 2. 中间内容区（占主要空间） */}
            <View style={styles.content}>
                <Image
                    source={image} // 替换为你的图片地址
                    style={styles.albumArt}
                    resizeMode="cover"
                />
            </View>

            {/* 3. 底部控制区 */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.controlButton}>
                    <Ionicons name="shuffle" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton}>
                    <Ionicons name="play-skip-back" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton} onPress={toggleIcon}>
                    <Ionicons name={musicPlayPauseIcon} size={48} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton}>
                    <Ionicons name="play-skip-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.controlButton}>
                    <Ionicons name="repeat" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 占满整个屏幕
        display: 'flex',
        flexDirection: 'column', // 垂直布局
    },
    header: {
        padding: 16,
        alignItems: 'center',
    },
    musicName: {
        fontSize: 16,
        color: '#333',
    },
    content: {
        flex: 1, // 占据除了顶部和底部之外的所有剩余空间
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    albumArt: {
        width: 250,
        height: 250,
        borderRadius: 8,
        backgroundColor: '#ddd', // 图片加载前的占位色
    },
    buttonRow: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 8,
    },
    controlButton: {
        padding: 8,
    },
    playButton: {
        padding: 0,
    }
});