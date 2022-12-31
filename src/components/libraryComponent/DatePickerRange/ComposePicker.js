import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateRange from './DateRange';

class ComposePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      allowPointerEvents: true,
      showContent: this.props.value ? true : false,
      selected: '',
      startDate: this.props.startDate || null,
      endDate: this.props.endDate || null,
      date: new Date(),
      focus: this.props.startDate != null ? 'endDate' : 'startDate',
      currentDate: this.props.currentDate || moment(),
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.startDate !== this.props.startDate) {
      this.setState({startDate: nextProps.startDate});
    }
    if (nextProps.endDate !== this.props.endDate) {
      this.setState({endDate: nextProps.endDate});
    }
    if (nextProps.currentDate !== this.props.currentDate) {
      this.setState({currentDate: nextProps.currentDate});
    }
    if (nextProps.dateRange !== this.props.dateRange) {
      this.setState({startDate: null, endDate: null, currentDate: moment()});
      // const {startDate} = this.state;
      // this.setState({
      //   startDate,
      //   endDate: moment(startDate).add(nextProps.dateRange - 1, 'days'),
      //   currentDate: startDate,
      // });
      // this.props.onConfirm({
      //   startDate,
      //   endDate: moment(startDate).add(nextProps.dateRange - 1, 'days'),
      // });
    }
  }

  // static getDerivedStateFromProps(nextProps, state) {
  //   if (nextProps.startDate != null && state.startDate == null) {
  //     return {
  //       startDate: nextProps.startDate,
  //     };
  //   }
  //   if (nextProps.endDate != null && state.endDate == null) {
  //     return {
  //       endDate: nextProps.endDate,
  //     };
  //   }
  // }

  isDateBlocked = date => {
    const {unavailableDates} = this.props;
    if (unavailableDates && unavailableDates?.length) {
      const finalDateRanges = unavailableDates.filter(
        item => moment(item?.start).month() === moment(date).month(),
      );
      const isBetweenBlocked = finalDateRanges.filter(
        item =>
          moment(date).isBetween(moment(item?.start), moment(item?.end)) ||
          moment(date).isSame(moment(item?.start)) ||
          moment(date).isSame(moment(item?.end)) ||
          moment(date).isSame(moment(item?.start).subtract(1, 'days')) ||
          moment(date).isSame(moment(item?.end).add(1, 'days')),
      );
      if (isBetweenBlocked?.length > 0) {
        return true;
      }
    }
    if (this.props.blockBefore) {
      return date.isBefore(moment(), 'day');
    } else if (this.props.blockAfter) {
      return date.isAfter(moment(), 'day');
    }
    return false;
  };

  onDatesChange = event => {
    const {startDate, endDate, focusedInput, currentDate} = event;
    if (currentDate) {
      this.setState({currentDate});
      return;
    }
    this.setState({...this.state, focus: focusedInput}, () => {
      this.setState({
        ...this.state,
        startDate,
        endDate,
        currentDate: startDate,
      });
    });
    if (this.props.normalRange) {
      if (startDate && endDate) {
        this.props.onConfirm({startDate, endDate});
      }
    } else {
      this.props.onConfirm({startDate, endDate});
    }
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  onConfirm = () => {
    const returnFormat = this.props.returnFormat || 'YYYY/MM/DD';
    const outFormat = this.props.outFormat || 'LL';
    if (!this.props.mode || this.props.mode === 'single') {
      this.setState({
        showContent: true,
        selected: this.state.currentDate.format(outFormat),
      });
      this.setModalVisible(false);
      if (typeof this.props.onConfirm === 'function') {
        this.props.onConfirm({
          unFormattedCurrentDate: this.state.currentDate,
          currentDate: this.state.currentDate.format(returnFormat),
        });
      }
      return;
    }

    if (this.state.startDate && this.state.endDate) {
      const start = this.state.startDate.format(outFormat);
      const end = this.state.endDate.format(outFormat);
      this.setState({
        showContent: true,
        selected: `${start} ${this.props.dateSplitter} ${end}`,
      });
      this.setModalVisible(false);

      if (typeof this.props.onConfirm === 'function') {
        this.props.onConfirm({
          unFormattedStartDate: this.state.startDate,
          unFormattedEndDate: this.state.endDate,
          startDate: this.state.startDate.format(returnFormat),
          endDate: this.state.endDate.format(returnFormat),
        });
      }
    } else {
      alert('please select correct date');
    }
  };

  render() {
    return (
      <DateRange
        headFormat={this.props.headFormat}
        markText={this.props.markText}
        onDatesChange={this.onDatesChange}
        isDateBlocked={this.isDateBlocked}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        focusedInput={this.state.focus}
        selectedBgColor={this.props.selectedBgColor || undefined}
        selectedTextColor={this.props.selectedTextColor || undefined}
        mode={this.props.mode || 'single'}
        currentDate={this.state.currentDate}
        onClose={() => this.setModalVisible(false)}
        dateRange={this.props.dateRange}
        normalRange={this.props.normalRange}
        containerStyle={this.props.containerStyle}
      />
    );
  }
}

ComposePicker.propTypes = {
  dateSplitter: PropTypes.string,
};

ComposePicker.defaultProps = {
  dateSplitter: '->',
  dateRange: 2,
  returnFormat: 'MM/DD/YYYY',
  outFormat: 'MM/DD/YYYY',
  containerStyle: {},
};

export {ComposePicker};
