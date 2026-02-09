import createIconSetFromIcoMoon from '@expo/vector-icons/createIconSetFromIcoMoon';
import { Pressable } from 'react-native';

/**
 * 作用：从 IcoMoon 的配置文件创建一个 Icon 组件。
 * - 需要提供 IcoMoon 的 JSON 配置文件、字体名称和字体文件路径。
 * - 这样就可以在 APP 中使用 IcoMoon 图标了，保持图标风格一致，且资源占用更小。
 * @returns Icon 组件，可以直接使用 `<Icon name="icon-name" size={24} color="#000" />` 来渲染图标。
 */
const Icon = createIconSetFromIcoMoon(
    require('@/assets/icomoon/selection.json'),
    'Icomoon',
    'icomoon.ttf'
);

type IconButtonProps = {
    name: string;
    size?: number;
    color?: string;
    onPress: () => void;
};

const IconButton = ({ name, size, color, onPress, ...otherProps }: IconButtonProps) => (
    <Pressable onPress={onPress} {...otherProps}>
        <Icon name={name} size={size} color={color} />
    </Pressable>
);

export { Icon, IconButton };
