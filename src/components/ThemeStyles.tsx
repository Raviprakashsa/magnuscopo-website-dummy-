import { useTheme } from '../context/ThemeContext';

export default function ThemeStyles() {
  const { theme } = useTheme();

  return (
    <style>
      {`
        /* Light Theme Overrides */
        [data-theme="light"] {
          --color-bg-primary: #F8FBFF;
          --color-bg-secondary: #F0F6FD;
          --color-bg-tertiary: #E8F1FC;
          --color-text-primary: #0F1419;
          --color-text-secondary: #4B5563;
          --color-text-tertiary: #7A8699;
          --color-border-light: #D8E4F0;
          --color-shadow: rgba(15, 20, 25, 0.1);
        }

        /* Dark Theme (default) */
        [data-theme="dark"] {
          --color-bg-primary: #0A1A2F;
          --color-bg-secondary: #0D2340;
          --color-bg-tertiary: #0F2840;
          --color-text-primary: #FFFFFF;
          --color-text-secondary: #D1D5DB;
          --color-text-tertiary: #9CA3AF;
          --color-border-light: #14F4FF30;
          --color-shadow: rgba(45, 140, 255, 0.2);
        }

        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        /* Prevent transition on animations */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}
    </style>
  );
}
