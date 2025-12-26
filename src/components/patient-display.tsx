import { CreditCard } from 'lucide-react';
import { PatientData } from '../App';

interface PatientDisplayProps {
  patient: PatientData;
  cardNumberField: string;
}

export function PatientDisplay({ patient, cardNumberField }: PatientDisplayProps) {
  const formatFieldName = (field: string): string => {
    return field
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const cardNumber = patient[cardNumberField];
  const otherFields = Object.entries(patient).filter(([key]) => key !== cardNumberField);

  return (
    <div style={{ 
      background: 'var(--cc-bg-secondary)', 
      borderColor: 'rgba(255,255,255,0.1)' 
    }} className="rounded-lg border overflow-hidden animate-fadeIn">
      {/* Prominent Card Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)'
      }} className="px-4 py-3 text-white flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <CreditCard className="w-5 h-5" />
        </div>
        <div>
          <p className="text-white/80 text-xs leading-none mb-1 tracking-wide uppercase">Card</p>
          <p className="text-2xl leading-none tracking-wider font-mono">{cardNumber}</p>
        </div>
      </div>

      {/* Patient Details - Optimized for Scanning */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-0">
          {otherFields.map(([field, value], index) => (
            <div 
              key={field} 
              style={{ 
                background: index % 2 === 0 ? 'var(--cc-bg-primary)' : 'transparent',
                borderBottomColor: 'rgba(255,255,255,0.05)'
              }} 
              className="px-3 py-2 border-b last:border-b-0 flex justify-between items-baseline gap-4 hover:bg-[var(--cc-bg-primary)] transition-colors"
            >
              <span 
                style={{ color: 'var(--cc-accent-orange)' }} 
                className="text-xs uppercase tracking-wide flex-shrink-0 w-32"
              >
                {formatFieldName(field)}
              </span>
              <span 
                style={{ color: 'var(--cc-text-main)' }} 
                className="text-base leading-tight text-right flex-1 font-medium"
              >
                {value || '—'}
              </span>
            </div>
          ))}
        </div>

        {otherFields.length === 0 && (
          <p style={{ color: 'var(--cc-text-dim)' }} className="text-center py-4 text-xs leading-tight">
            No additional patient data available
          </p>
        )}
      </div>
    </div>
  );
}
