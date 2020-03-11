module.exports = {
    theme: {
        extend: {},
        colors: {
            // done
            white: "#FFFFFF",
            rouge: "#A71A39",
            gold: "#988A62",
            black: "#1D1D1B",
            "primary-gray": "#666666",
            "queen-elizabeth": "#002855",
            "queen-mary-2": "#782F40",
            "queen-victoria": "#582C83",
            red: "#DA291C",
            "secondary-grey": "#818487",
            "light-grey": "#CCCCCC",
            "lite-gold": "#ECEBE7",
            "light-gold": "#F4F3EF"
        },
        screens: {
            // done
            sm: "480px",
            md: "768px",
            lg: "1025px",
            xl: "1281px"
        },
        fontFamily: {
            // done
            "sang-light": '"Sang-bleu-sans-light"',
            "sang-regular": '"Sang Bleu Sans Regular"',
            "akkurat-regular": '"Akkurat-regular"',
            "akkurat-bold": '"Akkurat Std Bold"'
        },
        fontSize: { // todo
            tiny: ".75rem", // 12px
            xs: "0.813rem", // 13px
            small: ".875rem", // 14px
            base: "1rem", // 16px
            lg: "1.125rem", // 18px
            xl: "1.25rem", // 20px
            "2xl": "1.375rem", // 22px
            "3xl": "1.50rem", // 24px
            "4xl": "1.875rem", // 30px
            "5xl": "2.500rem" // 40px
        },
        lineHeight: { // todo
            none: 1,
            tight: 1.1667,
            snug: 1.2,
            normal: 1.25,
            relaxed: 1.3,
            loose: 1.4166,
            extended: 1.5
        }
    },
    corePlugins: {
        fontWeight: false
    },
    variants: {},
    plugins: [
        function ({
            addBase,
            config
        }) {
            addBase({
                '@font-face': [{
                        'font-family': '"ProbaPro-Regular"',
                        src: 'url("Proba_Pro_Regular.woff") format("woff")'
                    },
                    {
                        'font-family': '"ProbaPro-Bold"',
                        src: 'url("Proba_Pro_Bold.woff") format("woff")'
                    }
                ]
            });
        },

        function ({
            addBase,
            config
        }) {
            addBase({
                "@font-face": [{
                        "font-family": '"Sang-bleu-sans-light"',
                        src: 'url("/fonts/SangBleuSans-Light.woff") format("woff")'
                    },
                    {
                        "font-family": '"Sang Bleu Sans Regular"',
                        src: 'url("fonts/SangBleuSans-Regular.woff") format("woff")'
                    },
                    {
                        "font-family": '"Sang-bleu-sans-regular"',
                        src: 'url("fonts/AkkuratStd-Reg.woff") format("woff")'
                    },
                    {
                        "font-family": '"Akkurat-bold"',
                        src: 'url("fonts/AkkuratStd-Bold.woff") format("woff")'
                    }
                ]
            });
        }
    ]
};