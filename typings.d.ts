declare module 'react-native-ico-technology-logos' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'hp' |
      'acer' |
      'samsung' |
      't-mobile' |
      'oppo' |
      'asus' |
      'one-plus' |
      'gopro' |
      'casio' |
      'nokia' |
      'zeiss' |
      'huawei' |
      'nikon' |
      'beats' |
      'jvc' |
      'gigabyte' |
      'seagate' |
      'logitech' |
      'nvidia' |
      'cisco' |
      'leica' |
      'brother' |
      'ibm' |
      'dell' |
      'htc' |
      'att' |
      'compaq' |
      'lg' |
      'sandisk' |
      'xiaomi' |
      'canon' |
      'xerox' |
      'lenovo' |
      'zte' |
      'vaio' |
      'sharp' |
      'sony' |
      'packard-bell' |
      'vivo' |
      'android' |
      'amd' |
      'hitachi' |
      'motorola' |
      'epson' |
      'verizon' |
      'apple' |
      'philips' |
      'windows' |
      'sap' |
      'intel';

    type iconColors = '#004F9C' |
      '#0964AF' |
      '#4987CE' |
      '#579ADD' |
      '#646566' |
      '#66AF3F' |
      '#72BE4F' |
      '#777777' |
      '#B0B0B5' |
      '#BDDBF4' |
      '#C2C2C4' |
      '#D6D6D8' |
      '#D84848' |
      '#D9ECF9' |
      '#E54E8C' |
      '#E85454' |
      '#EA6D11' |
      '#EA9D13' |
      '#EDCF8E' |
      '#F21938' |
      '#F2F2F2' |
      '#F46095' |
      '#F97E19' |
      '#FCAF17' |
      '#FFE7AB' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
