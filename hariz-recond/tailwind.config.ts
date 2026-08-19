import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { gold: '#D4AF37', 'gold-light': '#F3D67A', ink: '#090909' }, boxShadow: { gold: '0 12px 40px rgba(212,175,55,.15)' } } }, plugins: [] }
export default config
