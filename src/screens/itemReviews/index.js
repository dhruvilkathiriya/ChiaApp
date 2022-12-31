import React, {useEffect} from 'react';
import {Header, UserItemContent, ProfileHeader, Loader} from '../../components';
import {style} from './styles';
import {View, FlatList, Text} from 'react-native';
import {getReviewText} from '../../helper/helperFunctions';
import {useDispatch, useSelector} from 'react-redux';
import {getProductRatings} from '../../actions/ratingAction';
import {useIsFocused} from '@react-navigation/native';
import _ from 'lodash';

const ItemReviews = ({route}) => {
  const productId = route?.params?.productId;

  const dispatch = useDispatch();

  const {productRatings, productRatingsLoading} = useSelector(
    state => state.rating,
  );

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(
        getProductRatings({
          productId: productId,
        }),
      );
    }
  }, [isFocused]);

  const renderItem = ({item}) => {
    return (
      <UserItemContent
        isTopRightTextVisible
        isBottomRightTextVisible
        bottomRightTexStyle={{textTransform: 'uppercase'}}
        headerLeftText={`${item?.user?.firstName} ${item?.user?.lastName}`}
        headerLeftTextStyle={{textTransform: 'uppercase'}}
        //headerRightText={`${moment(item?.createdAt).fromNow()}`}
        descriptionText={getReviewText(
          item.comment[_.random(item.comment.length - 1)],
        )}
        descriptionTextStyle={{textTransform: 'uppercase'}}
        profileImageUrl={item?.user?.picture}
      />
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <Loader visible={productRatingsLoading} />
      <ProfileHeader
        title={'Reviews'}
        titleStyle={style.orderHistoryTitleStyle}
        mainContainer={style.profileHeaderContainer}
      />
      {_.isEmpty(productRatings) ? (
        <View style={style.noReviewViewStyle}>
          <Text style={style.noReviewTextStyle}>
            Sorry reviews not available
          </Text>
        </View>
      ) : (
        <FlatList
          data={productRatings}
          renderItem={renderItem}
          scrollEnabled={true}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ItemReviews;
