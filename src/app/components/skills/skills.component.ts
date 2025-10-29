import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
  icon: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  selectedSkillKey: string | null = null;

  skills: Skill[] = [
    // 🧠 Programming
    {
      name: 'C#',
      category: 'Programming',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
      description: 'Object-oriented language for enterprise-grade backend systems.'
    },
    {
      name: 'ASP.NET',
      category: 'Programming',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      url: 'https://dotnet.microsoft.com/apps/aspnet',
      description: 'Web framework for building dynamic, data-driven applications.'
    },
    {
      name: 'TypeScript',
      category: 'Programming',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      url: 'https://www.typescriptlang.org/',
      description: 'Adds static typing and structure to JavaScript applications.'
    },

    // ⚙️ Scripting
    {
      name: 'JavaScript',
      category: 'Scripting',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      description: 'Powerful scripting language for dynamic web applications.'
    },
    {
      name: 'Angular 17',
      category: 'Scripting',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      url: 'https://angular.dev/',
      description: 'Modern framework for scalable single-page applications.'
    },

    // 🎨 Styling
    {
      name: 'HTML5',
      category: 'Styling',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      description: 'Markup language for building structured web content.'
    },
    {
      name: 'CSS3',
      category: 'Styling',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      description: 'Defines style, layout, and visual design of web pages.'
    },
    {
      name: 'Bootstrap',
      category: 'Styling',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      url: 'https://getbootstrap.com/',
      description: 'Front-end framework for responsive web design.'
    },

    // 🧩 Database
    {
      name: 'SQL Server',
      category: 'Database',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      url: 'https://www.microsoft.com/en-us/sql-server',
      description: 'Relational database management system by Microsoft.'
    },

    // ⚒ Tools
    {
      name: 'Git',
      category: 'Tools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      url: 'https://git-scm.com/',
      description: 'Version control for collaborative software development.'
    },
    {
      name: 'Windows',
      category: 'Tools',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
      url: 'https://www.microsoft.com/windows',
      description: 'Primary operating system for .NET and enterprise projects.'
    }
  ];

  groupedSkills: { [key: string]: Skill[] } = {};

  constructor() {
    this.groupByCategory();
  }

  groupByCategory() {
    this.groupedSkills = this.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {} as { [key: string]: Skill[] });
  }

  toggleSkill(category: string, index: number) {
    const key = `${category}_${index}`;
    this.selectedSkillKey = this.selectedSkillKey === key ? null : key;
  }

  isSkillSelected(category: string, index: number): boolean {
    return this.selectedSkillKey === `${category}_${index}`;
  }
}
