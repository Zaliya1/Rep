module.exports = {
    "presets": ["@babel/preset-typescript"],
    plugins: [[
        'module-resolver',
        {
            extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
            root: ['.'],
            alias: {
                '@api': './src/api',
                '@assets': './src/assets',
                '@components': './src/components',
                '@scenes': './src/scenes',
                '@theme': './src/theme',
                '@utils': './src/utils',
            },
        },
    ],]
}
