interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  created_at: string;
}

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-gray-950 to-gray-900 hover:to-gray-800 transition-colors hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-2">
        <a
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          {repo.name}
        </a>
      </h3>
      <p className="text-gray-400 mb-4">{repo.description || 'No description'}</p>
      <div className="flex gap-4 text-sm text-gray-500">
        {repo.language && <span>🔷 {repo.language}</span>}
        {repo.created_at && <span>📅 {new Date(repo.created_at).toLocaleDateString()}</span>}
      </div>
    </div>
  );
}