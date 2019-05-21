import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }
    async componentWillMount() {
        const { data } = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        await this.setState({ albums: data })
    };
    renderAlbums() {
        return this.state.albums.map((album) => {
            console.log(album.title);
            return <Text>{album.title}</Text>
        })
    }
    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}


export default AlbumList;