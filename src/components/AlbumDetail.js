import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    console.log(props.album.thumbnail_image)
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image style={styles.thumbnailStyle} source={{ uri: props.album.thumbnail_image }}/>
                </View>
                <View style={styles.contentStyle}>
                    <Text style={styles.headerText}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: props.album.image }}></Image>
            </CardSection>
            <CardSection>
                <Button></Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    contentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;