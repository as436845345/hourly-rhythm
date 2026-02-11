import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { FlashList } from "@shopify/flash-list";

import SearchBar from '@/components/search-bar';
import { GlobalStyles } from '@/constants/style';

type MusicProps = {
    id: string;
    title: string;
    duration: string;
    cover: string;
}

// 模拟数据
const musicList: MusicProps[] = [
    { id: '1', title: '音乐列表', duration: '04:5', cover: 'https://picsum.photos/200/200?random=1' },
    { id: '2', title: '正播放', duration: '03:19', cover: 'https://picsum.photos/200/200?random=2' },
    { id: '3', title: '音乐', duration: '04:3', cover: 'https://picsum.photos/200/200?random=3' },
    { id: '4', title: '音乐条', duration: '04:6', cover: 'https://picsum.photos/200/200?random=4' },
    { id: '5', title: '播乐', duration: '04:5', cover: 'https://picsum.photos/200/200?random=5' },
    { id: '6', title: '播乐', duration: '04:3', cover: 'https://picsum.photos/200/200?random=6' },
    { id: '7', title: '下一条', duration: '04:5', cover: 'https://picsum.photos/200/200?random=7' },
    { id: '8', title: '音乐', duration: '04:5', cover: 'https://picsum.photos/200/200?random=8' },
];

export default function MusicListScreen() {
    const [pressedRenderItem, setPressedRenderItem] = useState<MusicProps | null>(null);

    const onRenderItemPress = (item: MusicProps) => {
        setPressedRenderItem(item);
    }

    const renderItem = ({ item }: { item: MusicProps }) => {
        // 普通项
        return (
            <TouchableOpacity
                style={[styles.item, pressedRenderItem === item ? { backgroundColor: '#ff4757' } : null]}
                activeOpacity={0.7} onPress={() => onRenderItemPress(item)}>
                <Image source={{ uri: item.cover }} style={styles.cover} />
                <View style={styles.itemTextContainer}>
                    <Text style={[styles.title, pressedRenderItem === item ? { color: '#fff' } : null]}>{item.title}</Text>
                    <Text style={[styles.duration, pressedRenderItem === item ? { color: '#fff' } : null]}>{item.duration}</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
        );
    };

    return (
        <Text style={GlobalStyles.container}>
            <SearchBar style={{ marginBottom: 10 }} />

            <FlashList
                data={musicList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </Text>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#eee',
        paddingVertical: 10,
    },
    cover: {
        width: 40,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#eee',
    },
    itemTextContainer: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    duration: {
        fontSize: 12,
        color: '#999',
        marginTop: 2,
    },
});