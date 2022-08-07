import React, { } from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

export const CurrencyFormat = (props) => {

  const {value, currency, style} = props;

  const {i18n} = useTranslation();

  const numberFormat = () =>
    new Intl.NumberFormat(i18n.language === "vi" ? "vi-VN" : "en-US", {
      style: "currency",
      currency: currency,
    }).format(value);

  return (
    <span style={style}>{value == null? '': numberFormat()}</span>
  );
}

CurrencyFormat.propTypes  = {
  value: PropTypes.number,
  currency: PropTypes.string
};

CurrencyFormat.defaultProps = {
  value: 0,
  currency: 'VND'
};

