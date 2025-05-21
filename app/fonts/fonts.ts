import localFont from 'next/font/local';

// Define the Copperplate font
export const copperplate = localFont({
  src: [
    {
      path: '../../app/fonts/OPTICopperplate.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../app/fonts/OPTICopperplate-Light.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-copperplate',
});
