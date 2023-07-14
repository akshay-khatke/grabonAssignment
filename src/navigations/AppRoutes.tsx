import React from 'react'
import Posts from "screens/posts/Posts";
import { StyleSheet, View } from 'react-native';
type IProps = {

}

const AppRoutes: React.FC<IProps> = () => {

    return (
        <View style={styles.container}>
            <Posts />
        </View>

    );
}
export default AppRoutes;
const styles = StyleSheet.create({
 container:{
    flex:1
 }
});

