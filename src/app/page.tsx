import RepoCard from './components/RepoCard';


type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

async function getRepos(): Promise<Repo[]> {
  const res = await fetch('http://localhost:3000/api/github/repos', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch repos');
  }
  
  const data = await res.json() as Repo[];
  return data;
}

export default async function Home() {
  const repos = await getRepos();
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {repos.map((repo: Repo) => (
          <RepoCard key={repo.id} repo={repo}/>
        ))}
      </div>
    </main>
  );
}