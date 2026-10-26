export type Theme = 'light' | 'dark';

export const colors = {
  light: {
    bg: {
      primary: '#F8FBFF',
      secondary: '#F0F6FD',
      tertiary: '#E8F1FC',
      card: '#FFFFFF',
      cardAlt: '#F5F9FE',
    },
    text: {
      primary: '#0F1419',
      secondary: '#4B5563',
      tertiary: '#7A8699',
      light: '#A5B0C0',
    },
    border: {
      light: '#D8E4F0',
      medium: '#C0D5E8',
      dark: '#A8C5DC',
    },
    accent: {
      primary: '#2D8CFF',
      secondary: '#14F4FF',
      tertiary: '#8A4FFF',
    },
    button: {
      primary: '#2D8CFF',
      hover: '#1E6FCC',
      text: '#FFFFFF',
    },
    shadow: {
      sm: 'rgba(15, 20, 25, 0.05)',
      md: 'rgba(15, 20, 25, 0.1)',
      lg: 'rgba(45, 140, 255, 0.15)',
    },
  },
  dark: {
    bg: {
      primary: '#0A1A2F',
      secondary: '#0D2340',
      tertiary: '#0F2840',
      card: '#0A1A2F',
      cardAlt: '#0D2340',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1D5DB',
      tertiary: '#9CA3AF',
      light: '#6B7280',
    },
    border: {
      light: '#14F4FF30',
      medium: '#14F4FF50',
      dark: '#14F4FF80',
    },
    accent: {
      primary: '#2D8CFF',
      secondary: '#14F4FF',
      tertiary: '#8A4FFF',
    },
    button: {
      primary: '#2D8CFF',
      hover: '#1E6FCC',
      text: '#FFFFFF',
    },
    shadow: {
      sm: 'rgba(45, 140, 255, 0.1)',
      md: 'rgba(45, 140, 255, 0.2)',
      lg: 'rgba(45, 140, 255, 0.3)',
    },
  },
};

export function getThemeClasses(theme: Theme, isDark?: boolean): string {
  const currentTheme = isDark ?? theme === 'dark' ? 'dark' : 'light';
  return `theme-${currentTheme}`;
}

export function getBackgroundColor(theme: Theme, level: 'primary' | 'secondary' | 'tertiary' | 'card' | 'cardAlt'): string {
  return colors[theme].bg[level];
}

export function getTextColor(theme: Theme, level: 'primary' | 'secondary' | 'tertiary' | 'light'): string {
  return colors[theme].text[level];
}

export function getBorderColor(theme: Theme, level: 'light' | 'medium' | 'dark'): string {
  return colors[theme].border[level];
}
