// Themes
import type { Theme } from '@/types/theme'

export const LightTheme: Theme = {
  colors: {
    // BG
    primary: '#eceef9',
    secondary: '#f3f5fc',
    secondaryGradient:
      'linear-gradient(135deg, #ffffff, #fefeff, #fdfdfe, #fcfcfe, #fbfcfe, #fafbfe, #f9fafd, #f8f9fd)',
    // Accent
    accent: '#486bf3',
    accentHovered: '#4160db',
    accentGradient:
      'linear-gradient(135deg, #486bf3, #3a79f7, #3085f9, #2f91fa, #389cfa, #46a7f8, #58b1f6, #6bbaf3)',
    // Overlay
    overlay: 'rgba(52,84,209, 0.5)',
    // Text
    textPrimary: '#1a1a32',
    textSecondary: '#5f5f70',
  },
}

export const DarkTheme: Theme = {
  colors: {
    // BG
    primary: '#070707',
    secondary: '#0e0e0e',
    secondaryGradient:
      'linear-gradient(135deg, #333333, #2f2f2f, #2b2b2b, #282828, #242424, #202020, #1d1d1d, #191919)',
    // Accent
    accent: 'hsl(246, 22%, 47%)',
    accentHovered: '#46467f',
    accentGradient:
      'linear-gradient(135deg, #6667ab, #6765a9, #6863a7, #6961a5, #6a5fa3, #6a5da0, #6b5b9e, #6c599c)',
    // Overlay
    overlay: 'rgba(7, 7, 7, 0.7)',

    // Text
    textPrimary: '#ffffff',
    textSecondary: '#999999',
  },
}
