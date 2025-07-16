import React from 'react';

interface TokenAddressInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const TokenAddressInput: React.FC<TokenAddressInputProps> = ({
  label,
  placeholder = 'Enter Address',
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full ">
      <label className="text-lg text-[#525252] font-medium mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-full bg-white text-lg outline-none w-full"
      />
    </div>
  );
};

export default TokenAddressInput;
