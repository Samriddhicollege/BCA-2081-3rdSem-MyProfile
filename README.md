## Project Title

> **Profile Card Generator**

---

## Student Information

* **Name:** Sandesh KC
* **Roll Number:** 25
* **Course / Program:** BCA
* **Semester / Year:** 3rd Semester / 2026

---

## Instructor Information

* **Instructor Name:** Mr. Dipak Shrestha
* **Course Title:** React Development / Full Stack Development
* **College Name:** Samriddhi College

---

## Project Overview

> This project is a web-based Profile Card Generator developed using React and Vite.
> It allows users to create professional profile cards by entering their details, uploading a photo, and choosing from various design templates.
> The system enables users to preview their generated cards and download them as high-quality images.
> It also saves profiles locally so users can manage and review previously created profiles.
> The main goal is to provide a fast, offline-capable, and user-friendly tool to build professional digital identity cards.

---

## Objectives

* Build a responsive, fast React application using Vite
* Implement dynamic form handling and real-time preview updating
* Utilize local storage for persistent data management
* Integrate third-party libraries (html2canvas) to export React components as images
* Apply clean UI/UX design principles with component-scoped CSS

---

## Technologies Used

### Frontend

* React.js (v19)
* HTML, CSS, JavaScript
* Vite
* React Router DOM

### Other Tools

* html2canvas (for image export)
* Git & GitHub
* Vercel (for deployment)

---

## Key Features

* **Multiple Templates:** Choose from different profile card designs (e.g., ID Card, Modern, Classic).
* **Real-time Preview:** See changes instantly as you type your details.
* **Photo Upload:** Attach a local image to your profile card.
* **Image Export:** Download the finished profile card directly as a PNG image.
* **Local Storage:** Safely stores your created profiles in the browser for future access.

---

## Screens / Modules

* Home Page (Landing Page & Guest Access)
* Profile Generator Page (Form & Template Selector)
* Profile Display Page (View & Download Card)
* Profiles List Page (View all saved profiles)

---

## Installation & Setup

```bash
# Clone repository
git clone [Your GitHub Repository URL]

# Go to project folder
cd myproject

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
myproject/
│── public/              # Static assets (logos, icons)
│── src/
│   ├── components/      # Reusable React components (Button, Modal, Forms)
│   ├── css/             # Component and Page specific styles
│   ├── pages/           # Application routes (Home, Generator, Display)
│   ├── App.jsx          # Root component and Router setup
│   ├── main.jsx         # Application entry point
│── index.html
│── package.json
│── vite.config.js       # Vite configuration
│── README.md
```

---

## GitHub & Live Demo

* **GitHub Repository:** https://github.com/Samriddhicollege/BCA-2081-3rdSem-MyProfile
* **Live URL (if deployed):** https://myprofile3rd.vercel.app/

---

## Testing

* Tested UI responsiveness on different screen sizes (mobile, tablet, desktop).
* Verified local storage persistence after page reloads.
* Checked HTML2Canvas rendering accuracy across different templates.
* Tested route navigation and state transfer between pages.

---

## Challenges Faced

* Ensuring `html2canvas` correctly captured custom layouts and cross-origin image ratios.
* Managing form data, images, and layout templates with React state effectively.
* Structuring CSS to prevent style leakages between different profile templates.

---

## Future Enhancements

* Add PDF export functionality alongside image download.
* Introduce more advanced, customizable templates with color pickers.
* Add cloud synchronization (e.g., Firebase) to access profiles across devices.
* Shareable public links for generated profiles.

---

## Acknowledgement

> I would like to thank my instructor **Mr. Dipak Shrestha** for guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission.
