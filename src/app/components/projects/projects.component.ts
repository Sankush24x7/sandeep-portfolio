
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0, transform: 'translateX(-30px)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit, OnDestroy {
    projects = [
    {
      name: 'MBAZ Software (Mobile Spend Management)',
      description: 'Procurement, reimbursements & approvals modules built with Angular 17 and SQL Server.',
      tech: ['Angular 17','TypeScript','SQL Server','Bootstrap']
    },
    {
      name: 'BAZ Software (Enterprise Spend Management)',
      description: 'Legacy system enhancements and integration with ASP.NET backend.',
      tech: ['ASP.NET','C#','SQL Server']
    },
    {
      name: 'Smart Invoice Analyzer',
      description: 'An AI-driven web app that extracts and validates invoice details using OCR.',
      tech: ['Angular 17', 'TypeScript', 'Bootstrap 5', 'REST API'],
      //link: 'https://github.com/sandeepkushwaha/invoice-analyzer'
    },
    {
      name: 'SecureMail Processor',
      description: 'Outlook Graph API integration for email automation and attachment analysis.',
      tech: ['C#', '.NET 4.8', 'Graph API', 'SQL Server'],
      //link: ''
    },
    {
      name: 'Portfolio Website',
      description: 'Personal developer portfolio built with Angular 17 + Bootstrap + SCSS.',
      tech: ['Angular', 'SCSS', 'Bootstrap'],
      //link: '#'
    },
    {
      name: 'Screen Time Tracker Service',
      description: 'This service is used to track the system idle and running time of the softwares in the system.',
      tech: ['ASP.NET','C#','HTML'],
      link: 'https://github.com/Sankush24x7/ScreenTimeTrackerServices'
    }
  ];

  currentIndex = 0;
  animationState = 'enter';
  intervalId: any;

  get currentProject() {
    return this.projects[this.currentIndex];
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextProject() {
    this.animationState = 'leave';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.animationState = 'enter';
    }, 300);
  }

  prevProject() {
    this.animationState = 'leave';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      this.animationState = 'enter';
    }, 300);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextProject();
    }, 5000); // Auto-slide every 5 seconds
  }
}
