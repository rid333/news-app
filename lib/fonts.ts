import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local"

export const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const PoynterTextBold = localFont({
    src: '../public/fonts/Poynter-Font/PoynterText-Bold.ttf',
    display: 'swap'
})

export const PoynterTextRegular = localFont({
    src: '../public/fonts/Poynter-Font/PoynterText-Regular.ttf',
    display: 'swap',
});

export const FuturaRegular = localFont({
    src: '../public/fonts/futura/Futura Book font.ttf',
    display: 'swap',
})


export const FuturaBold = localFont({
    src: '../public/fonts/futura/Futura Heavy font.ttf',
    display: 'swap',
})

export const AvenirRegular = localFont({
    src: '../public/fonts/avenir-font/AvenirLTStd-Roman.otf',
    display: 'swap',
})
