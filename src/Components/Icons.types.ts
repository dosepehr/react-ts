type PngIconType = {
    png: boolean;
    svg?: never;
};

type SvgIconType = {
    png: never;
    svg?: boolean;
};

export type IconType = PngIconType | SvgIconType;
