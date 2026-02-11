import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { GlobalStyles } from '@/constants/style';

const countOptions = [1, 2, 3, 4, 5];

export default function ClockScreen() {
    const [alarmCount, setAlarmCount] = useState(1); // 闹铃次数：1/2/3/4/5

    return (
        <Text style={[GlobalStyles.container, { padding: 10 }]}>
            {/* 闹钟次数 */}
            <Text style={styles.group}>
                <Text style={styles.title}>闹钟次数</Text>
                <View style={styles.timesContainer}>
                    {countOptions.map((count) => (
                        <TouchableOpacity
                            key={count}
                            style={[
                                styles.countButton,
                                alarmCount === count && styles.countButtonActive,
                            ]}
                            onPress={() => setAlarmCount(count)}>
                            <Text style={[
                                styles.countButtonText,
                                alarmCount === count && styles.countButtonTextActive,
                            ]}>
                                {count}次
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Text>

            {/* 等待时间 */}
            <Text style={styles.group}>
                <Text style={styles.title}>等待时间</Text>
            </Text>

            {/* 闹钟模式 */}
            <Text style={styles.group}>
                <Text style={styles.title}>闹钟模式</Text>
            </Text>

            {/* 开启/结束 按钮 */}
            <Text>
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    group: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    timesContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: 8,
    },
    countButton: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countButtonActive: {
        backgroundColor: '#007aff',
        borderColor: '#007aff',
    },
    countButtonText: {
        fontSize: 14,
        color: '#000',
    },
    countButtonTextActive: {
        color: '#fff',
    },
});