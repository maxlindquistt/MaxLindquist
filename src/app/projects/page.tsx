import RepoCard from '../components/RepoCard';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  created_at: string;
};

async function getRepos(): Promise<Repo[]> {
  const username = 'maxlindquistt';
  
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=created&per_page=100`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
      next: { revalidate: 300 }
    }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch repos');
  }
  
  const data = await res.json() as Repo[];
  return data;
}

export default async function ProjectsPage() {
    const repos = await getRepos();
    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-lg mb-6">
                Here are some of the projects I've worked on so far:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {repos.map((repo: Repo) => (
                    <RepoCard key={repo.id} repo={repo}/>
                ))}
            </div>
        </main>
    );
}