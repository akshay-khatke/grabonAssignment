
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView
} from 'react-native';
import { Colors } from 'theme';



type ModalCompProps = {
  visible: boolean;
  onModalToggle: () => void;
  children: any;
  header: string;
};

const PopUp = ({
  visible,
  onModalToggle,
  children,
  header,
}: ModalCompProps) => {
  return (
    <Modal
      onRequestClose={onModalToggle}
      statusBarTranslucent
      transparent
      visible={visible}>
      <KeyboardAvoidingView behavior='height' style={styles.modalView}>
        <TouchableOpacity
          onPress={onModalToggle}
          style={{ flex: 1 }}></TouchableOpacity>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onModalToggle} style={styles.headerView}>
            <Text style={styles.header}>{header}</Text>
          </TouchableOpacity>
          {children}
        </View>
      </KeyboardAvoidingView>
    </Modal >
  );
};

const styles = StyleSheet.create({
  modalView: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.primaryColor,
    overflow: 'hidden',
    maxHeight: '90%',
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  mainHeader: {
    fontSize: 18,
  },
  subHeader: {
    fontSize: 12,
    marginVertical: 2,
  },
  header: {
    fontSize: 16,
    paddingVertical: 5,
    fontWeight: "bold"
  },
});

export default React.memo(PopUp);
