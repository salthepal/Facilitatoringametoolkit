import { FileText, Search, Upload, LayoutGrid, Package, Users } from 'lucide-react';

export function Instructions() {
  return (
    <div className="space-y-3">
      {/* How to Use Section */}
      <div style={{ 
        background: 'var(--cc-bg-secondary)', 
        borderColor: 'rgba(255,255,255,0.1)' 
      }} className="rounded-lg border p-4">
        <h3 style={{ color: 'var(--cc-text-main)' }} className="mb-3 text-sm leading-tight">How to Use This App</h3>
        
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="flex gap-2.5">
            <div style={{ 
              background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)' 
            }} className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <FileText className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h4 style={{ color: 'var(--cc-text-main)' }} className="mb-0.5 text-xs leading-tight">1. Prepare Your Spreadsheet</h4>
              <p style={{ color: 'var(--cc-text-dim)' }} className="text-xs leading-tight">
                Use any format: CSV, Excel, TSV, or ODS. First row must contain column headers. Include a column for card numbers.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-2.5">
            <div style={{ 
              background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)' 
            }} className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Upload className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h4 style={{ color: 'var(--cc-text-main)' }} className="mb-0.5 text-xs leading-tight">2. Upload Your Dataset</h4>
              <p style={{ color: 'var(--cc-text-dim)' }} className="text-xs leading-tight">
                Drag and drop your spreadsheet file. The app will automatically detect your card number column.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-2.5">
            <div style={{ 
              background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)' 
            }} className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Search className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h4 style={{ color: 'var(--cc-text-main)' }} className="mb-0.5 text-xs leading-tight">3. Search During Gameplay</h4>
              <p style={{ color: 'var(--cc-text-dim)' }} className="text-xs leading-tight">
                Type the card number to instantly display all patient details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Board Setup Section */}
      <div style={{ 
        background: 'var(--cc-bg-secondary)', 
        borderColor: 'rgba(255,255,255,0.1)' 
      }} className="rounded-lg border p-4">
        <div className="flex items-center gap-2 mb-3">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)' 
          }} className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
            <LayoutGrid className="w-3.5 h-3.5 text-white" />
          </div>
          <h3 style={{ color: 'var(--cc-text-main)' }} className="text-sm leading-tight">Game Board Setup</h3>
        </div>

        {/* Key Zones */}
        <div className="mb-4">
          <h4 style={{ color: 'var(--cc-accent-orange)' }} className="text-xs uppercase tracking-wide mb-2">Key Zones</h4>
          <div style={{ background: 'var(--cc-bg-primary)' }} className="rounded-lg p-3 space-y-1">
            <div className="flex gap-2">
              <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs w-16 flex-shrink-0">ED:</span>
              <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Waiting Room, Treatment Rooms, Shock Rooms, CT Scanner</span>
            </div>
            <div className="flex gap-2">
              <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs w-16 flex-shrink-0">Dispo:</span>
              <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">ICU, Med/Surg, Morgue, Parking Lot, Helipad</span>
            </div>
            <div className="flex gap-2">
              <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs w-16 flex-shrink-0">Other:</span>
              <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">OR/IR Suites, Staff Areas</span>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Package className="w-3.5 h-3.5" style={{ color: 'var(--cc-accent-orange)' }} />
            <h4 style={{ color: 'var(--cc-accent-orange)' }} className="text-xs uppercase tracking-wide">Materials Provided</h4>
          </div>
          <div style={{ background: 'var(--cc-bg-primary)' }} className="rounded-lg p-3">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <div className="flex items-baseline gap-1.5">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs font-mono">10×</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Admit Cards</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs font-mono">10×</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Transfer Cards</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs font-mono">10×</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Morgue Cards</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs font-mono">All</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Discharge Cards</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs font-mono">5×</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Consult Cards</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs font-mono">10×</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Intervention Cards</span>
              </div>
              <div className="col-span-2 flex items-baseline gap-1.5">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs font-mono">10×</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">Results Cards</span>
              </div>
            </div>
            <div style={{ borderTopColor: 'rgba(255,255,255,0.1)' }} className="border-t mt-2 pt-2">
              <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">+ Accessories: sand timers, markers, paperclips, freezer bags</span>
            </div>
          </div>
        </div>

        {/* Patient Card Distribution */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Users className="w-3.5 h-3.5" style={{ color: 'var(--cc-accent-orange)' }} />
            <h4 style={{ color: 'var(--cc-accent-orange)' }} className="text-xs uppercase tracking-wide">Initial Patient Placement</h4>
          </div>
          <div className="space-y-2">
            {/* Session 1 and 2 */}
            <div style={{ background: 'var(--cc-bg-primary)' }} className="rounded-lg p-3 space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div style={{ color: 'var(--cc-accent-orange)' }} className="text-xs mb-1.5 tracking-wide">Session 1</div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">Waiting Room</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">1-10</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">Shock Rooms</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">11-13</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">Regular ED</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">14-27</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">CT Scanner</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">28</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--cc-accent-orange)' }} className="text-xs mb-1.5 tracking-wide">Session 2</div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">Waiting Room</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">70-79</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">Shock Rooms</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">80-82</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">Regular ED</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">83-96</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span style={{ color: 'var(--cc-text-dim)' }} className="text-xs">CT Scanner</span>
                      <span style={{ color: 'var(--cc-text-main)' }} className="text-xs font-mono">97</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keep Free */}
            <div style={{ 
              background: 'var(--cc-bg-primary)', 
              borderColor: 'var(--cc-accent-orange)' 
            }} className="rounded-lg border border-dashed p-2.5">
              <div className="flex items-start gap-2">
                <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs flex-shrink-0 mt-0.5">Keep Free:</span>
                <span style={{ color: 'var(--cc-text-main)' }} className="text-xs">
                  One shock room, one regular ED room, one OR, one CT scanner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
