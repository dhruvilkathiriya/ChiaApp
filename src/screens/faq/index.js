import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Header,
  Loader,
  ProfileHeader,
  SectionHeaderWithAddIcon,
} from '../../components';
import {getFaqs} from '../../actions/faqsAction';
import {strings} from '../../helper/strings';
import {style} from './styles';

const Faqs = () => {
  const {faqs, faqsLoading} = useSelector(state => state.faqsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaqs());
  }, []);

  const renderItem = ({item}) => {
    return (
      <SectionHeaderWithAddIcon
        isContentAvailable
        headerLeftTitle={`${item?.title}`}
        contentData={`${item?.content}`}
      />
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <KeyboardAwareScrollView bounces={false} nestedScrollEnabled>
        <ProfileHeader
          title={strings.faq}
          titleStyle={style.faqsTitleStyle}
          closeIconContainer={style.closeIconContainer}
        />
        <FlatList
          data={faqs}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={item => item.id}
        />
      </KeyboardAwareScrollView>
      <Loader visible={faqsLoading} />
    </View>
  );
};

export default Faqs;
