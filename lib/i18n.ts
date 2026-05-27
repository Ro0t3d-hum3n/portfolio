export type Lang = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Habibul Bashar Bappi',
      title: 'IT Support & Cybersecurity Specialist',
      subtitle: 'L1/L2 Support · Penetration Testing · Network Engineering',
      cta: 'Get in Touch',
      resume: 'Download CV',
    },
    about: {
      title: 'About Me',
      bio: 'IT Support Specialist (L1/L2) with over 5 years of experience in desktop support and IT operations in international corporate environments. Proficient in diagnosing Windows and macOS systems, working with ticketing systems (ServiceNow, Zendesk), and administering Microsoft Entra ID, Office 365, and endpoint security solutions. Strong communicator, solution-oriented, and specialized in fast and sustainable end-user support.',
      location: 'Krefeld, Germany',
      phone: '+49 15752085153',
      email: 'basherbd24@gmail.com',
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          role: 'IT Support and System Engineer (L1/L2)',
          company: 'CNH Industrial',
          location: 'Heilbronn, Germany',
          period: 'Jan 2025 – Present',
          bullets: [
            'IT desktop support via ServiceNow: handling and resolving incidents and service requests for Windows and macOS endpoints.',
            'Managing user accounts, access rights, and device configurations via Microsoft Entra ID (Azure AD).',
            'Deploying EDR and GlobalProtect solutions to secure and monitor endpoints.',
            'Providing and maintaining Office 365 patches and hotfixes to ensure stable working environments.',
            'Configuring and troubleshooting Cisco routers and switches for seamless LAN/WAN connectivity.',
            'Installing, configuring, and acceptance-testing new access points and LAN cabling in collaboration with the network team.',
            'Collaborating with the cybersecurity team on awareness projects and campaigns.',
          ],
        },
        {
          role: 'Information Technology Officer',
          company: 'Hochschule Rhein-Waal (AStA)',
          location: 'Kleve, Germany',
          period: 'Feb 2023 – Feb 2025',
          bullets: [
            'Introduced and migrated to Zendesk as the ticketing system, significantly improving ticket tracking.',
            'Ensured high compliance with server update schedules to sustainably reduce security vulnerabilities.',
            'Organization-wide rollout of Office 365, noticeably reducing IT incidents and increasing productivity.',
            'Configured Cisco routers and switches for uninterrupted LAN/WAN infrastructure.',
          ],
        },
        {
          role: 'Bug Bounty Hunter / Penetration Tester',
          company: 'HackerOne, Bugcrowd, Federacy',
          location: 'Remote',
          period: 'Nov 2020 – Present',
          bullets: [
            'Conducting extensive web application penetration tests using Burp Suite and Metasploit.',
            'Identifying critical vulnerabilities; recognized by platforms for technical excellence.',
          ],
        },
        {
          role: 'Cybersecurity Engineer',
          company: 'Gazi IT Solutions',
          location: 'Dhaka, Bangladesh',
          period: 'Mar 2021 – 2022',
          bullets: [
            'Conducting advanced penetration tests to uncover network vulnerabilities.',
            'Developing comprehensive security protocols to strengthen client defenses.',
          ],
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      categories: [
        { name: 'IT Support Tools', items: ['Microsoft Entra ID', 'CyberArk EPM', 'Cisco ISE', 'ServiceNow', 'Zendesk'] },
        { name: 'Operating Systems', items: ['Windows 10/11', 'macOS', 'Kali Linux'] },
        { name: 'Networking', items: ['Cisco Router/Switches', 'LAN/WAN', 'Access Points', 'VPN (GlobalProtect)'] },
        { name: 'Security Tools', items: ['Nmap', 'Wireshark', 'Burp Suite', 'Nessus', 'OWASP ZAP', 'EDR'] },
        { name: 'Programming', items: ['Python', 'Java', 'HTML', 'CSS'] },
        { name: 'Frameworks', items: ['MITRE ATT&CK', 'OWASP Top Ten', 'ISO/IEC 27001'] },
      ],
    },
    certifications: {
      title: 'Certifications',
      items: [
        'eJPT – eLearnSecurity Junior Penetration Tester (INE Security)',
        'CCNA 200-301',
        'Cisco Network Essentials',
        'Cisco Cyber Security Essentials',
        'ISO/IEC 27001:2022 Information Security Associate',
        'Certified AppSec Practitioner (CAP)',
        'Certified Network Security Practitioner (CNSP)',
      ],
    },
    awards: {
      title: 'Awards & Recognition',
      items: [
        { title: 'Porsche AG Hall of Fame', desc: 'Recognized as Cybersecurity Researcher (2024)' },
        { title: 'National Cyberdrill Top 30', desc: 'BGD e-GOV CIRT (2021)' },
        { title: 'KnowYourTeam Hall of Fame', desc: 'Cybersecurity Recognition (2024)' },
      ],
    },
    education: {
      title: 'Education',
      items: [
        { degree: 'B.Sc. Computer Science & Engineering', school: 'City University', location: 'Dhaka, Bangladesh', year: '2021' },
        { degree: 'Infotronic Systems Engineering (5th Semester)', school: 'Hochschule Rhein-Waal', location: 'Kamp-Lintfort, Germany', year: 'Exchange' },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project or opportunity? Let\'s talk.',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent! I\'ll get back to you soon.',
      error: 'Something went wrong. Please try again.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      skills: 'Kenntnisse',
      certifications: 'Zertifikate',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Habibul Bashar Bappi',
      title: 'IT-Support & Cybersecurity-Spezialist',
      subtitle: 'L1/L2 Support · Penetration Testing · Netzwerktechnik',
      cta: 'Kontakt aufnehmen',
      resume: 'Lebenslauf laden',
    },
    about: {
      title: 'Über mich',
      bio: 'IT-Support-Spezialist (L1/L2) mit über 5 Jahren Erfahrung im Desktop-Support und IT-Betrieb in internationalen Unternehmensumgebungen. Versiert in der Fehlerdiagnose für Windows- und macOS-Systeme, im Umgang mit Ticketsystemen (ServiceNow, Zendesk) sowie in der Administration von Microsoft Entra ID, Office 365 und Endpoint-Sicherheitslösungen. Kommunikationsstark, lösungsorientiert und auf die schnelle, nachhaltige Unterstützung von Endbenutzern spezialisiert.',
      location: 'Krefeld, Deutschland',
      phone: '+49 15752085153',
      email: 'basherbd24@gmail.com',
    },
    experience: {
      title: 'Berufserfahrung',
      jobs: [
        {
          role: 'IT Support and System Engineer (L1/L2)',
          company: 'CNH Industrial',
          location: 'Heilbronn, Deutschland',
          period: 'Jan 2025 – Heute',
          bullets: [
            'IT-Desktop-Support über ServiceNow: Bearbeitung und Lösung von Incidents und Service Requests für Windows- und macOS-Endgeräte.',
            'Verwaltung von Benutzerkonten, Zugriffsrechten und Gerätekonfigurationen über Microsoft Entra ID (Azure AD).',
            'Einsatz von EDR- und GlobalProtect-Lösungen zur Absicherung und Überwachung von Endpunkten.',
            'Bereitstellung und Wartung von Office-365-Patches und Hotfixes zur Sicherstellung stabiler Arbeitsumgebungen.',
            'Konfiguration und Troubleshooting von Cisco-Routern und -Switches für störungsfreie LAN/WAN-Konnektivität.',
            'Installation, Konfiguration und Abnahmetests neuer Access Points sowie LAN-Verkabelung.',
            'Zusammenarbeit mit dem Cybersecurity-Team bei Awareness-Projekten und -Kampagnen.',
          ],
        },
        {
          role: 'Information Technology Officer',
          company: 'Hochschule Rhein-Waal (AStA)',
          location: 'Kleve, Deutschland',
          period: 'Feb 2023 – Feb 2025',
          bullets: [
            'Einführung und Migration zu Zendesk als Ticketsystem, wodurch die Ticket-Nachverfolgung deutlich verbessert wurde.',
            'Sicherstellung hoher Compliance bei Server-Update-Zeitplänen zur nachhaltigen Reduzierung von Sicherheitslücken.',
            'Organisationsweiter Rollout von Office 365, der IT-Vorfälle spürbar reduzierte und die Produktivität steigerte.',
            'Konfiguration von Cisco-Routern und -Switches für eine unterbrechungsfreie LAN/WAN-Infrastruktur.',
          ],
        },
        {
          role: 'Bug Bounty Hunter / Penetration Tester',
          company: 'HackerOne, Bugcrowd, Federacy',
          location: 'Remote',
          period: 'Nov 2020 – Heute',
          bullets: [
            'Durchführung umfangreicher Web-Application-Penetrationstests mit Burp Suite und Metasploit.',
            'Identifikation kritischer Schwachstellen, Plattformanerkennung für technische Exzellenz.',
          ],
        },
        {
          role: 'Cybersecurity Engineer',
          company: 'Gazi IT Solutions',
          location: 'Dhaka, Bangladesch',
          period: 'Mär 2021 – 2022',
          bullets: [
            'Durchführung erweiterter Penetrationstests zur Aufdeckung von Netzwerkschwachstellen.',
            'Entwicklung umfassender Sicherheitsprotokolle zur Stärkung der Kundenabwehr.',
          ],
        },
      ],
    },
    skills: {
      title: 'Technische Kenntnisse',
      categories: [
        { name: 'IT-Support-Tools', items: ['Microsoft Entra ID', 'CyberArk EPM', 'Cisco ISE', 'ServiceNow', 'Zendesk'] },
        { name: 'Betriebssysteme', items: ['Windows 10/11', 'macOS', 'Kali Linux'] },
        { name: 'Netzwerk', items: ['Cisco Router/Switches', 'LAN/WAN', 'Access Points', 'VPN (GlobalProtect)'] },
        { name: 'Sicherheitstools', items: ['Nmap', 'Wireshark', 'Burp Suite', 'Nessus', 'OWASP ZAP', 'EDR'] },
        { name: 'Programmierung', items: ['Python', 'Java', 'HTML', 'CSS'] },
        { name: 'Frameworks', items: ['MITRE ATT&CK', 'OWASP Top Ten', 'ISO/IEC 27001'] },
      ],
    },
    certifications: {
      title: 'Zertifizierungen',
      items: [
        'eJPT – eLearnSecurity Junior Penetration Tester (INE Security)',
        'CCNA 200-301',
        'Cisco Network Essentials',
        'Cisco Cyber Security Essentials',
        'ISO/IEC 27001:2022 Information Security Associate',
        'Certified AppSec Practitioner (CAP)',
        'Certified Network Security Practitioner (CNSP)',
      ],
    },
    awards: {
      title: 'Auszeichnungen & Anerkennungen',
      items: [
        { title: 'Porsche AG Hall of Fame', desc: 'Anerkennung als Cybersecurity Researcher (2024)' },
        { title: 'National Cyberdrill Top 30', desc: 'BGD e-GOV CIRT (2021)' },
        { title: 'KnowYourTeam Hall of Fame', desc: 'Cybersecurity-Anerkennung (2024)' },
      ],
    },
    education: {
      title: 'Ausbildung',
      items: [
        { degree: 'B.Sc. Computer Science & Engineering', school: 'City University', location: 'Dhaka, Bangladesch', year: '2021' },
        { degree: 'Infotronic Systems Engineering (5. Semester)', school: 'Hochschule Rhein-Waal', location: 'Kamp-Lintfort, Deutschland', year: 'Austausch' },
      ],
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Haben Sie ein Projekt oder eine Stelle? Lassen Sie uns reden.',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      sending: 'Sende...',
      success: 'Nachricht gesendet! Ich melde mich bald.',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
};
