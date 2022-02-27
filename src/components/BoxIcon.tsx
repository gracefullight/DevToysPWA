import type { DetailsHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// https://boxicons.com
const BOXICON_OPTIONS = {
  SIZE: ['xs', 'sm', 'md', 'lg'],
  DEGREE: [90, 180, 270],
  FILP: ['horizontal', 'vertical'],
  PULL: ['left', 'right'],
  BORDER: ['square', 'circle'],
  ANIMATION: [
    'spin',
    'spin-hover',
    'tada',
    'tada-hover',
    'flashing',
    'flashing-hover',
    'burst',
    'burst-hover',
    'fade-left',
    'fade-left-hover',
    'fade-right',
    'fade-right-hover',
    'fade-up',
    'fade-up-hover',
    'fade-down',
    'fade-down-hover',
  ],
  TYPE: ['regular', 'solid', 'logo'],
} as const;

export interface IconProps {
  name: string;
  size?: typeof BOXICON_OPTIONS.SIZE[number];
  rotate?: typeof BOXICON_OPTIONS.DEGREE[number];
  flip?: typeof BOXICON_OPTIONS.FILP[number];
  pull?: typeof BOXICON_OPTIONS.PULL[number];
  border?: typeof BOXICON_OPTIONS.BORDER[number];
  animation?: typeof BOXICON_OPTIONS.ANIMATION[number];
  type?: typeof BOXICON_OPTIONS.TYPE[number];
}

type NativeAttrs = Omit<DetailsHTMLAttributes<unknown>, keyof IconProps>;

export type BoxIconProps = IconProps & NativeAttrs;

const BoxIcon = (props: BoxIconProps) => {
  const {
    name,
    size,
    rotate,
    flip,
    pull,
    border,
    animation,
    type = 'regular',
    ...rest
  } = props;

  const typeAbbr = type === 'regular' ? '' : type.charAt(0);

  const className = clsx([
    'bx',
    `bx${typeAbbr}-${name}`,
    size && `bx-${size}`,
    rotate && `bx-rotate-${rotate}`,
    flip && `bx-flip-${flip}`,
    pull && `bx-pull-${pull}`,
    border && `bx-border${border === 'square' ? '' : '-circle'}`,
    animation && `bx-${animation}`,
  ]);

  return <i className={className} {...rest}></i>;
};

BoxIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(BOXICON_OPTIONS.SIZE),
  rotate: PropTypes.oneOf(BOXICON_OPTIONS.DEGREE),
  filp: PropTypes.oneOf(BOXICON_OPTIONS.FILP),
  border: PropTypes.oneOf(BOXICON_OPTIONS.BORDER),
  animation: PropTypes.oneOf(BOXICON_OPTIONS.ANIMATION),
  type: PropTypes.oneOf(BOXICON_OPTIONS.TYPE),
};

export default BoxIcon;
