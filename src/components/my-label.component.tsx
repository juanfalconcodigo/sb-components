import './my-label.component.css';
type SizeType =
    | 'normal'
    | 'h1'
    | 'h2'
    | 'h3'

type ColorsType =
    | 'primary'
    | 'secondary'
    | 'tertiary'

interface MyLabelComponentProps {
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
   * What background color to use
   */
    fontColor?: string;
}

/**
 * Primary UI component for label interaction
 */
export const MyLabelComponent = ({ label = "Not found Label", size = "normal", allCaps = false, color = "primary", fontColor }: MyLabelComponentProps) => {
    return (
        <span className={`label ${size} text-${color} ${allCaps ? 'text-capitalize' : ''}`} style={{ backgroundColor: fontColor }}>{label}</span>
    );
}
