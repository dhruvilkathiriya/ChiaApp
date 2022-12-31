import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import Month from './Month';
import {colors} from '../../../helper/colors';
import {fontFamily, fontSize} from '../../../helper/utils';
import {icons} from '../../../helper/iconsConstants';
import {hp, wp} from '../../../helper/constants';

export default class DateRange extends Component {
  constructor(props) {
    super(props);
    const defalutFormat =
      !props.mode || props.mode === 'single' ? 'ddd, MMM D' : 'MMM DD,YYYY';
    this.state = {
      focusedMonth: moment().startOf('month'),
      currentDate: props.currentDate || moment(),
      startDate: props.startDate || '',
      endDate: props.endDate || '',
      focus: props.focusedInput || 'startDate',
      clearStart: '',
      clearEnd: '',
      clearSingle: props.currentDate.format(defalutFormat) || '',
    };
  }

  previousMonth = () => {
    this.setState({
      focusedMonth: this.state.focusedMonth.add(-1, 'M'),
    });
  };

  nextMonth = () => {
    this.setState({
      focusedMonth: this.state.focusedMonth.add(1, 'M'),
    });
  };

  onDatesChange = event => {
    this.props.onDatesChange(event);
    const defalutFormat =
      !this.props.mode || this.props.mode === 'single'
        ? 'ddd, MMM D'
        : 'MMM DD,YYYY';
    const headFormat = this.props.headFormat || defalutFormat;
    const {startDate, endDate, focusedInput, currentDate} = event;
    if (currentDate) {
      this.setState({currentDate});
      this.setState({clearSingle: currentDate.format(headFormat)});
      return;
    }
    this.setState({...this.state, focus: focusedInput}, () => {
      this.setState({
        ...this.state,
        startDate,
        endDate,
        currentDate: startDate,
      });
      if (endDate) {
        this.setState({
          clearStart: startDate.format(headFormat),
          clearEnd: endDate.format(headFormat),
        });
      } else {
        this.setState({
          clearStart: startDate.format(headFormat),
          clearEnd: '',
        });
      }
    });
  };

  render() {
    return (
      <View style={[styles.calendar, this.props.containerStyle]}>
        <View style={styles.headActionContainer}>
          <TouchableOpacity
            hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
            onPress={this.previousMonth}>
            <Image
              source={icons.backArrow}
              style={styles.leftArrow}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.monthTitleText}>
            {this.state.focusedMonth.format('MMMM YYYY')}
          </Text>
          <TouchableOpacity
            hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
            onPress={this.nextMonth}>
            <Image
              source={icons.backArrow}
              style={styles.rightArrow}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <Month
          mode={this.props.mode}
          date={this.props.date}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          focusedInput={this.props.focusedInput}
          currentDate={this.state.currentDate}
          focusedMonth={this.state.focusedMonth}
          onDatesChange={this.onDatesChange}
          isDateBlocked={this.props.isDateBlocked}
          onDisableClicked={this.props.onDisableClicked}
          selectedBgColor={this.props.selectedBgColor}
          selectedTextColor={this.props.selectedTextColor}
          dateRange={this.props.dateRange}
          normalRange={this.props.normalRange}
        />
      </View>
    );
  }
}

DateRange.propTypes = {
  mode: PropTypes.oneOf(['range', 'single']),
  date: PropTypes.instanceOf(moment),
  startDate: PropTypes.instanceOf(moment),
  endDate: PropTypes.instanceOf(moment),
  focusedInput: PropTypes.oneOf(['startDate', 'endDate']),
  onDatesChange: PropTypes.func,
  isDateBlocked: PropTypes.func,
  onDisableClicked: PropTypes.func,
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  headActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
    backgroundColor: colors.backgroundColor,
  },
  monthTitleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(25),
    color: colors.primaryColor,
    fontFamily: fontFamily.bold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  leftArrow: {
    height: wp(4),
    width: wp(3),
    tintColor: colors.secondaryColor,
    marginLeft: wp(4),
  },
  rightArrow: {
    height: wp(4),
    width: wp(3),
    tintColor: colors.secondaryColor,
    marginRight: wp(4),
    transform: [{rotate: '180deg'}],
  },
});
