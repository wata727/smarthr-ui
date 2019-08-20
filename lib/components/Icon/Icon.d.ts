import * as React from 'react'
export interface IconProps {
  color?: string
  size?: number
}
export interface Props extends IconProps {
  name: keyof typeof iconMap
}
declare const iconMap: {
  check: (props: IconProps) => JSX.Element
  'check-circle': (props: IconProps) => JSX.Element
  cross: (props: IconProps) => JSX.Element
  'exclamation-triangle': (props: IconProps) => JSX.Element
  'fa-address-book': import('react-icons/lib/cjs').IconType
  'fa-address-card': import('react-icons/lib/cjs').IconType
  'fa-angle-double-down': import('react-icons/lib/cjs').IconType
  'fa-angle-down': import('react-icons/lib/cjs').IconType
  'fa-arrow-circle-down': import('react-icons/lib/cjs').IconType
  'fa-arrow-down': import('react-icons/lib/cjs').IconType
  'fa-birthday-cake': import('react-icons/lib/cjs').IconType
  'fa-building': import('react-icons/lib/cjs').IconType
  'fa-calendar-alt': import('react-icons/lib/cjs').IconType
  'fa-caret-down': import('react-icons/lib/cjs').IconType
  'fa-chart-area': import('react-icons/lib/cjs').IconType
  'fa-chart-bar': import('react-icons/lib/cjs').IconType
  'fa-chart-line': import('react-icons/lib/cjs').IconType
  'fa-chart-pie': import('react-icons/lib/cjs').IconType
  'fa-cog': import('react-icons/lib/cjs').IconType
  'fa-databas': import('react-icons/lib/cjs').IconType
  'fa-ellipsis-h': import('react-icons/lib/cjs').IconType
  'fa-envelope': import('react-icons/lib/cjs').IconType
  'fa-file': import('react-icons/lib/cjs').IconType
  'fa-file-alt': import('react-icons/lib/cjs').IconType
  'fa-file-archive': import('react-icons/lib/cjs').IconType
  'fa-file-download': import('react-icons/lib/cjs').IconType
  'fa-file-export': import('react-icons/lib/cjs').IconType
  'fa-file-import': import('react-icons/lib/cjs').IconType
  'fa-file-upload': import('react-icons/lib/cjs').IconType
  'fa-filter': import('react-icons/lib/cjs').IconType
  'fa-font': import('react-icons/lib/cjs').IconType
  'fa-grip-vertical': import('react-icons/lib/cjs').IconType
  'fa-lock': import('react-icons/lib/cjs').IconType
  'fa-lock-open': import('react-icons/lib/cjs').IconType
  'fa-pencil-alt': import('react-icons/lib/cjs').IconType
  'fa-plus': import('react-icons/lib/cjs').IconType
  'fa-plus-circle': import('react-icons/lib/cjs').IconType
  'fa-question-circle': import('react-icons/lib/cjs').IconType
  'fa-reg-calendar-check': import('react-icons/lib/cjs').IconType
  'fa-reg-chart-bar': import('react-icons/lib/cjs').IconType
  'fa-reg-image': import('react-icons/lib/cjs').IconType
  'fa-search': import('react-icons/lib/cjs').IconType
  'fa-sliders-h': import('react-icons/lib/cjs').IconType
  'fa-sort': import('react-icons/lib/cjs').IconType
  'fa-sync-alt': import('react-icons/lib/cjs').IconType
  'fa-table': import('react-icons/lib/cjs').IconType
  'fa-th-list': import('react-icons/lib/cjs').IconType
  'fa-user-alt': import('react-icons/lib/cjs').IconType
  'fa-user-circle': import('react-icons/lib/cjs').IconType
  'fa-users': import('react-icons/lib/cjs').IconType
}
export declare const Icon: React.FC<Props>
export {}
