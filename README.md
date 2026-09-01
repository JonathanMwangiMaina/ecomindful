# EcoMindful - Embrace the 3Rs

An educational web application that teaches and encourages sustainable living through the **Reduce, Reuse, Recycle** principles. Built with Next.js 15, React 18, TypeScript, and Genkit AI.

![EcoMindful Preview](https://source.unsplash.com/featured/?sustainability,eco-friendly,green/1200x630)

## Features

- **Landing Page** - Hero section with call-to-action buttons and beautiful nature imagery
- **3R Explanation** - Interactive accordion sections explaining Reduce, Reuse, Recycle with practical examples
- **Personalized Tips** - AI-powered tool (Gemini 2.0 Flash via Genkit) that generates tailored sustainability tips based on user's lifestyle, location, and goals
- **Knowledge Quiz** - Interactive 4-question quiz with instant feedback and scoring
- **Success Stories** - Inspiring case studies of individuals, communities, and organizations practicing the 3Rs
- **Dark/Light Mode** - Persisted theme preference with system detection
- **Mobile-First Responsive Design** - Collapsible navigation with sheet-based mobile menu
- **SEO Optimized** - Sitemap, robots.txt, Open Graph, Twitter Cards, JSON-LD structured data
- **PWA Ready** - Web app manifest for installability

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| UI | React 18, Radix UI primitives, Tailwind CSS 3.4 |
| AI | Genkit 1.8, Google AI (Gemini 2.0 Flash) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod validation |
| Charts | Recharts |
| Linting | ESLint 9 (flat config), TypeScript ESLint |
| Package Manager | npm |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Google AI API key (for AI tips generation)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ecomindful

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your GOOGLE_GENAI_API_KEY to .env.local

# Run development server
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_GENAI_API_KEY` | Google AI API key for Gemini model | Yes |

## Available Scripts

```bash
npm run dev        # Start development server (Turbopack, port 9002)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
npm run genkit:dev # Start Genkit developer UI
npm run genkit:watch # Start Genkit with file watching
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── actions.ts          # Server actions (AI tips generation)
│   ├── globals.css         # Global styles & CSS variables
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page (composes all sections)
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # sitemap.xml generation
│   └── favicon.ico
├── ai/                     # Genkit AI configuration
│   ├── dev.ts              # Genkit dev entry point
│   ├── genkit.ts           # Genkit instance config
│   └── flows/
│       └── generate-3r-tips.ts  # AI flow for personalized tips
├── components/
│   ├── icons/              # Custom SVG icons (Reduce, Reuse, Recycle)
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, 3Rs, Tips, Quiz, Stories)
│   └── ui/                 # Reusable UI components (shadcn/ui style)
├── hooks/                  # Custom React hooks
│   ├── use-debounce.ts     # Debounce, localStorage, media queries, etc.
│   ├── use-mobile.tsx      # Mobile breakpoint hook
│   └── use-toast.ts        # Toast notification system
├── lib/
│   ├── constants.ts        # Shared data constants (R_DATA, QUIZ_DATA, etc.)
│   ├── seo.ts              # SEO metadata configuration
│   └── utils.ts            # Utility functions (cn, etc.)
└── types/                  # TypeScript type definitions
```

## Design System

### Colors (CSS Variables)

| Role | Light | Dark | Hex (Light) |
|------|-------|------|-------------|
| Primary | `--primary` | `--primary` | `#388E3C` (Forest Green) |
| Background | `--background` | `--background` | `#F5F5DC` (Light Beige) |
| Accent | `--accent` | `--accent` | `#FFA07A` (Soft Orange) |
| Foreground | `--foreground` | `--foreground` | Dark Green |

### Typography

- **Headlines**: Poppins (400, 500, 600, 700)
- **Body**: PT Sans (400, 700)

### Icons

Custom hand-drawn style SVG icons for each R:
- `ReduceIcon` - Minimize waste
- `ReuseIcon` - Circular arrow
- `RecycleIcon` - Three chasing arrows

## AI Tips Generation

The personalized tips feature uses **Genkit** with **Google's Gemini 2.0 Flash** model:

1. User fills out their lifestyle, location, and conservation goals
2. Server action calls the Genkit flow
3. Prompt includes context and strict output schema (5-7 tips, 20-500 chars each)
4. Results displayed with animated entrance

### Prompt Engineering Highlights

- Temperature: 0.7 for creativity within constraints
- Max tokens: 2048
- Zod schema validates: min 3 tips, max 8, each 20-500 chars
- Covers at least 2 of 3 Rs per response
- Includes local/regional considerations

## Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Focus-visible outlines
- Color contrast ratios (WCAG AA)
- Keyboard navigable
- Reduced motion support
- Screen reader friendly

## Performance

- Static generation (SSG) for all pages
- Turbopack for fast dev builds
- Optimized package imports (lucide-react, @radix-ui)
- Image optimization via Next.js Image component
- Code splitting by route
- First Load JS: ~138 kB (101 kB shared)

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Add `GOOGLE_GENAI_API_KEY` in Vercel project settings.

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- ESLint + TypeScript strict mode
- Prettier formatting (via ESLint)
- Conventional commits
- No `any` types (use `unknown` or proper types)

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- [Genkit](https://firebase.google.com/docs/genkit) for AI workflow orchestration
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder imagery
- [shadcn/ui](https://ui.shadcn.com/) for component patterns

---

**EcoMindful** - Small actions, big impact. 🌱