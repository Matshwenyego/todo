import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 4, 
        height: 50, 
        borderWidth: 1,
        flexDirection: 'row',
        marginTop: '2%', 
        marginBottom: '1%', 
        width: '92%', 
        alignSelf: 'center',
    },
    checkButton: {
        flex: 0.2, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    listName: {
        flex: 0.6, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    deleteButton: {
        flex: 0.2, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
});

export {styles};