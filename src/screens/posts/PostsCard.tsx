import { Text, TouchableOpacity, View } from 'react-native';
import { PostModel } from 'models';
import { Colors } from 'theme';
import { Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';

type PostCardProps = {
  item: PostModel;
  index: number;
  onEdit: (item: PostModel, index: number) => void,
  onDelete: (index: number) => void
};
const PostsCard: React.FC<PostCardProps> = ({ item, index, onEdit, onDelete }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Text style={{ flex: 1 }}>{item.userId}</Text>
        <Icon
          style={{ marginHorizontal: 10 }}
          color={Colors.secondaryColor}
          onPress={() => onEdit(item, index)}
          size={24}
          name="account-edit"
          type="material-community"></Icon>
        <Icon
          style={{ marginHorizontal: 10 }}
          color={Colors.secondaryColor}
          onPress={() => onDelete(index)}
          size={24}
          name="delete"
          type="material-community"></Icon>
      </View>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );
};

export default PostsCard

const styles = StyleSheet.create({
  cardContainer: { elevation: 2, padding: 20, margin: 10, borderRadius: 10, backgroundColor: Colors.primaryColor },
  header:{ flex: 1, flexDirection: "row" }
})