const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Stor {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const stor_formatter = (value, unit) => new Stor(value, unit);

stor_formatter.convert = convert;
stor_formatter.setDisplay = units.setDisplay;
stor_formatter.setUnit = units.setUnit;
stor_formatter.getUnit = units.getUnit;
stor_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const storoshi_to_stor = (storoshi) => {
  return stor_formatter(Number.parseInt(storoshi), 'storoshi').to('stor').value();
};

export const stor_to_storoshi = (stor) => {
  return stor_formatter(Number.parseFloat(Number(stor)), 'stor')
    .to('storoshi')
    .value();
};

export const storoshi_to_stor_string = (storoshi) => {
  return stor_formatter(Number(storoshi), 'storoshi').to('stor').toString();
};

export const storoshi_to_colouredcoin = (storoshi) => {
  return stor_formatter(Number.parseInt(storoshi), 'storoshi')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_storoshi = (colouredcoin) => {
  return stor_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('storoshi')
    .value();
};

export const storoshi_to_colouredcoin_string = (storoshi) => {
  return stor_formatter(Number(storoshi), 'storoshi').to('colouredcoin').toString();
};
