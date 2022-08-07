import React, { } from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import Moment from 'react-moment';

export const DateFormat = (props) => {

  const {value, onlyDate} = props;

  const {i18n} = useTranslation();

  const format = () => {
    let format = 'DD/MM/YYYY HH:mm';
    format = i18n.language === "vi"? 'DD/MM/YYYY HH:mm': 'MM/DD/YYYY HH:mm';
    if(onlyDate){
      format = i18n.language === "vi"? 'DD/MM/YYYY': 'MM/DD/YYYY';
    }
    return format;
  }
    new Intl.NumberFormat(i18n.language === "vi" ? "vi-VN" : "en-US", {}).format(value);

  return (
      <span>{value != null && <Moment format={format()}>{value}</Moment>}</span>
  );
}

DateFormat.propTypes  = {
  value: PropTypes.number,
  onlyDate: PropTypes.bool
};

DateFormat.defaultProps = {
  onlyDate: false
};

