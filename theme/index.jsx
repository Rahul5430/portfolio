import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};

export const colors = {
    primary: {
        light: "#F7F8FA",
        dark: "#252934",
    },
    secondary: {
        light: "#1ca7d0",
        dark: "#90cdf4",
    },
    tertiary: {
        light: "#736CED",
        dark: "#0056b3",
    },
    subtle: {
        light: "gray.400",
        dark: "#FFFFFF",
    },
    bg: {
        light: "",
        dark: "#343a40",
    }
};

export default extendTheme({
    config,
    colors
});