import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  projectTitle: string;
  companyName: string;
  role: string;
  platform: string;
  description: string;
  responsibilities: string[];
  startDate: Date;
  endDate?: Date;
  duration?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  currentIndex = 0;
  experiences: Experience[] = [
    {
      projectTitle: 'MBAZ Software (Mobile Spend Management System)',
      companyName: 'Empronc Solution Pvt. Ltd.',
      role: 'Senior Software Developer',
      platform: 'Angular 17, Bootstrap, TypeScript, HTML, CSS, SQL Server',
      description:
        'Mobile-based spend management for procurement, reimbursement, and vendor payment with workflow automation.',
      responsibilities: [
        'Designed and developed core modules in Angular.',
        'Suggested enhancements and participated in design decisions.',
        'Maintained code quality and documentation.',
        'Handled complete SDLC phases — coding to maintenance.',
        'Optimized and upgraded software performance.'
      ],
      startDate: new Date('2024-04-01')
    },
    {
      projectTitle: 'SBI Portal (Travel Management System)',
      companyName: 'DataVoice Solution',
      role: 'Software Developer',
      platform: 'C#, ASP.NET Core Web API, HTML, CSS, JavaScript, SQL Server',
      description:
        'System to manage internal activities: attendance, travel, claim, approval, and voucher integration.',
      responsibilities: [
        'Developed Travel Module end-to-end — APIs, DB management, approval setup, PDF generation.',
        'Debugged and tested code as per QA standards.',
        'Provided advice and strategies for software design improvements.',
        'Optimized and upgraded software performance.',
        'Preparing the Technical Docs for the new implementation.'
      ],
      startDate: new Date('2023-11-01'),
      endDate: new Date('2024-03-31')
    },
    
    {
      projectTitle: 'BAZ Software (Spend Management System)',
      companyName: 'Empronc Solution Pvt. Ltd.',
      role: 'Associate Software Developer',
      platform: 'C#, ASP.NET, HTML, CSS, JavaScript, SQL Server',
      description:
        'Project used to manage enterprise spend: procurement, reimbursement, vendor bill payment, budgets, claims, and approval workflows.',
      responsibilities: [
        'Involved in design, implementation, and development as per coding standards.',
        'Contributed ideas in team meetings and delivered updates on deadlines.',
        'Documented technical workflows for new hires.',
        'Optimized and upgraded software performance.',
        'Handled all SDLC phases — development, debugging, testing, implementation.'
      ],
      startDate: new Date('2021-07-01'),
      endDate: new Date('2023-11-30')
    }
  ];

  ngOnInit() {
    this.updateDurations();
    setInterval(() => this.updateDurations(), 1000);
    //setInterval(() => this.next(), 7000); // Auto slide every 7s
  }

  updateDurations() {
    const now = new Date();

    this.experiences.forEach(exp => {
      const start = exp.startDate;
      const end = exp.endDate || now;

      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate() + 1;

      if (days < 0) {
        months--;
        const prevMonthDays = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += prevMonthDays;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      const daysInMonth = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
      if (days > daysInMonth) {
        months++;
        days -= daysInMonth;
        if (months >= 12) {
          years++;
          months -= 12;
        }
      }

      const diff = end.getTime() - start.getTime();
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      exp.duration = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.experiences.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.experiences.length) % this.experiences.length;
  }
}
