import React from 'react';

import TagInput from '../../../components/libraryComponent/tagInput/index';
import {style} from './styles';

const TagInputSection = ({updateState, tags, label}) => {
  return (
    <TagInput
      updateState={updateState}
      tags={tags}
      placeholder="Tags..."
      containerStyle={style.mainContainer}
      inputContainerStyle={style.inputContainerStyle}
      inputStyle={style.inputStyle}
      tagStyle={style.tag}
      tagTextStyle={style.tagText}
      keysForTag={' '}
      label={label}
      labelStyle={style.tagInputLabelStyle}
    />
  );
};

export default TagInputSection;
