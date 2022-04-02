module.exports = {
    darkMode: 'class',
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', `app.vue`],
    theme: {
        extend: {
            colors: {
                color: 'var(--color)',
                "color-sec": 'var(--color-sec)',
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
