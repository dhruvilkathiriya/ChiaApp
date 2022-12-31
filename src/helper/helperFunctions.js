export const validateEmail = text => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(text);
};

export const validatePassword = text => {
  let errorString = [];
  if (text.length < 8) {
    errorString.push('Your password must be at least 8 characters');
  }
  if (
    text.search(/[a-z]/) < 0 ||
    text.search(/[A-Z]/) < 0 ||
    text.search(/[0-9]/) < 0 ||
    text.search(/[!@#$%^&*]/) < 0
  ) {
    errorString.push(
      `Your password must contain at least${
        text.search(/[a-z]/) < 0 ? ' one letter' : ''
      }${text.search(/[A-Z]/) < 0 ? ' one capital letter' : ''}${
        text.search(/[0-9]/) < 0 ? ' one digit' : ''
      }${text.search(/[!@#$%^&*]/) < 0 ? ' one special character' : ''}.`,
    );
  }
  return errorString.join('\n');
};

export const getReviewText = key => {
  switch (key) {
    case 'arrived_described':
      return 'Item Arrived as Described';
    case 'friendly':
      return 'Friendly';
    case 'communicative':
      return 'Communicative';
    case 'fast_shipping':
      return 'Fast Shipping.';
    case 'arrived_on_time':
      return 'Arrived on Time.';
    case 'returned_described':
      return 'Item returned as Described';
    case 'returned_on_time':
      return 'Item returned on Time';
    case 'reliable':
      return 'Reliable';
    default:
      return key;
  }
};

export const getActiveBadgesList = user => {
  if (user) {
    let userTagsData = [];
    if (user?.trusted) {
      userTagsData.push('Trusted');
    }
    if (user?.speedyShipper) {
      userTagsData.push('Speedy Shipper');
    }
    if (user?.quickResponder) {
      userTagsData.push('Quick Responder');
    }
    if (user?.nationalShipping) {
      userTagsData.push('National Shipping');
    }
    if (user?.offersAccepted) {
      userTagsData.push('Offers Accepted');
    }
    if (user?.showBadge) {
      if (user?.emailVerified) {
        userTagsData.push('Email Verified');
      }
      if (user?.paymentVerified) {
        userTagsData.push('Payment Verified');
      }
      if (user?.phoneVerified) {
        userTagsData.push('Phone Verified');
      }
    }
    return userTagsData;
  } else {
    return [];
  }
};
