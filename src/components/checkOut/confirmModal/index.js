import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {style} from './style';

const ConfirmModal = ({
  modalVisible,
  onClose,
  title,
  button1,
  button2,
  onButton1Press,
  onButton2Press,
  onBackDropPress,
}) => {
  return (
    <Modal
      visible={modalVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onBackDropPress}
      style={style.mainModalStyle}>
      <View style={style.mainContainerStyle}>
        <View style={style.headerViewStyle}>
          <Text style={style.headerTextStyle}>{title}</Text>
        </View>
        <View style={style.btnMainViewStyle}>
          <TouchableOpacity
            onPress={onButton1Press}
            style={style.firstBtnViewStyle}>
            <Text style={style.btnTextStyle}>{button1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onButton2Press}
            style={style.secondBtnViewStyle}>
            <Text style={style.btnTextStyle}>{button2}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ConfirmModal;
