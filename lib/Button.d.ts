import { CSSProperties, FC, MouseEvent, ReactElement } from 'react';
export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    endIcon?: ReactElement;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    startIcon?: ReactElement;
    style?: CSSProperties;
    tabIndex?: number;
    customMenuTitle?: string;
    customMenuAction?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: FC<ButtonProps>;
