import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const ViewImageModal = ({modalVisible, onClose, imageUrl}) => {
  return (
    <Modal
      visible={modalVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={style.mainModalStyle}>
      <View style={style.mainContainerStyle}>
        <TouchableOpacity style={style.closeIconContainer} onPress={onClose}>
          <Image
            source={icons.close}
            resizeMode={'contain'}
            style={style.closeIcon}
          />
        </TouchableOpacity>
        <Image
          source={{uri: imageUrl || ''}}
          resizeMode={'contain'}
          style={style.imageView}
        />
      </View>
    </Modal>
  );
};

export default ViewImageModal;
