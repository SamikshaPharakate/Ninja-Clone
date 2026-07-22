# Ninja-Clone (Coding Ninjas Clone)

**[Live Demo: https://codeninjaclone.vercel.app/](https://codeninjaclone.vercel.app/)**

A modern, responsive clone of an ed-tech platform (like Coding Ninjas), built to showcase a rich UI with smooth animations and dynamic routing.

## Features
- **Dynamic Routing:** Implemented with `react-router-dom`, featuring lazy loading and suspense for optimized performance.
- **Modern UI Components:** Various sections including Hero, Courses, AIFeatures, Mentors, Testimonials, FAQ, and more.
- **Animations:** Powered by `framer-motion` for a premium, engaging feel.
- **Styling:** Styled primarily with Tailwind CSS and standard custom CSS for precise control.
- **Icons:** Integrated `react-icons` for scalable vector iconography.

## Tech Stack
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + PostCSS
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Language:** TypeScript/JavaScript (JSX)

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SamikshaPharakate/Ninja-Clone.git
   cd Ninja-Clone
   ```
2. **Install the dependencies:**
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173/` by default.

## Building for Production
To build the app for production, run:
```bash
npm run build
```
You can then preview the production build using:
```bash
npm run preview
```

## Project Structure
- `src/components/` - Reusable UI components (Navbar, Footer, Modals, Cards).
- `src/pages/` - Main page components (Home, Courses, Reviews, Contact).
- `src/data/` - Static data for courses, stats, mentors, testimonials, etc.
- `src/App.tsx` - Main application component with routing logic.
- `src/main.tsx` - Entry point of the application.
