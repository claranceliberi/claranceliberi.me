module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                color: 'var(--color)',
                'color-primary': 'var(--color-primary)',
                'color-secondary': 'var(--color-secondary)',
                bg: 'var(--bg)',
                'bg-secondary': 'var(--bg-secondary)',
                border: 'var(--border-color)',
            },
        },
    },
    plugins: [],
}
