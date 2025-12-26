import { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { PatientData } from '../App';
import * as XLSX from 'xlsx';

interface DataUploadProps {
  onUpload: (data: PatientData[], cardNumberField: string) => void;
}

export function DataUpload({ onUpload }: DataUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseSpreadsheet = (file: File): Promise<PatientData[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          
          // Get the first sheet
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          
          // Convert to JSON
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
          
          if (jsonData.length === 0) {
            reject(new Error('No data found in the spreadsheet'));
            return;
          }
          
          resolve(jsonData as PatientData[]);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsBinaryString(file);
    });
  };

  const detectCardNumberField = (headers: string[]): string => {
    const cardPatterns = ['card', 'number', 'id', 'patient'];
    
    for (const header of headers) {
      const lowerHeader = header.toLowerCase();
      if (lowerHeader.includes('card') && lowerHeader.includes('number')) {
        return header;
      }
    }
    
    for (const header of headers) {
      const lowerHeader = header.toLowerCase();
      for (const pattern of cardPatterns) {
        if (lowerHeader.includes(pattern)) {
          return header;
        }
      }
    }
    
    return headers[0];
  };

  const handleFile = async (file: File) => {
    const validExtensions = ['.csv', '.xlsx', '.xls', '.tsv', '.ods'];
    const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    
    if (!validExtensions.includes(fileExtension)) {
      alert('Please upload a valid spreadsheet file (CSV, Excel, TSV, or ODS)');
      return;
    }

    try {
      const parsed = await parseSpreadsheet(file);
      
      if (parsed.length === 0) {
        alert('No valid data found in the file');
        return;
      }

      const headers = Object.keys(parsed[0]);
      const cardField = detectCardNumberField(headers);
      
      onUpload(parsed, cardField);
    } catch (error) {
      alert('Error reading file: ' + (error as Error).message);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div style={{ 
      background: 'var(--cc-bg-secondary)', 
      borderColor: 'rgba(255,255,255,0.1)' 
    }} className="rounded-lg border p-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer ${
          isDragging
            ? 'border-[var(--cc-accent-orange)] bg-[var(--cc-accent-orange)]/10'
            : 'border-[rgba(255,255,255,0.2)] hover:border-[var(--cc-accent-orange)] hover:bg-[var(--cc-accent-orange)]/5'
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        <div style={{ 
          background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)' 
        }} className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
          <Upload className="w-5 h-5 text-white" />
        </div>
        <p style={{ color: 'var(--cc-text-main)' }} className="mb-0.5 text-sm leading-tight">Drag and drop your spreadsheet</p>
        <p style={{ color: 'var(--cc-text-dim)' }} className="text-xs leading-tight mb-1">or click to browse</p>
        <p style={{ color: 'var(--cc-text-dim)' }} className="text-xs leading-tight">
          CSV, Excel, TSV, ODS
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls,.tsv,.ods"
          onChange={handleFileInput}
          className="hidden"
        />
      </div>
    </div>
  );
}