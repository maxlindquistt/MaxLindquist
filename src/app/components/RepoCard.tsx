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
    <div className="bg-[#1b5e1b] p-6 rounded-lg shadow-md text-white min-w-[300px] max-w-[350px] flex-shrink-0 flex flex-col">
      <h3 className="text-xl font-bold mb-2">
        <a
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white underline"
        >
          {repo.name}
        </a>
      </h3>
      <p className="mb-4 flex-grow">{repo.description || 'No description'}</p>
      <div className="flex gap-4 text-sm mt-auto">
        {repo.language && <span>🔷 {repo.language}</span>}
        {repo.created_at && <span>📅 {new Date(repo.created_at).toLocaleDateString()}</span>}
      </div>
    </div>
  );
}