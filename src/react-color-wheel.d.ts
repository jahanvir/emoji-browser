declare module "react-color-wheel" {
    import * as React from "react";
  
    export interface ColorWheelProps {
      color: string;
      colors: string[];
      onChange: (color: string) => void;
      width?: number;
      height?: number;
      enableKeyboard?: boolean;
      enableWheel?: boolean;
    }
  
    export class ColorWheel extends React.Component<ColorWheelProps> {}
  }
  