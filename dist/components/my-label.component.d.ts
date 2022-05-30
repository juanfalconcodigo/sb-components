/// <reference types="react" />
import './my-label.component.css';
declare type SizeType = 'normal' | 'h1' | 'h2' | 'h3';
declare type ColorsType = 'primary' | 'secondary' | 'tertiary';
export interface MyLabelComponentProps {
    /**
     *Content Label
     */
    label: string;
    /**
     *Size content Label
     */
    size: SizeType;
    /**
     *Color text
     */
    color?: ColorsType;
    /**
     *Capitalize style text
     */
    allCaps?: boolean;
    /**
  * What color to use
  */
    fontColor?: string;
    /**
  * What background color to use
  */
    backgroundColor?: string;
}
/**
 * Primary UI component for label interaction
 */
export declare const MyLabelComponent: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelComponentProps) => JSX.Element;
export {};
