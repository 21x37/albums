import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
            return <AlbumDetail key={album.title} album={album}></AlbumDetail>
        });
    };
    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}


export default AlbumList;