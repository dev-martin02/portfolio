'use client';

import { useState } from 'react';

interface RepoCardProps {
  repo: string;
  description: string;
  tech: string[];
  highlight?: string;
  defaultExpanded?: boolean;
}

export function RepoCard({ repo, description, tech, highlight, defaultExpanded = false }: RepoCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className={`group rounded-xl border transition-all duration-300 overflow-hidden
                  ${isExpanded 
                    ? 'border-zinc-300 dark:border-zinc-700 bg-zinc-100/80 dark:bg-zinc-800/50' 
                    : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
    >
      {/* Header - Always visible, clickable to toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-2 min-w-0">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-zinc-500 dark:text-zinc-400 flex-shrink-0"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100 truncate">
            {repo}
          </h4>
          {highlight && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0
                             bg-emerald-100 dark:bg-emerald-900/40 
                             text-emerald-700 dark:text-emerald-400">
              {highlight}
            </span>
          )}
        </div>
        
        {/* Chevron indicator */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`text-zinc-400 dark:text-zinc-500 flex-shrink-0 transition-transform duration-300
                      ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {/* Expandable content */}
      <div 
        className={`grid transition-all duration-300 ease-in-out
                    ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-0">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span 
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-md
                               bg-zinc-200/70 dark:bg-zinc-800 
                               text-zinc-600 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <a
                href={`https://github.com/dev-martin02/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 
                           hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                View repo
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
