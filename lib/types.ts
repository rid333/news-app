import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface NewsCardType {
    id?: number,
    title?: string,
    time_read?: number,
    description?: string,
    img?: string
};
