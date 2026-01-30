import { getRepoDetails, getRepoNames } from './github';
import { ThemeToggle } from './ThemeToggle';
import { RepoCard } from './RepoCard';

// Mock project data - maps repo names to descriptions and metadata
export const projectMockData: Record<string, { description: string; tech: string[]; highlight?: string }> = {
  'portfolio': {
    description: 'My personal portfolio website built with Next.js 15 and Tailwind CSS. Features dark mode, responsive design, and GitHub API integration to showcase my latest work.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    highlight: 'Live'
  },
  'ecommerce-platform': {
    description: 'A full-stack e-commerce solution with cart management, Stripe payments, and an admin dashboard. Built for scalability and performance.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  'ai-chatbot': {
    description: 'An intelligent chatbot powered by OpenAI API with conversation memory, streaming responses, and a sleek chat interface.',
    tech: ['Python', 'FastAPI', 'OpenAI'],
    highlight: 'Featured'
  },
  'task-manager': {
    description: 'A collaborative task management app with real-time updates, drag-and-drop boards, and team workspaces inspired by Trello.',
    tech: ['Next.js', 'Prisma', 'Socket.io'],
  },
  'weather-app': {
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and hourly/weekly predictions.',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
  },
  'default': {
    description: 'A project showcasing modern development practices with clean architecture and thoughtful user experience design.',
    tech: ['TypeScript', 'React'],
  }
};

function getProjectData(repoName: string) {
  return projectMockData[repoName] || projectMockData['default'];
}

export default async function Home() {
  const repos = await getRepoNames();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-xl font-semibold mb-1">Martin Morel</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">New Jersey, USA</p>
        </header>

        {/* Current Position */}
        <section className="mb-12">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-zinc-900 dark:text-zinc-100">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="font-medium">Full Stack Developer</h2>
            </div>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Passionate about creating seamless user experiences and pushing the boundaries of digital interfaces.
          </p>
        </section>

        {/* Repositories */}
        <section className="mb-12">
          <h3 className="text-sm font-semibold mb-6">Recent Projects</h3>
          <div className="space-y-3">
            {repos.map((repo, index) => {
              const projectData = getProjectData(repo);
              return (
                <RepoCard
                  key={repo}
                  repo={repo}
                  description={projectData.description}
                  tech={projectData.tech}
                  highlight={projectData.highlight}
                  defaultExpanded={index === 0}
                />
              );
            })}
          </div>
        </section>

        {/* Footer with Social Links and Theme Toggle */}
        <footer className="flex items-center justify-between pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-4">
            {/* X/Twitter */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </footer>
      </div>
    </div>
  );
}
