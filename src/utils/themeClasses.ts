import { useTheme } from '../context/ThemeContext';

export function useThemeClasses() {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return {
    // Backgrounds
    bgPrimary: isDark ? 'bg-[#0A1A2F]' : 'bg-[#F8FBFF]',
    bgSecondary: isDark ? 'bg-[#0D2340]' : 'bg-[#F0F6FD]',
    bgCard: isDark ? 'bg-[#0A1A2F]/50' : 'bg-white',
    bgCardHover: isDark ? 'bg-[#14F4FF]/5' : 'bg-[#E8F1FC]',

    // Text
    textPrimary: isDark ? 'text-white' : 'text-[#0F1419]',
    textSecondary: isDark ? 'text-gray-300' : 'text-[#4B5563]',
    textTertiary: isDark ? 'text-gray-400' : 'text-[#7A8699]',
    textLight: isDark ? 'text-gray-500' : 'text-[#A5B0C0]',

    // Borders
    borderLight: isDark ? 'border-[#14F4FF]/20' : 'border-[#D8E4F0]',
    borderMedium: isDark ? 'border-[#14F4FF]/50' : 'border-[#C0D5E8]',

    // Shadows
    shadowLight: isDark
      ? 'shadow-[0_0_20px_rgba(45,140,255,0.1)]'
      : 'shadow-[0_0_10px_rgba(15,20,25,0.05)]',
    shadowMedium: isDark
      ? 'shadow-[0_0_30px_rgba(45,140,255,0.2)]'
      : 'shadow-[0_0_20px_rgba(15,20,25,0.1)]',

    // Glassmorphism
    glass: isDark
      ? 'bg-[#0A1A2F]/50 backdrop-blur-xl'
      : 'bg-white/50 backdrop-blur-xl',
    glassDark: isDark
      ? 'bg-[#0A1A2F]/70 backdrop-blur-xl'
      : 'bg-white/70 backdrop-blur-xl',

    // Buttons
    buttonPrimary: isDark
      ? 'bg-gradient-to-r from-[#2D8CFF] to-[#14F4FF] hover:shadow-lg hover:shadow-[#14F4FF]/50'
      : 'bg-gradient-to-r from-[#2D8CFF] to-[#1E7FE8] hover:shadow-lg hover:shadow-[#2D8CFF]/30',
    buttonSecondary: isDark
      ? 'border border-[#14F4FF] bg-transparent hover:bg-[#14F4FF]/10'
      : 'border border-[#2D8CFF] bg-transparent hover:bg-[#2D8CFF]/5',

    // Input
    inputBg: isDark ? 'bg-[#0A1A2F]/50' : 'bg-white',
    inputBorder: isDark ? 'border-[#14F4FF]/20' : 'border-[#D8E4F0]',
    inputFocus: isDark ? 'focus:border-[#14F4FF]' : 'focus:border-[#2D8CFF]',
  };
}
