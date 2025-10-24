import Image from "next/image";

export default function TechStackCard({ tech, logo }: { tech: string; logo: string }) {
    return (
        <div className="p-4 min-w-[150px] lg:min-w-[400px] 2xl:min-w-[544px] border rounded flex items-center justify-between hover:scale-105 transition-transform duration-200">
            <span>{tech}</span>
            <Image src={logo} alt={`${tech} logo`} width={40} height={40} />
        </div>
    );
}