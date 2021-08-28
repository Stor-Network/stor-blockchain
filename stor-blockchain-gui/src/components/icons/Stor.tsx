import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as StorIcon } from './images/stor.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={StorIcon} viewBox="0 0 150 58" {...props} />;
}
