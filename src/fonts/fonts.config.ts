import localFont from "next/font/local";
import { Quicksand, Nunito } from "next/font/google";

export const QuicksandFont = Quicksand({
    variable: "--font-Quicksand",
    // subsets: ["latin"],
    weight : "300"
});
export const NunitoFont = Nunito({
    variable: "--font-Nunito",
    // subsets: ["latin"],
    weight : "300"
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