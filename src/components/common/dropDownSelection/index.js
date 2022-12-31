import React, {useRef} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import {style} from './styles';

const DropDownSelection = ({
  options,
  defaultValue,
  renderButtonText,
  renderRow,
  dropDownIcon,
  dropdownTitleTextStyle,
}) => {
  const modal = useRef(null);

  return (
    <TouchableOpacity
      style={style.mainContainer}
      onPress={() => {
        modal.current.show();
      }}>
      <ModalDropdown
        ref={modal}
        options={options}
        defaultValue={defaultValue}
        style={style.dropdownTitleStyle}
        textStyle={[style.dropdownTitleTextStyle, dropdownTitleTextStyle]}
        dropdownStyle={style.dropdownContainerStyle}
        renderButtonText={renderButtonText}
        renderRow={renderRow}
      />
      <Image
        source={dropDownIcon}
        style={style.downArrowStyle}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

export default DropDownSelection;
