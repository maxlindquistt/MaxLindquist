interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {repo.name}
        </a>
      </h3>
      <p className="text-gray-600 mb-4">{repo.description || 'No description'}</p>
      <div className="flex gap-4 text-sm text-gray-500">
        {repo.language && <span>🔷 {repo.language}</span>}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </div>
  );
}