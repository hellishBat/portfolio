module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { development: !api.env('production'), runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [
      ...(!api.env('production') ? ['react-refresh/babel'] : []),
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
        },
      ],
      '@babel/plugin-proposal-class-properties',
      'babel-plugin-styled-components',
      'polished',
    ],
  }
}
