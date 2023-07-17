import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addStoreInfo } from 'store/reduxSlice/postsInfo';
import api from 'services';
import { PostModel } from 'models';
import PostsCard from 'screens/posts/PostsCard';
import { Input } from '@rneui/themed';
import Snackbar from 'react-native-snackbar';
import { PopUp } from 'components';
import { Colors } from 'theme';

type PostsProps = {};

const Posts: React.FC<PostsProps> = ({ }) => {
  const posts = useSelector((state: any) => state.storePosts?.posts);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [postItem, setPostItem] = useState<any>({})
  const [postsData,setPostData]=useState<Array<PostModel>>([])
  const [refreshing,setRefreshing] = useState(false)
  const [indexPost, setIndexPost] = useState(-1);
  const checkItem = JSON.stringify(postItem) === "{}"
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setPostData(posts)
  }, [posts])

  //apis...
  const getPosts = async () => {
    setRefreshing(true)
    const { data, status } = await api.posts.getPosts();
    dispatch(addStoreInfo(data));
    setRefreshing(false)

  };

  //functions

  const onAddPostPress = () => {
    onModalToggle()
    setId("")
    setTitle("")
    setBody("")
    setUserId("")
    setPostItem({})
  };

  const onModalToggle = () => {
    setIsVisible((val: any) => !val);
  };

  const onAddItemPress = () => {
    if (id == "") {
      Snackbar.show({
        text: 'Please enter id',
        duration: Snackbar.LENGTH_SHORT,
      });

      return;
    }
    if (userId == "") {
      Snackbar.show({
        text: 'Please add User Id',
        duration: Snackbar.LENGTH_SHORT,
      });

      return;
    }
    if (title == "") {
      Snackbar.show({
        text: 'Please add title',
        duration: Snackbar.LENGTH_SHORT,
      });

      return;
    }
    if (body == "") {
      Snackbar.show({
        text: 'Please add body',
        duration: Snackbar.LENGTH_SHORT,
      });

      return;
    }
    setRefreshing(true)

    const data = [...posts, {
      id: Number(id),
      userId: Number(userId),
      title: title,
      body: body
    }]
    dispatch(addStoreInfo(data))
    Snackbar.show({
      text: 'Post added successfully',
      duration: Snackbar.LENGTH_SHORT,
    });
    onModalToggle()
    setRefreshing(false)

  }
  // console.log(posts.length, "on Add presss")

  const onSubmitPress = () => {
    setRefreshing(true)

    let newArray = [...posts]
    newArray[indexPost] = {
      id: Number(id),
      userId: Number(userId),
      title: title,
      body: body
    }
    dispatch(addStoreInfo(newArray))

    Snackbar.show({
      text: 'Post updated successfully',
      duration: Snackbar.LENGTH_SHORT,
    });
    onModalToggle()
    setRefreshing(false)

  }
  const renderPosts = ({ item, index }: { item: PostModel; index: number }) => {
    const onEditPress = (itemData: PostModel, indexData: number) => {
      onModalToggle()
      setId(itemData?.id?.toString())
      setTitle(itemData.title)
      setBody(itemData.body)
      setUserId(itemData.userId?.toString())
      setPostItem(itemData)
      setIndexPost(indexData)
    };

    const onDeletePress = (indexData: number) => {
      setRefreshing(true)
      const filterData = posts.filter((item: PostModel, index: number) => index !== indexData);
      dispatch(addStoreInfo(filterData));
      setRefreshing(false)

    };
    return (
      <PostsCard
        item={item}
        index={index}
        onEdit={onEditPress}
        onDelete={onDeletePress}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={postsData}
        renderItem={renderPosts}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getPosts} />
        }
      />
      <View style={{padding:10}}>
      <Button  title="Add Post" onPress={onAddPostPress} />
      </View>
      <PopUp
        onModalToggle={onModalToggle}
        visible={isVisible}
        header={checkItem ? "Add Post" : 'Edit Post'}
      >
        <View style={{ padding: 20 }}>
          <Input
            placeholder="Id"
            value={id}
            onChangeText={setId}
            keyboardType='numeric'
          />
          <Input
            placeholder="User ID"
            value={userId}
            onChangeText={setUserId}
            keyboardType='numeric'

          />
          <Input
            placeholder="Title"
            value={title}
            onChangeText={setTitle}

          />
          <Input
            placeholder="Body"
            value={body}
            onChangeText={setBody}
          />
          <Button  title={checkItem ? "Submit Post" : "Submit"} onPress={checkItem ? onAddItemPress : onSubmitPress} />
        </View>
      </PopUp>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
});
