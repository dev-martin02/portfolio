import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export async function getRepoNames(): Promise<string[]> {
    // Return the last 3 repositories by creation date  
  const repos = await octokit.request('GET /user/repos?sort=created&direction=desc&per_page=10', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  });

  const filteredRepos = repos.data.filter((repo: any) => {
    
    return repo.fork === false;
  });

  return filteredRepos.slice(0, 3).map((repo: any) => repo.name);
}

export async function getRepoDetails(repoName: string): Promise<any> {
  const repo = await octokit.request('GET /repos/{owner}/{repo}/contents/readme.md', {
    owner: 'dev-martin02',
    repo: repoName,
  });
  const base64String = repo.data.content;
  const decoded = Buffer.from(base64String, 'base64').toString('utf-8');

  return null;
}
