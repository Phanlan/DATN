import React, { } from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

export const NumberFormat = (props) => {

  const {value, style} = props;

  const {i18n} = useTranslation();

  const numberFormat = () =>
    new Intl.NumberFormat(i18n.language === "vi" ? "vi-VN" : "en-US", {}).format(value);

  return (
      <span style={style}>{value == null? '': numberFormat()}</span>
  );
}

NumberFormat.propTypes  = {
  value: PropTypes.number
};

NumberFormat.defaultProps = {
  value: 0
};

