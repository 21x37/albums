import React from 'react';
import { View, Text } from 'react-native';

class AlbumList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('mounted')

    }
    render() {
        return (
            <View>
                <Text>Album list!</Text>
            </View>
        );
    }
}


export default AlbumList;