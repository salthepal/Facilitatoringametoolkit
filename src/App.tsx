import { useState } from 'react';
import { Search } from 'lucide-react';
import { DataUpload } from './components/data-upload';
import { PatientSearch } from './components/patient-search';
import { PatientDisplay } from './components/patient-display';
import { Instructions } from './components/instructions';
import { Timer } from './components/timer';

export interface PatientData {
  [key: string]: string | number;
}

export default function App() {
  const [patients, setPatients] = useState<PatientData[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientData | null>(null);
  const [cardNumberField, setCardNumberField] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleDataUpload = (data: PatientData[], detectedCardField: string) => {
    setPatients(data);
    setCardNumberField(detectedCardField);
    setSelectedPatient(null);
    setSearchTerm('');
  };

  const handleSearch = (cardNumber: string) => {
    setSearchTerm(cardNumber);
    
    if (!cardNumber.trim() || !cardNumberField) {
      setSelectedPatient(null);
      return;
    }

    const patient = patients.find(
      p => String(p[cardNumberField]).toLowerCase() === cardNumber.toLowerCase().trim()
    );
    
    setSelectedPatient(patient || null);
  };

  const handleClear = () => {
    setPatients([]);
    setSelectedPatient(null);
    setCardNumberField('');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--cc-bg-primary)' }}>
      {/* Compact Header */}
      <header style={{ 
        background: 'var(--cc-bg-secondary)', 
        borderBottom: '1px solid rgba(255,255,255,0.1)' 
      }} className="shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div style={{ background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)' }} 
                 className="w-7 h-7 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <Search className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h1 style={{ color: 'var(--cc-text-main)' }} className="text-base leading-none">Facilitator In-Game Toolkit</h1>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs leading-none" style={{ color: 'var(--cc-text-dim)' }}>by <span style={{ color: 'var(--cc-accent-orange)' }}>Sal Phadnis</span></p>
          </div>
        </div>
      </header>

      {/* Main Content - Single Column */}
      <main className="max-w-3xl mx-auto px-4 py-4">
        {patients.length === 0 ? (
          <div className="space-y-4">
            <DataUpload onUpload={handleDataUpload} />
            <Instructions />
          </div>
        ) : (
          <div className="space-y-3">
            {/* Compact Success Message */}
            <div style={{ 
              background: 'var(--cc-bg-secondary)', 
              borderColor: 'rgba(255,255,255,0.1)' 
            }} className="rounded-lg border px-3 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs leading-none">
                  <span style={{ color: '#10b981' }}>{patients.length}</span> patient{patients.length !== 1 ? 's' : ''} loaded
                </span>
              </div>
              <button
                onClick={handleClear}
                style={{ color: 'var(--cc-text-dim)' }}
                className="text-xs leading-none hover:text-[var(--cc-accent-orange)] transition-colors"
              >
                Upload New
              </button>
            </div>

            {/* Timer Widget */}
            <Timer />

            {/* Search Interface */}
            <div style={{ 
              background: 'var(--cc-bg-secondary)', 
              borderColor: 'rgba(255,255,255,0.1)' 
            }} className="rounded-lg border p-4">
              <PatientSearch onSearch={handleSearch} />
            </div>

            {/* Patient Display */}
            {selectedPatient ? (
              <PatientDisplay patient={selectedPatient} cardNumberField={cardNumberField} />
            ) : (
              searchTerm ? (
                <div style={{ 
                  background: 'var(--cc-bg-secondary)', 
                  borderColor: 'var(--cc-accent-red)' 
                }} className="rounded-lg border-2 p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[var(--cc-accent-red)]/20 flex items-center justify-center">
                    <Search className="w-6 h-6" style={{ color: 'var(--cc-accent-red)' }} />
                  </div>
                  <p style={{ color: 'var(--cc-text-main)' }} className="text-sm mb-1">
                    No patient found
                  </p>
                  <p style={{ color: 'var(--cc-text-dim)' }} className="text-xs">
                    Card number "{searchTerm}" not in dataset
                  </p>
                </div>
              ) : (
                <div style={{ 
                  background: 'var(--cc-bg-secondary)', 
                  borderColor: 'rgba(255,255,255,0.1)' 
                }} className="rounded-lg border-2 border-dashed p-6 text-center">
                  <Search className="w-10 h-10 mx-auto mb-2" style={{ color: 'var(--cc-text-dim)', opacity: 0.5 }} />
                  <p style={{ color: 'var(--cc-text-dim)' }} className="text-xs leading-tight">
                    Enter a card number above to display patient details
                  </p>
                </div>
              )
            )}
          </div>
        )}
      </main>
    </div>
  );
}