module.exports = {
    darkMode: 'class',
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', `app.vue`],
    theme: {
        extend: {
            colors: {
                color: 'var(--color)',
                'color-sec': 'var(--color-sec)',
                'color-primary': 'var(--color-primary)',
                'color-secondary': 'var(--color-secondary)',
                bg: 'var(--bg)',
                'bg-secondary': 'var(--bg-secondary)',
                border: 'var(--border-color)',

                // windows colors
                type: {
                    primary: 'var(--type-primary)',
                    secondary: 'var(--type-secondary)',
                    disabled: 'var(--type-disabled)',
                },
                border: {
                    body: 'var(--border-body)',
                    input: 'var(--border-input)',
                    'input-hover': 'var(--border-input-hover)',
                },
                theme: {
                    primary: 'var(--theme-primary)',
                    'lighter-alt': 'var(--theme-lighter-alt)',
                    lighter: 'var(--theme-lighter)',
                    light: 'var(--theme-light)',
                    'light-a': 'var(--theme-light-a)',
                    tertiary: 'var(--theme-tertiary)',
                    'dark-alt': 'var(--theme-dark-alt)',
                    dark: 'var(--theme-dark)',
                    darker: 'var(--theme-darker)',
                },
                grey: {
                    white: 'var(--grey-white)',
                    grey5: 'var(--grey-grey5)',
                    grey10: 'var(--grey-grey10)',
                    grey20: 'var(--grey-grey20)',
                    grey30: 'var(--grey-grey30)',
                    grey40: 'var(--grey-grey40)',
                    grey50: 'var(--grey-grey50)',
                    grey60: 'var(--grey-grey60)',
                    grey90: 'var(--grey-grey90)',
                    grey110: 'var(--grey-grey110)',
                    grey130: 'var(--grey-grey130)',
                    grey150: 'var(--grey-grey150)',
                    grey160: 'var(--grey-grey160)',
                    grey190: 'var(--grey-grey190)',
                    black: 'var(--grey-black)',
                },
            },
        },
    },
    plugins: [],
}
