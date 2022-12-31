import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-range';
import Week from './Week';
import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';
import {fontFamily} from '../../../helper/utils';

export default class Month extends Component {
  render() {
    const {
      mode,
      date,
      startDate,
      endDate,
      focusedInput,
      currentDate,
      focusedMonth,
      onDatesChange,
      isDateBlocked,
      onDisableClicked,
      selectedBgColor,
      selectedTextColor,
      dateRange,
      normalRange,
    } = this.props;
    const dayNames = [];
    const weeks = [];
    const startOfMonth = focusedMonth
      .clone()
      .startOf('month')
      .startOf('isoweek');
    const endOfMonth = focusedMonth.clone().endOf('month');

    const weekRange = moment.range(
      currentDate.clone().startOf('isoweek'),
      currentDate.clone().endOf('isoweek'),
    );

    weekRange.by('days', day => {
      dayNames.push(
        <Text key={day.date()} style={styles.dayName}>
          {day.format('dd')}
        </Text>,
      );
    });

    moment.range(startOfMonth, endOfMonth).by('weeks', week => {
      weeks.push(
        <Week
          key={week}
          mode={mode}
          date={date}
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          currentDate={currentDate}
          focusedMonth={focusedMonth}
          startOfWeek={week}
          onDatesChange={onDatesChange}
          isDateBlocked={isDateBlocked}
          onDisableClicked={onDisableClicked}
          selectedBgColor={selectedBgColor}
          selectedTextColor={selectedTextColor}
          dateRange={dateRange}
          normalRange={normalRange}
        />,
      );
    });

    return (
      <View style={styles.month}>
        <View style={styles.week}>{dayNames}</View>
        {weeks}
      </View>
    );
  }
}

Month.propTypes = {
  mode: PropTypes.oneOf(['range', 'single']),
  date: PropTypes.instanceOf(moment),
  startDate: PropTypes.instanceOf(moment),
  endDate: PropTypes.instanceOf(moment),
  focusedInput: PropTypes.oneOf(['startDate', 'endDate']),
  currentDate: PropTypes.instanceOf(moment),
  focusedMonth: PropTypes.instanceOf(moment),
  onDatesChange: PropTypes.func,
  isDateBlocked: PropTypes.func,
  onDisableClicked: PropTypes.func,
};

const styles = StyleSheet.create({
  week: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundColor,
    paddingTop: hp(0.5),
    paddingBottom: hp(1.75),
    marginBottom: hp(1),
  },
  dayName: {
    flexGrow: 1,
    flexBasis: 1,
    textAlign: 'center',
    color: colors.primaryColor,
    fontFamily: fontFamily.regular,
  },
});
