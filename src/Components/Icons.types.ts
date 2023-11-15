type Vertical = 'top' | 'center' | 'bottom';
type Hirozental = 'right' | 'center' | 'left';
type PositionType =
    | Exclude<`${Vertical}-${Hirozental}`, 'center-center'>
    | 'center';

type PngIconType = {
    position: PositionType;
    png: boolean;
    svg?: never;
};

type SvgIconType = {
    position: PositionType;
    png: never;
    svg?: boolean;
};

export type IconType = PngIconType | SvgIconType;
