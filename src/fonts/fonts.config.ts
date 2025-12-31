import localFont from "next/font/local";
import { Quicksand, Nunito, Shadows_Into_Light } from "next/font/google";

export const QuicksandFont = Quicksand({
    variable: "--font-Quicksand",
    // subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});
export const NunitoFont = Nunito({
    variable: "--font-Nunito",
    // subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export const Shadows_Into_LightFont = Shadows_Into_Light({
    variable: "--font-Shadows-Into-Light",
    // subsets: ["latin"],
    weight: ["400"],
});



export const TaylerSwiftFont = localFont({
    src: "./taylerSwift.otf",
    variable: "--font-tayler-Swift",
    weight: "300 400 500 600",
    display: "swap",
});



export const dottedFont = localFont({
    src: "./Array-Regular.otf",
    display: "swap",
    variable: "--dotted-font",
});