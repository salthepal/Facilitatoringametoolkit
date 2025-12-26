import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

interface PatientSearchProps {
  onSearch: (cardNumber: string) => void;
}

export function PatientSearch({ onSearch }: PatientSearchProps) {
  const [cardNumber, setCardNumber] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus the search input for quick access
    inputRef.current?.focus();
  }, []);

  const handleChange = (value: string) => {
    setCardNumber(value);
    // Auto-search as user types
    onSearch(value);
  };

  return (
    <div className="space-y-1.5">
      <label style={{ color: 'var(--cc-accent-orange)' }} className="text-xs uppercase tracking-wide block">
        Enter Card Number
      </label>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--cc-text-dim)' }} />
        <input
          ref={inputRef}
          type="text"
          value={cardNumber}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Type to search..."
          style={{
            background: 'var(--cc-bg-primary)',
            borderColor: cardNumber ? 'var(--cc-accent-orange)' : 'rgba(255,255,255,0.1)',
            color: 'var(--cc-text-main)'
          }}
          className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[var(--cc-accent-orange)] transition-colors placeholder:text-[var(--cc-text-dim)] text-lg font-mono tracking-wider"
        />
      </div>
    </div>
  );
}
