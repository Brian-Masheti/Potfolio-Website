# Brian Masheti Portfolio

A modern, responsive portfolio website showcasing expertise in data analysis, software engineering, and customer service excellence. Built with React, TypeScript, and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)
![PWA](https://img.shields.io/badge/PWA-Ready-orange)

## 🚀 Features

### 📱 Progressive Web App (PWA)
- **Installable** on desktop and mobile devices
- **Offline functionality** with service worker caching
- **App-like experience** with standalone display mode
- **Optimized performance** with fast loading times

### 🎨 Modern Design
- **Responsive design** that works on all devices
- **Dark/Light mode** toggle with system preference detection
- **Smooth animations** and transitions
- **Professional UI** with shadcn/ui components
- **Custom color schemes** for different service areas

### 💬 Interactive Chat System
- **AI-powered contact form** with conversational interface
- **Multi-step conversation flow** (intro → name → email → chat)
- **Real-time typing indicators** and message bubbles
- **EmailJS integration** for direct message delivery
- **Grammarly integration** for enhanced text editing

### 🛠️ Technical Excellence
- **TypeScript** for type safety and better development experience
- **Modern React patterns** with hooks and functional components
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and optimized builds
- **ESLint** for code quality and consistency

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── chat/            # Chat system components
│   ├── About.tsx        # About section
│   ├── Hero.tsx         # Landing page hero
│   ├── Services.tsx     # Services overview
│   ├── DataAnalysis.tsx # Data analysis projects
│   ├── SoftwareEngineering.tsx # Software projects
│   ├── CustomerService.tsx # Customer service experience
│   ├── Skills.tsx       # Technical skills showcase
│   ├── Resume.tsx       # Resume download section
│   ├── ChatContact.tsx  # Interactive contact form
│   └── Navigation.tsx   # Main navigation
├── hooks/               # Custom React hooks
│   ├── useChatContact.ts # Chat functionality
│   └── use-toast.ts     # Toast notifications
├── types/               # TypeScript type definitions
│   └── chat.ts          # Chat-related types
├── utils/               # Utility functions
│   └── emailService.ts  # EmailJS integration
├── pages/               # Page components
│   └── Index.tsx        # Main page with section routing
└── lib/                 # Library configurations
```

## 🎯 Key Sections

### 1. **Hero Section**
- Professional introduction
- Call-to-action buttons
- Animated background elements

### 2. **About**
- Professional background
- Education and certifications
- Personal mission statement

### 3. **Services**
- Data Analysis & Visualization
- Software Engineering
- Customer Service Excellence

### 4. **Skills & Technologies**
- Technical skills with proficiency levels
- Tools and frameworks
- Areas of interest and learning path

### 5. **Resume**
- Downloadable PDF and Word formats
- Online viewing option
- Professional highlights

### 6. **Interactive Contact**
- Conversational chat interface
- Direct email integration
- WhatsApp contact option

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.3.1** - Modern React with hooks
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.1** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### State Management & Routing
- **React Router DOM 6.26.2** - Client-side routing
- **TanStack Query 5.56.2** - Server state management
- **Custom hooks** - Local state management

### Communication & Integration
- **EmailJS 4.4.1** - Email service integration
- **React Hook Form 7.53.0** - Form handling
- **Zod 3.23.8** - Schema validation

### PWA & Performance
- **Service Worker** - Offline functionality
- **Web App Manifest** - PWA configuration
- **Optimized assets** - Fast loading times

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript ESLint** - TypeScript-specific linting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <CWD>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📧 EmailJS Configuration

The contact form uses EmailJS for sending messages. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/utils/emailService.ts`:
   ```typescript
   emailjs.init('YOUR_PUBLIC_KEY');
   
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
     // template variables
   });
   ```

## 🎨 Customization

### Color Scheme
The portfolio uses custom OKLCH colors for different sections:
- **Data Analysis**: `oklch(84.1% 0.238 128.85)` (Green)
- **Software Engineering**: `oklch(54.1% 0.281 293.009)` (Purple)
- **Customer Service**: `oklch(62.3% 0.214 259.815)` (Blue)
- **Skills Section**: `oklch(63.7% 0.237 25.331)` (Orange-Red)

### Adding New Sections
1. Create component in `src/components/`
2. Add route in `src/pages/Index.tsx`
3. Update navigation in `src/components/Navigation.tsx`

### Modifying Content
- **Personal info**: Update `src/components/Hero.tsx` and `src/components/About.tsx`
- **Projects**: Modify project arrays in service components
- **Skills**: Update skill categories in `src/components/Skills.tsx`
- **Resume**: Update download links in `src/components/Resume.tsx`

## 📱 PWA Features

### Installation
- **Desktop**: Install button appears in browser address bar
- **Mobile**: "Add to Home Screen" prompt on supported browsers

### Offline Support
- **Service Worker** caches essential resources
- **Offline fallback** for basic functionality
- **Background sync** for form submissions

### App-like Experience
- **Standalone display** mode (no browser UI)
- **Custom splash screen** with app icon
- **Native app feel** on mobile devices

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📊 Performance Optimizations

- **Code splitting** with React.lazy()
- **Image optimization** with proper formats and sizes
- **Bundle optimization** with Vite
- **CSS purging** with Tailwind CSS
- **Service worker caching** for faster subsequent loads

## 🌐 Browser Support

- **Chrome** 90+ (full PWA support)
- **Firefox** 88+ (partial PWA support)
- **Safari** 14+ (limited PWA support)
- **Edge** 90+ (full PWA support)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Brian Masheti**
- Email: savatiabrian92@gmail.com
- LinkedIn: [Brian Masheti](https://linkedin.com/in/brian-masheti)
- Location: Nairobi, Kenya

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions, please contact:
- **Email**: savatiabrian92@gmail.com
- **WhatsApp**: +254 741 754 002

---

**Built with ❤️ by Brian Masheti**