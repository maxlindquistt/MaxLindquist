export default function TechStackCard({ tech, logo }: { tech: string; logo: string }) {
    return (
        <div className="p-4 border rounded flex items-center justify-between hover:scale-105 transition-transform duration-200">
            <span>{tech}</span>
            <img src={logo} alt={`${tech} logo`} className="w-10 h-10" />
        </div>
    );
}