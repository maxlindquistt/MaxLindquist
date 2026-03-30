import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import TechStackSection from './components/TechStackSection';
import LoadingScreen from './components/LoadingScreen';
import Reveal from './components/Reveal';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  created_at: string;
  homepage: string | null;
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

export default async function Home() {
  const repos = await getRepos();

  return (
    <main className="max-w-6xl mx-auto pb-20 lg:pb-0">
      <LoadingScreen />

      <Reveal>
        <AboutSection />
      </Reveal>

      <ProjectsSection repos={repos} />

      <TechStackSection />

      <ContactSection />
    </main>
  );
}