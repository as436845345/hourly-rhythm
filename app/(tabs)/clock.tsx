import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GlobalStyles } from '@/constants/style';

const Item: any = Picker.Item;

// 这是一个违反 React Hooks 规则的操作。
// 1. Hooks 规则：React Hooks（如 useState, useEffect, useWindowDimensions 等）
//    只能在 React 函数组件的顶层内部调用。它们不能在普通的 JavaScript 函数、循环、条件语句中调用，更不能在组件外部调用。
// 2. 为什么刷新不报错？ 页面初始加载时，React 执行了一次渲染。
//    此时代码运行到了第 13 行，读取了宽度。此时虽然代码写法不规范，但在某些简单场景下可能侥幸执行成功。
// 3. 为什么调整浏览器大小会报错？ 当你调整浏览器大小时，React 需要重新渲染组件以响应变化。
//    React 重新运行你的组件函数，但同时也触发了 Hook 的内部逻辑。
//    由于 useWindowDimensions 被写在了组件外部，React 无法正确追踪它的状态上下文，
//    导致 Hooks 的数量或顺序在 React 内部对不上，
//    从而抛出 "Uncaught Error"（通常是 "Rendered more hooks than during the previous render" 或类似错误）。
// ```
// const width = useWindowDimensions().width;
// ```

export default function ClockScreen() {
    // 获取屏幕宽度
    const width = useWindowDimensions().width;

    const countOptions = [1, 2, 3, 4, 5];
    const waitTimeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const alarmModeOptions = [
        { label: '开启1次', value: '1' },
        { label: '无限', value: '0' },
    ];

    const [alarmCount, setAlarmCount] = useState(1); // 闹铃次数：1/2/3/4/5
    const [waitTime, setWaitTime] = useState(5); // 等待时间：1-10分钟
    const [alarmMode, setAlarmMode] = useState('1'); // 闹钟模式：开启1次/无限

    return (
        <SafeAreaView style={GlobalStyles.container}>
            {/* 闹钟次数 */}
            <View style={styles.group}>
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
            </View>

            {/* 等待时间 */}
            <View style={styles.group}>
                <Text style={styles.title}>等待时间</Text>

                <View style={styles.pickerWrapper}>
                    <Picker
                        mode="dropdown" selectedValue={waitTime}
                        onValueChange={(value, index) => {
                            // value 传入的是字符串，需要转换为数字
                            setWaitTime(Number(value));
                        }}>
                        {waitTimeOptions.map((time) => (
                            <Item
                                key={time}
                                color={waitTime === time && '#007f00'}
                                // style={waitTime === time ? { backgroundColor: 'red' } : null}
                                label={`${time}分钟`} value={time} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.waitTimeGrid}>
                    {waitTimeOptions.map((time) => (
                        <TouchableOpacity
                            key={time}
                            style={[
                                styles.waitTimeButton,
                                waitTime === time && styles.waitTimeButtonActive,
                                { width: (width - 48) / 4 }
                            ]} onPress={() => setWaitTime(time)}>
                            <Text style={[
                                styles.waitTimeButtonText,
                                waitTime === time && styles.waitTimeButtonTextActive,
                            ]}>
                                {time}分钟
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* 闹钟模式 */}
            <View style={styles.group}>
                <Text style={styles.title}>闹钟模式</Text>

                <View style={styles.pickerWrapper}>
                    <Picker mode="dropdown" selectedValue={alarmMode} onValueChange={(value, index) => setAlarmMode(value)}>
                        {alarmModeOptions.map((mode) => (
                            <Item
                                key={mode.value}
                                color={alarmMode === mode.value && '#007f00'}
                                label={mode.label} value={mode.value} />
                        ))}
                    </Picker>
                </View>
            </View>

            {/* 开启/结束 按钮 */}
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>开启</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>结束</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
    // Picker 样式修正
    pickerWrapper: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        overflow: 'hidden', // 确保圆角生效
        justifyContent: 'center',
        height: 40, // 固定高度
    },
    // 等待时间选项网格
    waitTimeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    waitTimeButton: {
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    waitTimeButtonActive: {
        backgroundColor: '#007aff',
        borderColor: '#007aff',
    },
    waitTimeButtonText: {
        fontSize: 14,
        color: '#000',
    },
    waitTimeButtonTextActive: {
        color: '#fff',
    },
    waitTimeItemTextActive: {
        color: '#007f00'
    },
    // 底部按钮组
    buttonGroup: {
        flexDirection: 'row',
        gap: 12,
    },
    cancelButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#000',
    },
    confirmButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    confirmButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});