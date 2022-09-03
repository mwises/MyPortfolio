import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme ({
    colors: {
        blackX: {
            50: "#050607",
            100: "#050607"

        }
    },

    fonts: {
        heading: "Roboto",
        body: "Roboto",
    },

    styles: {
        global: {
            body: {
                bg: "#06040c"
            }
        }
    }
}) 