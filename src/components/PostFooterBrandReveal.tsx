import { useTheme } from '../context/ThemeContext';

export default function PostFooterBrandReveal() {
  const { theme } = useTheme();
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 h-auto flex items-end justify-center z-0 ${
      theme === 'light' ? 'bg-[#F7F9FC]' : 'bg-[#0A1A2F]'
    }`}>
      <img 
        src={theme === 'light' ? '/White_MagnuscopoBrandLogo.svg' : '/Black_MagnuscopoBrandLogo.svg'} 
        alt="Magnus Copo" 
        className="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  );
}
