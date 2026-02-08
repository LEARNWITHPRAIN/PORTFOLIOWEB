
import React from 'react';

interface PlaceholderImageProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ label, className = "", style }) => {
  return (
    <div 
      className={`bg-white/[0.02] border-2 border-dashed border-[#D4AF37]/30 rounded-xl flex items-center justify-center text-white/30 text-sm shadow-[0_20px_40px_rgba(0,0,0,0.3)] shadow-[#D4AF37]/[0.05] ${className}`}
      style={style}
    >
      {label}
    </div>
  );
};

export default PlaceholderImage;
