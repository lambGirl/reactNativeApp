import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,SectionList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default class FlatListBasics extends Component{

    render(){
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin','Jackson', 'James', 'Jillian', 'Joel','Devin','Jackson', 'James', 'Jillian', 'Joel']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jillian', 'Jimmy', 'Joel', ]},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

