import { Text } from 'react-native';

import { GlobalStyles } from '@/constants/style';
import SearchBar from '@/components/search-bar';

export default function MusicListScreen() {
    return (
        <Text style={GlobalStyles.container}>
            <SearchBar />
        </Text>
    )
}