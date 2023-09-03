declare module 'react-native-ico-technology-logos' {
    import { ReactNode } from 'react';

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

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

