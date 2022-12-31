import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-range';

import {dates} from './dates';
import {fontFamily, fontSize} from '../../../helper/utils';
import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';

export default class Week extends Component {
  state = {isRange: true};

  render() {
    const {
      mode,
      date,
      startDate,
      endDate,
      focusedInput,
      startOfWeek,
      onDatesChange,
      isDateBlocked,
      onDisableClicked,
      currentDate,
      dateRange,
      normalRange,
    } = this.props;
    let days = [];

    const endOfWeek = startOfWeek.clone().endOf('isoweek');

    moment.range(startOfWeek, endOfWeek).by('days', day => {
      const onPress = () => {
        if (dateRange === 0) {
          Alert.alert('Please select the rental period!', '');
        } else {
          if (
            isDateBlocked(day) ||
            isDateBlocked(moment(day).add(dateRange - 1, 'days'))
          ) {
            onDisableClicked && onDisableClicked(day);
          } else if (mode === 'range') {
            let isPeriodBlocked = false;
            const start = focusedInput === 'startDate' ? day : startDate;
            const end = focusedInput === 'endDate' ? day : endDate;

            if (start && end) {
              this.setState({isRange: true});
              moment.range(start, end).by('days', dayPeriod => {
                if (isDateBlocked(dayPeriod)) isPeriodBlocked = true;
              });
            } else {
              this.setState({isRange: false});
            }
            if (normalRange) {
              onDatesChange(
                isPeriodBlocked
                  ? dates(end, null, 'startDate')
                  : dates(start, end, focusedInput),
              );
            } else {
              onDatesChange({
                startDate: day,
                endDate: moment(day).add(dateRange - 1, 'days'),
                focusedInput: '',
              });
            }
          } else if (mode === 'single') {
            onDatesChange({
              startDate: day,
              endDate: moment(day).add(dateRange - 1, 'days'),
              focusedInput: '',
            });
          } else {
            onDatesChange({date: day});
          }
        }
      };

      const isDateRangeSelected = () => {
        if (mode === 'range') {
          if (startDate && endDate) {
            return (
              day.isSameOrAfter(startDate, 'day') &&
              day.isSameOrBefore(endDate, 'day')
            );
          }
          return (
            (startDate && day.isSame(startDate, 'day')) ||
            (endDate && day.isSame(endDate, 'day'))
          );
        }
        return date && day.isSame(date, 'day');
      };

      const isDateSelected = () => {
        if (mode === 'single') {
          return currentDate && day.isSame(currentDate, 'day');
        }
        return date && day.isSame(date, 'day');
      };

      const isDateStart = () => {
        return startDate && day.isSame(startDate, 'day');
      };

      const isDateEnd = () => {
        return endDate && day.isSame(endDate, 'day');
      };

      const isBlocked = isDateBlocked(day);
      const isRangeSelected = isDateRangeSelected();
      const isStart = isDateStart();
      const isEnd = isDateEnd();
      const isSelected = isDateSelected();

      const style = [
        styles.day,
        isBlocked && styles.dayBlocked,
        this.state.isRange && isRangeSelected && styles.daySelected,
        isStart && styles.dayStarted,
        isEnd && styles.dayEnded,
      ];

      const styleText = [
        styles.dayText,
        isBlocked && styles.dayDisabledText,
        (isRangeSelected || isSelected) && styles.daySelectedText,
      ];

      days.push(
        <TouchableOpacity
          key={day.date()}
          style={style}
          onPress={onPress}
          disabled={isBlocked && !onDisableClicked}>
          <View style={styles.borderContainer}>
            <Text style={styleText}>{day.date()}</Text>
          </View>
        </TouchableOpacity>,
      );
    });

    return <View style={styles.week}>{days}</View>;
  }
}

Week.propTypes = {
  mode: PropTypes.oneOf(['range', 'single']),
  date: PropTypes.instanceOf(moment),
  startDate: PropTypes.instanceOf(moment),
  endDate: PropTypes.instanceOf(moment),
  focusedInput: PropTypes.oneOf(['startDate', 'endDate']),
  startOfWeek: PropTypes.instanceOf(moment),
  onDatesChange: PropTypes.func,
  isDateBlocked: PropTypes.func,
  onDisableClicked: PropTypes.func,
};

const styles = StyleSheet.create({
  week: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  day: {
    flexGrow: 1,
    alignItems: 'center',
  },
  dayText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(22),
    color: colors.secondaryColor,
    fontFamily: fontFamily.light,
  },
  dayBlocked: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  daySelected: {},
  dayDisabledText: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.light,
    color: colors.placeholderText,
  },
  daySelectedText: {
    color: colors.goldColor,
    fontFamily: fontFamily.bold,
  },
  dayStarted: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  dayEnded: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  borderContainer: {
    width: wp(12.25),
    height: wp(12.25),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
