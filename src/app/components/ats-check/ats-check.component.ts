import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ats-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ats-check.component.html'
})
export class AtsCheckComponent {
  selectedFile: File | null = null;
  score: number | null = null;
  loading = false;
  breakdown: any = null;
  suggestions: string[] = [];
  pdfUrl: string | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files?.[0] || null;
    this.score = null;
    this.breakdown = null;
    this.suggestions = [];
    this.pdfUrl = null;
  }

  analyzeResume() {
  if (!this.selectedFile) return;

  this.loading = true;
  const formData = new FormData();
  formData.append('file', this.selectedFile);
    //console.log(JSON.parse(JSON.stringify(formData)) + "--" + formData);
    formData.forEach((value, key) => {
  if (value instanceof File) {
    console.log(`${key}:`, value.name, value.size, value.type);
  } else {
    console.log(`${key}:`, value);
  }
});
  this.http.post<any>('https://localhost:7141/api/Analyze/analyze', formData).subscribe({
    next: (res) => {
      console.log('✅ API Response:', res);
      // Use exact backend values (don’t alter)
      this.showResult(res.score, res.breakdown, res.suggestions, res.pdfUrl ?? null);
    },
    error: (err) => {
      console.warn('Backend API unreachable — using fallback scoring.', err);

      // Only use fallback if backend is down
      const fallbackScore = this.generateFallbackScore(this.selectedFile!.name);
      const dummyBreakdown = {
        keywords: Math.floor(fallbackScore * 0.8),
        structure: 75,
        format: 80,
        readability: 85
      };
      const dummySuggestions = [
        'Add more technical keywords.',
        'Ensure consistent formatting.',
        'Add an Experience or Projects section.'
      ];

      this.showResult(fallbackScore, dummyBreakdown, dummySuggestions, null);
    }
  });
}

private showResult(score: number, breakdown: any, suggestions: string[], pdfUrl: string | null) {
  //console.log('🎯 Final Display Values:', { score, breakdown, suggestions, pdfUrl });

  // ✅ Directly use backend score (no normalization)
  this.score = score;
  this.breakdown = breakdown;
  this.suggestions = suggestions;
  this.pdfUrl = pdfUrl;

  // Reset file input
  this.selectedFile = null;
  const fileInput = document.querySelector('#fileUpload') as HTMLInputElement | null;
  if (fileInput) fileInput.value = '';

  this.loading = false;
}


  private generateFallbackScore(fileName: string): number {
    const base = 60 + Math.floor(Math.random() * 20);
    const lower = fileName.toLowerCase();

    if (lower.includes('resume')) return base + 10;
    if (lower.includes('developer')) return base + 15;
    if (lower.includes('sandeep')) return base + 5;

    return base + Math.floor(Math.random() * 10);
  }

  objectKeys = Object.keys;
}
