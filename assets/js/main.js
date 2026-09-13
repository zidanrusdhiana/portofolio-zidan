/*=============== LANGUAGE SWITCHER ===============*/
const translations = {
   en: {
      // Navigation
      'nav-home': 'Home',
      'nav-about': 'About Me',
      'nav-experience': 'Experience',
      'nav-projects': 'Projects',
      'nav-contact': 'Contact Me',
      
      // Home Section
      'home-name': 'Mochamad Zidan R',
      'home-desc': 'Computer Science student specializing in <b>Data and Artificial Intelligence (AI)</b> with a strong foundation in <b>Software Engineering.</b>',
      'home-scroll': 'Scroll Down',
      
      // About Section
      'about-title': 'About Me.',
      'about-desc': 'Driven by analytical thinking and a problem-solving mindset. Demonstrated teamwork experience in managing organizational programs and collaborating across cross-functional teams.',
      'about-label-lang': '<b>Programming Languages:</b>',
      'about-label-tech': '<b>Tech:</b>',
      'about-label-tools': '<b>Tools:</b>',
      'about-btn-contact': 'Contact Me',

      // Experience Section
      'experience-title': 'Experience.',
      'exp-present': 'Present',
      'exp-see-project': 'See the project',

      // PT Bahtera Lentera Jaya
      'exp-blj-role': 'Data Engineer Intern',
      'exp-blj-li1': 'Developed and optimized a large-scale big-data pipeline for collecting and distributing professional profile data (a database of 851M+ records with hundreds of millions of monthly updates) across Python, Node.js, and Go.',
      'exp-blj-li2': 'Built a data-consistency mechanism that flags incomplete profiles and holds them back from distribution until every section (collected via REST and GraphQL) is complete, backed by new database indexes.',
      'exp-blj-li3': 'Co-developed the Real-Time Scraping API, an OpenAPI/Swagger-documented REST service returning structured JSON profile data by URL, secured with API keys.',
      'exp-blj-li4': 'Built RabbitMQ session-provider workers and Telegram monitoring bots delivering daily operational statistics and alerting.',

      // PT Hanggar Tujuh Belas
      'exp-hanggar-role': 'Software Developer Intern',
      'exp-hanggar-li1': 'Developed an internal HR management system with face-recognition attendance via webcam, a two-level leave and permit approval workflow, role-based access control, and Excel report exports.',
      'exp-hanggar-li2': 'Built a mechanic photo-gallery and field-reporting web app with presigned-URL uploads to S3 / Cloudflare R2, NextAuth authentication, and on-the-fly PDF report generation.',

      // Projects Section Global
      'projects-title': 'Projects.',

      // Project Cards (Titles & Descriptions)
      // Hanggar17
      'proj-hanggar-subtitle': 'Internal System',
      'proj-hanggar-title': 'Hanggar17 - HR & Field Report',
      'proj-hanggar-desc': 'HR system with face-recognition attendance and a mechanic field-reporting app with PDF generation.',

      // INDI
      'proj-indi-subtitle': 'AI Web Platform',
      'proj-indi-title': 'INDI - Driving Institute',
      'proj-indi-desc': 'Company profile and an AI-powered driver psychometric assessment platform with automated reporting.',

      // PT ANA
      'proj-ptana-subtitle': 'Company Profile',
      'proj-ptana-title': 'PT ANA Global Solusion',
      'proj-ptana-desc': 'Company profile website for an occupational safety training and certification provider, with Framer Motion animations.',

      // Makara
      'proj-makara-subtitle': 'Creative Portfolio',
      'proj-makara-title': 'Makara Creative Lab',
      'proj-makara-desc': 'Creative agency portfolio with a dynamic hero slider and Lenis-powered smooth scrolling.',

      // ProGram
      'proj-program-subtitle': 'MERN Stack',
      'proj-program-title': 'ProGram - Social Media',
      'proj-program-desc': 'Social media website with real-time messaging, stories, and posts using MERN Stack.',
      
      // DINAMIK
      'proj-dinamik-subtitle': 'Website',
      'proj-dinamik-title': 'DINAMIK 20 - Competition',
      'proj-dinamik-desc': 'Competition website with registration system, file upload, and participant dashboard.',
      
      // PahamSaham
      'proj-paham-subtitle': 'Data Pipeline',
      'proj-paham-title': 'PahamSaham - ETL Dashboard',
      'proj-paham-desc': 'Automated ETL pipeline for scraping and visualizing stock data using Apache Airflow.',
      
      // Dino
      'proj-dino-subtitle': 'Java Game',
      'proj-dino-title': 'Dino the Annihilator',
      'proj-dino-desc': 'Arcade game with MVVM architecture, collision detection, and database leaderboard system.',
      
      // DIA
      'proj-dia-subtitle': 'Backend Service',
      'proj-dia-title': 'DPIA Partnership Dashboard',
      'proj-dia-desc': 'Backend service to manage partnership data for the UPI Directorate of Partnerships.',
      
      // LetMeCook
      'proj-cook-subtitle': 'Mobile App',
      'proj-cook-title': 'LetMeCook - Recipe App',
      'proj-cook-desc': 'Cross-platform mobile application for recipe search and management using Flutter.',
      
      // ZRental
      'proj-rent-subtitle': 'Full-Stack',
      'proj-rent-title': 'ZRentCar - Car Rental',
      'proj-rent-desc': 'Car rental website with secure authentication system and Midtrans payment gateway.',

      // Contact Section
      'contact-title': 'Contact Me.',
      'contact-desc-1': 'I will read all emails. Send me any message you want and I\'ll get back to you.',
      'contact-desc-2': 'I need your <b>Name</b> and <b>Email Address</b>, but you won\'t receive anything other than your reply.',
      'contact-form-title': 'Send Me A Message',
      'contact-ph-name': 'First Name',
      'contact-ph-email': 'Email Address',
      'contact-ph-subject': 'Subject',
      'contact-ph-msg': 'Message',
      'contact-btn-send': 'Send Message',
      'contact-social-1': 'Does not send emails',
      'contact-social-2': 'Write me on my social networks',
      'contact-success': 'Message sent successfully ✅',
      'contact-error': 'Message not sent (service error) ❌',
      
      // Footer
      'footer-link-home': 'Home',
      'footer-link-about': 'About',
      'footer-link-experience': 'Experience',
      'footer-link-projects': 'Projects',
      
      // Modals Global
      'modal-role': 'Role:',
      'modal-duration': 'Duration:',
      'modal-tech': 'Tech:',
      'modal-label-about': 'About the Project',
      'modal-label-resp': 'Key Responsibilities',

      // Modal Contents (Descriptions & Responsibilities)
      // Hanggar17 Modal
      'modal-hanggar-desc': 'Two internal systems for PT Hanggar Tujuh Belas: an HR management system with face-recognition attendance, and a mechanic photo-gallery web app for field work reporting.',
      'modal-hanggar-li1': 'Developed an internal HR system with face-recognition attendance via webcam',
      'modal-hanggar-li2': 'Built a two-level leave and permit approval workflow with role-based access control and Excel report exports',
      'modal-hanggar-li3': 'Built a mechanic photo-gallery and field-reporting web app with presigned-URL uploads to S3 / Cloudflare R2',
      'modal-hanggar-li4': 'Implemented NextAuth authentication and on-the-fly PDF report generation for documentation',

      // INDI Modal
      'modal-indi-desc': 'The INDI web ecosystem: a multilingual company profile website and an AI-powered driver psychometric assessment platform with automated report generation.',
      'modal-indi-li1': 'Built a driver psychometric assessment platform with a React 18 + Vite frontend and a Node.js/Express backend on PostgreSQL and Redis',
      'modal-indi-li2': 'Integrated Google OAuth 2.0 authentication and Gemini models for automated assessment report generation',
      'modal-indi-li3': 'Implemented Redis-based draft auto-save and PDF report rendering per driver risk dimension',
      'modal-indi-li4': 'Built a responsive, multilingual company profile website using React, Vite, Tailwind CSS, and Framer Motion',

      // PT ANA Modal
      'modal-ptana-desc': 'Company profile website for PT ANA Global Solusion, a provider of occupational safety (K3) training, consulting, and certification services in Indonesia.',
      'modal-ptana-li1': 'Built the company profile website with React + Vite and Framer Motion animations',
      'modal-ptana-li2': 'Implemented Embla carousel components for the service gallery and client list',
      'modal-ptana-li3': 'Managed SEO metadata and ensured a responsive layout across all screen sizes',

      // Makara Modal
      'modal-makara-desc': 'A high-performance creative agency portfolio for Makara Creative Lab, showcasing client design work and digital campaigns.',
      'modal-makara-li1': 'Developed a dynamic hero slider as the main showcase for the agency\'s work',
      'modal-makara-li2': 'Built an auto-scrolling client carousel using Embla Carousel',
      'modal-makara-li3': 'Implemented Lenis-powered smooth scrolling with Framer Motion animations',

      // ProGram Modal
      'modal-program-desc': 'Complete social media website with posts, stories, and real-time messaging features.',
      'modal-program-li1': 'Designed scalable NoSQL database architecture with MongoDB and Mongoose',
      'modal-program-li2': 'Developed RESTful API with JWT & Bcrypt authentication',
      'modal-program-li3': 'Implemented real-time communication using Socket.IO for messaging and notifications',

      // DINAMIK Modal
      'modal-dinamik-desc': 'Online competition platform with integrated registration system, file upload, and participant dashboard.',
      'modal-dinamik-li1': 'Designed and implemented PostgreSQL database architecture from scratch',
      'modal-dinamik-li2': 'Developed backend business logic for registration, payments, and submissions',
      'modal-dinamik-li3': 'Built reliable REST API using Next.js',

      // PahamSaham Modal
      'modal-paham-desc': 'Automated ETL pipeline for scraping, transforming, and visualizing stock data with analysis dashboard.',
      'modal-paham-li1': 'Designed automated Extract, Transform, Load pipeline using Apache Airflow, Python, and Docker',
      'modal-paham-li2': 'Used Selenium for scraping and extracting stock data',
      'modal-paham-li3': 'Loaded transformed data into MongoDB for visualization dashboard',

      // Dino Modal
      'modal-dino-desc': 'Arcade game with clean MVVM architecture, precise collision detection, and database-integrated leaderboard.',
      'modal-dino-li1': 'Designed modular software architecture with MVVM design pattern',
      'modal-dino-li2': 'Developed game loop and collision detection algorithms using Java Swing and AWT',
      'modal-dino-li3': 'Integrated MySQL via JDBC for data persistence and leaderboard system',

      // DIA Modal
      'modal-dia-desc': 'Backend service for digital transformation of partnership data management at UPI Directorate of Partnerships.',
      'modal-dia-li1': 'Transformed data integration process from manual systems to centralized PostgreSQL database',
      'modal-dia-li2': 'Built backend service to manage and serve partnership data',
      'modal-dia-li3': 'Improved data reporting accessibility and accuracy for the directorate',

      // LetMeCook Modal
      'modal-cook-desc': 'Cross-platform mobile app for recipe search, user management, and favorite lists.',
      'modal-cook-li1': 'Developed cross-platform mobile app (iOS/Android) from concept to implementation',
      'modal-cook-li2': 'Designed database schema using PostgreSQL',
      'modal-cook-li3': 'Implemented recipe search features, user management, and favorites',

      // ZRental Modal
      'modal-rent-desc': 'Full-stack car rental website with secure authentication system and payment gateway integration.',
      'modal-rent-li1': 'Built application backend using Laravel with Laravel Jetstream & Fortify authentication',
      'modal-rent-li2': 'Designed responsive user interface with Blade and Tailwind CSS',
      'modal-rent-li3': 'Integrated Midtrans payment gateway for booking transactions with MySQL database',
   },

   id: {
      // Navigation
      'nav-home': 'Beranda',
      'nav-about': 'Tentang Saya',
      'nav-experience': 'Pengalaman',
      'nav-projects': 'Proyek',
      'nav-contact': 'Kontak',
      
      // Home Section
      'home-name': 'Mochamad Zidan R',
      'home-desc': 'Mahasiswa Ilmu Komputer yang berspesialisasi dalam <b>Data dan Artificial Intelligence (AI)</b> dengan dasar yang kuat dalam <b>Rekayasa Perangkat Lunak.</b>',
      'home-scroll': 'Scroll ke Bawah',
      
      // About Section
      'about-title': 'Tentang Saya.',
      'about-desc': 'Mengutamakan pendekatan analitis dan fokus pada pemecahan masalah. Terbukti mampu bekerja sama dalam tim untuk menjalankan program organisasi dan berkolaborasi dengan berbagai fungsi kerja.',
      'about-label-lang': '<b>Bahasa Pemrograman:</b>',
      'about-label-tech': '<b>Teknologi:</b>',
      'about-label-tools': '<b>Tools:</b>',
      'about-btn-contact': 'Hubungi Saya',

      // Experience Section
      'experience-title': 'Pengalaman.',
      'exp-present': 'Sekarang',
      'exp-see-project': 'Lihat proyeknya',

      // PT Bahtera Lentera Jaya
      'exp-blj-role': 'Data Engineer Intern',
      'exp-blj-li1': 'Mengembangkan dan mengoptimalkan big-data pipeline untuk pengumpulan dan distribusi data profil profesional (database 851 juta+ record dengan ratusan juta pembaruan setiap bulan) menggunakan Python, Node.js, dan Go.',
      'exp-blj-li2': 'Membangun mekanisme konsistensi data yang menandai profil tidak lengkap dan menahannya dari distribusi sampai seluruh bagian data (REST dan GraphQL) lengkap, didukung index database baru.',
      'exp-blj-li3': 'Mengembangkan Real-Time Scraping API terdokumentasi OpenAPI/Swagger yang mengembalikan data profil terstruktur berdasarkan URL, dengan pengamanan API key.',
      'exp-blj-li4': 'Membangun worker session provider berbasis RabbitMQ dan bot monitoring Telegram untuk statistik operasional harian dan alerting.',

      // PT Hanggar Tujuh Belas
      'exp-hanggar-role': 'Software Developer Intern',
      'exp-hanggar-li1': 'Mengembangkan sistem manajemen HR internal dengan absensi face recognition via webcam, alur persetujuan cuti dan izin dua tingkat, role-based access control, serta ekspor laporan Excel.',
      'exp-hanggar-li2': 'Membangun web app galeri foto mekanik dan pelaporan lapangan dengan upload presigned URL ke S3 / Cloudflare R2, autentikasi NextAuth, dan generate laporan PDF secara on-the-fly.',

      // Projects Section Global
      'projects-title': 'Proyek.',

      // Project Cards
      'proj-hanggar-subtitle': 'Sistem Internal',
      'proj-hanggar-title': 'Hanggar17 - HR & Laporan Lapangan',
      'proj-hanggar-desc': 'Sistem HR dengan absensi face recognition dan aplikasi pelaporan lapangan mekanik dengan generate PDF.',

      'proj-indi-subtitle': 'Platform Web AI',
      'proj-indi-title': 'INDI - Driving Institute',
      'proj-indi-desc': 'Company profile dan platform asesmen psikometri pengemudi berbasis AI dengan laporan otomatis.',

      'proj-ptana-subtitle': 'Company Profile',
      'proj-ptana-title': 'PT ANA Global Solusion',
      'proj-ptana-desc': 'Website company profile penyedia jasa training dan sertifikasi K3 dengan animasi Framer Motion.',

      'proj-makara-subtitle': 'Portfolio Kreatif',
      'proj-makara-title': 'Makara Creative Lab',
      'proj-makara-desc': 'Portfolio agensi kreatif dengan hero slider dinamis dan smooth scrolling berbasis Lenis.',

      'proj-program-subtitle': 'MERN Stack',
      'proj-program-title': 'ProGram - Media Sosial',
      'proj-program-desc': 'Website media sosial dengan fitur pesan real-time, stories, dan postingan menggunakan MERN Stack.',
      
      'proj-dinamik-subtitle': 'Website',
      'proj-dinamik-title': 'DINAMIK 20 - Kompetisi',
      'proj-dinamik-desc': 'Website kompetisi dengan sistem pendaftaran, upload berkas, dan dashboard peserta.',
      
      'proj-paham-subtitle': 'Data Pipeline',
      'proj-paham-title': 'PahamSaham - Dashboard ETL',
      'proj-paham-desc': 'Pipeline ETL otomatis untuk scraping dan visualisasi data saham menggunakan Apache Airflow.',
      
      'proj-dino-subtitle': 'Game Java',
      'proj-dino-title': 'Dino the Annihilator',
      'proj-dino-desc': 'Game arcade dengan arsitektur MVVM, deteksi tabrakan, dan sistem leaderboard database.',
      
      'proj-dia-subtitle': 'Backend Service',
      'proj-dia-title': 'Dashboard Kerjasama DPIA',
      'proj-dia-desc': 'Layanan backend untuk mengelola data kerjasama mitra Direktorat Kerjasama UPI.',
      
      'proj-cook-subtitle': 'Aplikasi Mobile',
      'proj-cook-title': 'LetMeCook - Aplikasi Resep',
      'proj-cook-desc': 'Aplikasi mobile lintas platform untuk pencarian dan manajemen resep menggunakan Flutter.',
      
      'proj-rent-subtitle': 'Full-Stack',
      'proj-rent-title': 'ZRentCar - Rental Mobil',
      'proj-rent-desc': 'Website rental mobil dengan sistem autentikasi aman dan payment gateway Midtrans.',

      // Contact Section
      'contact-title': 'Hubungi Saya.',
      'contact-desc-1': 'Saya membaca semua email. Silakan kirimkan pesan Anda dan saya akan segera merespons.',
      'contact-desc-2': 'Mohon sertakan <b>Nama</b> dan <b>Alamat Email</b> Anda. Data ini hanya akan digunakan untuk membalas pesan Anda.',
      'contact-form-title': 'Kirim Pesan',
      'contact-ph-name': 'Nama Depan',
      'contact-ph-email': 'Alamat Email',
      'contact-ph-subject': 'Subjek',
      'contact-ph-msg': 'Pesan',
      'contact-btn-send': 'Kirim Pesan',
      'contact-social-1': 'Tidak mengirim email',
      'contact-social-2': 'Kirim pesan di media sosial',
      'contact-success': 'Pesan berhasil dikirim ✅',
      'contact-error': 'Pesan tidak terkirim (service error) ❌',
      
      // Footer
      'footer-link-home': 'Beranda',
      'footer-link-about': 'Tentang',
      'footer-link-experience': 'Pengalaman',
      'footer-link-projects': 'Proyek',
      
      // Modals Global
      'modal-role': 'Peran:',
      'modal-duration': 'Durasi:',
      'modal-tech': 'Teknologi:',
      'modal-label-about': 'Tentang Proyek',
      'modal-label-resp': 'Tanggung Jawab Utama',

      // Modal Contents
      // Hanggar17 Modal
      'modal-hanggar-desc': 'Dua sistem internal PT Hanggar Tujuh Belas: sistem manajemen HR dengan absensi face recognition, dan web app galeri foto mekanik untuk pelaporan pekerjaan di lapangan.',
      'modal-hanggar-li1': 'Mengembangkan sistem HR internal dengan absensi face recognition melalui webcam',
      'modal-hanggar-li2': 'Membangun alur persetujuan cuti dan izin dua tingkat dengan role-based access control dan ekspor laporan Excel',
      'modal-hanggar-li3': 'Membangun web app galeri foto mekanik dan pelaporan lapangan dengan upload presigned URL ke S3 / Cloudflare R2',
      'modal-hanggar-li4': 'Mengimplementasikan autentikasi NextAuth dan generate laporan PDF secara on-the-fly untuk dokumentasi',

      // INDI Modal
      'modal-indi-desc': 'Ekosistem web INDI: website company profile multibahasa dan platform asesmen psikometri pengemudi berbasis AI dengan pembuatan laporan otomatis.',
      'modal-indi-li1': 'Membangun platform asesmen psikometri pengemudi dengan frontend React 18 + Vite dan backend Node.js/Express di atas PostgreSQL dan Redis',
      'modal-indi-li2': 'Mengintegrasikan autentikasi Google OAuth 2.0 dan model Gemini untuk pembuatan laporan asesmen otomatis',
      'modal-indi-li3': 'Mengimplementasikan auto-save draft berbasis Redis dan rendering laporan PDF per dimensi risiko pengemudi',
      'modal-indi-li4': 'Membangun website company profile responsif dan multibahasa dengan React, Vite, Tailwind CSS, dan Framer Motion',

      // PT ANA Modal
      'modal-ptana-desc': 'Website company profile PT ANA Global Solusion, penyedia jasa training, konsultasi, dan sertifikasi K3 di Indonesia.',
      'modal-ptana-li1': 'Membangun website company profile dengan React + Vite dan animasi Framer Motion',
      'modal-ptana-li2': 'Mengimplementasikan komponen carousel Embla untuk galeri layanan dan daftar klien',
      'modal-ptana-li3': 'Mengelola metadata SEO dan memastikan tampilan responsif di seluruh ukuran layar',

      // Makara Modal
      'modal-makara-desc': 'Portfolio agensi kreatif berperforma tinggi untuk Makara Creative Lab, menampilkan karya desain dan kampanye digital klien.',
      'modal-makara-li1': 'Mengembangkan hero slider dinamis sebagai showcase utama karya agensi',
      'modal-makara-li2': 'Membangun carousel klien auto-scroll menggunakan Embla Carousel',
      'modal-makara-li3': 'Mengimplementasikan smooth scrolling berbasis Lenis dengan animasi Framer Motion',

      // ProGram Modal
      'modal-program-desc': 'Website media sosial lengkap dengan fitur posts, stories, dan messaging real-time.',
      'modal-program-li1': 'Merancang arsitektur database NoSQL scalable dengan MongoDB dan Mongoose',
      'modal-program-li2': 'Mengembangkan RESTful API dengan autentikasi JWT & Bcrypt',
      'modal-program-li3': 'Mengimplementasikan komunikasi real-time menggunakan Socket.IO untuk pesan dan notifikasi',

      // DINAMIK Modal
      'modal-dinamik-desc': 'Platform kompetisi online dengan sistem pendaftaran, upload berkas, dan dashboard peserta terintegrasi.',
      'modal-dinamik-li1': 'Merancang dan mengimplementasikan arsitektur database PostgreSQL dari awal',
      'modal-dinamik-li2': 'Mengembangkan logika bisnis backend untuk registrasi, pembayaran, dan submisi',
      'modal-dinamik-li3': 'Membangun REST API yang handal menggunakan Next.js',

      // PahamSaham Modal
      'modal-paham-desc': 'Pipeline ETL otomatis untuk scraping, transformasi, dan visualisasi data saham dengan dashboard analisis.',
      'modal-paham-li1': 'Merancang pipeline Extract, Transform, Load otomatis menggunakan Apache Airflow, Python, dan Docker',
      'modal-paham-li2': 'Menggunakan Selenium untuk scraping dan ekstraksi data saham',
      'modal-paham-li3': 'Memuat data yang telah ditransformasi ke MongoDB untuk dashboard visualisasi',

      // Dino Modal
      'modal-dino-desc': 'Game arcade dengan arsitektur MVVM yang bersih, deteksi tabrakan presisi, dan leaderboard terintegrasi database.',
      'modal-dino-li1': 'Merancang arsitektur perangkat lunak modular dengan pola desain MVVM',
      'modal-dino-li2': 'Mengembangkan game loop dan algoritma deteksi tabrakan menggunakan Java Swing dan AWT',
      'modal-dino-li3': 'Mengintegrasikan MySQL melalui JDBC untuk sistem persistensi data dan leaderboard',

      // DIA Modal
      'modal-dia-desc': 'Layanan backend untuk transformasi digital manajemen data kerjasama mitra Direktorat Kerjasama UPI.',
      'modal-dia-li1': 'Mentransformasi proses integrasi data dari sistem manual ke database PostgreSQL terpusat',
      'modal-dia-li2': 'Membangun layanan backend untuk mengelola dan menyajikan data kerjasama',
      'modal-dia-li3': 'Meningkatkan aksesibilitas dan akurasi pelaporan data bagi direktorat',

      // LetMeCook Modal
      'modal-cook-desc': 'Aplikasi mobile lintas platform untuk pencarian resep, manajemen user, dan daftar favorit.',
      'modal-cook-li1': 'Mengembangkan aplikasi mobile lintas platform (iOS/Android) dari konsep hingga implementasi',
      'modal-cook-li2': 'Merancang skema database menggunakan PostgreSQL',
      'modal-cook-li3': 'Mengimplementasikan fitur pencarian resep, manajemen user, dan favorit',

      // ZRental Modal
      'modal-rent-desc': 'Website rental mobil full-stack dengan sistem autentikasi aman dan integrasi payment gateway.',
      'modal-rent-li1': 'Membangun backend aplikasi menggunakan Laravel dengan autentikasi Laravel Jetstream & Fortify',
      'modal-rent-li2': 'Merancang antarmuka pengguna responsif dengan Blade dan Tailwind CSS',
      'modal-rent-li3': 'Mengintegrasikan payment gateway Midtrans untuk transaksi booking dengan database MySQL',
   }
};

let currentLang = localStorage.getItem('language') || 'en'; // Default ke English sesuai standar internasional

function switchLanguage(lang) {
   currentLang = lang;
   localStorage.setItem('language', lang);
   
   // Update button states
   document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
         btn.classList.add('active');
      }
   });
   
   // Update all text content
   document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
         // Cek apakah element adalah input atau textarea untuk mengubah placeholder
         if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translations[lang][key];
         } else {
            element.innerHTML = translations[lang][key];
         }
      }
   });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
   switchLanguage(currentLang);
   
   // Add event listeners to language buttons
   document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
         switchLanguage(btn.getAttribute('data-lang'));
      });
   });
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
   const header = document.getElementById('header')
   // Add a class if the bottom offset is greater than 50 of the viewport
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_3mdk07e', 'template_76hb46s', '#contact-form', 'knKUGPvwFAZccsfaD')
      .then(() => {
         // Show sent message
         contactMessage.textContent = translations[currentLang]['contact-success']

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         contactForm.reset()
      }, () => {
         // Show error message
         contactMessage.textContent = translations[currentLang]['contact-error']
      })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () => {
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link')
      } else {
         sectionsClass.classList.remove('active-link')
      }                                                    
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== PROJECT MODAL ===============*/
function openModal(projectId) {
   const modal = document.getElementById('modal-' + projectId)
   if (modal) {
      modal.classList.add('active')
      document.body.style.overflow = 'hidden' // Prevent scrolling
   }
}

function closeModal(projectId) {
   const modal = document.getElementById('modal-' + projectId)
   if (modal) {
      modal.classList.remove('active')
      document.body.style.overflow = 'auto' // Re-enable scrolling
   }
}

// Close modal when clicking outside
window.onclick = function(event) {
   if (event.target.classList.contains('project-modal')) {
      event.target.classList.remove('active')
      document.body.style.overflow = 'auto'
   }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
      const activeModal = document.querySelector('.project-modal.active')
      if (activeModal) {
         activeModal.classList.remove('active')
         document.body.style.overflow = 'auto'
      }
   }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true, // Animations repeat
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, 
           .about__container .section__title-1, .about__info,
           .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})
sr.reveal(`.experience__card`, {interval: 150, origin: 'bottom'})

/*=============== PROJECT MODAL ===============*/
function openModal(projectId) {
   const modal = document.getElementById('modal-' + projectId)
   modal.classList.add('show')
   document.body.style.overflow = 'hidden'
   
   // Initialize slider for this modal
   initializeSlider(modal)
}

function closeModal(projectId) {
   const modal = document.getElementById('modal-' + projectId)
   modal.classList.remove('show')
   document.body.style.overflow = 'auto'
}

// Close modal when clicking outside
window.onclick = function(event) {
   if (event.target.classList.contains('project-modal')) {
      event.target.classList.remove('show')
      document.body.style.overflow = 'auto'
   }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
      const modals = document.querySelectorAll('.project-modal.show')
      modals.forEach(modal => {
         modal.classList.remove('show')
         document.body.style.overflow = 'auto'
      })
   }
})

/*=============== IMAGE SLIDER ===============*/
function initializeSlider(modal) {
   const slider = modal.querySelector('.image-slider')
   if (!slider) return
   
   const images = slider.querySelectorAll('.slider-image')
   const dotsContainer = slider.querySelector('.slider-dots')
   
   // Clear existing dots
   dotsContainer.innerHTML = ''
   
   // Initialize all images position
   images.forEach((img, index) => {
      img.classList.remove('active', 'prev-slide', 'next-slide')
      if (index === 0) {
         img.classList.add('active')
      } else {
         img.classList.add('next-slide')
      }
   })
   
   // Create dots
   images.forEach((_, index) => {
      const dot = document.createElement('span')
      dot.classList.add('dot')
      if (index === 0) dot.classList.add('active')
      dot.onclick = () => goToSlide(slider, index)
      dotsContainer.appendChild(dot)
   })
}

function changeSlide(button, direction) {
   const slider = button.closest('.image-slider')
   const images = slider.querySelectorAll('.slider-image')
   const dots = slider.querySelectorAll('.dot')
   let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'))
   
   // Calculate new index
   const newIndex = (currentIndex + direction + images.length) % images.length
   
   // Remove all transition classes
   images.forEach((img, idx) => {
      img.classList.remove('active', 'prev-slide', 'next-slide')
      
      // Position images based on their relationship to active image
      if (idx < newIndex) {
         img.classList.add('prev-slide')
      } else if (idx > newIndex) {
         img.classList.add('next-slide')
      }
   })
   
   // Set current image to exit in the correct direction
   if (direction > 0) {
      images[currentIndex].classList.add('prev-slide')
   } else {
      images[currentIndex].classList.add('next-slide')
   }
   
   // Activate new image
   requestAnimationFrame(() => {
      images[newIndex].classList.add('active')
      dots[currentIndex].classList.remove('active')
      dots[newIndex].classList.add('active')
   })
}

function goToSlide(slider, targetIndex) {
   const images = slider.querySelectorAll('.slider-image')
   const dots = slider.querySelectorAll('.dot')
   const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'))
   
   if (currentIndex === targetIndex) return
   
   // Position all images
   images.forEach((img, idx) => {
      img.classList.remove('active', 'prev-slide', 'next-slide')
      
      if (idx < targetIndex) {
         img.classList.add('prev-slide')
      } else if (idx > targetIndex) {
         img.classList.add('next-slide')
      }
   })
   
   // Activate target image
   requestAnimationFrame(() => {
      images[targetIndex].classList.add('active')
      dots.forEach(dot => dot.classList.remove('active'))
      dots[targetIndex].classList.add('active')
   })
}

// Keyboard navigation for slider
document.addEventListener('keydown', function(event) {
   const activeModal = document.querySelector('.project-modal.show')
   if (!activeModal) return
   
   const slider = activeModal.querySelector('.image-slider')
   if (!slider) return
   
   if (event.key === 'ArrowLeft') {
      const prevBtn = slider.querySelector('.slider-btn.prev')
      changeSlide(prevBtn, -1)
   } else if (event.key === 'ArrowRight') {
      const nextBtn = slider.querySelector('.slider-btn.next')
      changeSlide(nextBtn, 1)
   }
})
