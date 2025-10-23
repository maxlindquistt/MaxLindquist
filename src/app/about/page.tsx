import TechStack from "../components/TechStack";
import TextCard from "../components/TextCard";

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto p-6 text-center md:text-left">

            <TextCard maxWidth="max-w-full">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4">
                Hi, I'm Max Lindquist — a full-stack developer from <strong>Vimmerby, Sweden</strong>, currently studying <strong>Web Programming at Linnaeus University in Kalmar.</strong>
            </p>

            <p className="text-lg mb-6">
                I'm passionate about building web applications that combine clean design, smooth user experiences, and robust technical foundations.
            </p>

            <h3 className="text-3xl font-bold mb-4">My Journey</h3>
            <p className="text-lg mb-4">
                Growing up in a small town taught me to stay curious and hands-on — two traits that naturally led me toward programming.
            </p>

            <p className="text-lg mb-4">
                What began as a fascination with how websites worked quickly turned into a drive to <span className="italic">build</span> them myself.
            </p>

            <p className="text-lg mb-4">
                Today, I focus on creating full-stack solutions that are both functional and beautiful, whether it's a front-end interface or a scalable back-end system.
            </p>

            <p className="text-lg mb-6">
                I enjoy projects that challenge me to think about both <strong>user experience</strong> and <strong>performance</strong>.
            </p>
            </TextCard>
            <br /><br />

            <TextCard maxWidth="max-w-full">
            <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
            <TechStack />

            <h3 className="text-3xl font-bold mb-4 mt-8">Outside of Coding</h3>
            <p className="text-lg mb-4">
                When I'm not coding, you can find me:
            </p>
            <div className="mb-4 p-4 border rounded text-center hover:scale-105 transition-transform duration-200">
                <p className="text-lg">Playing video games 🎮</p>
            </div>
            <div className="mb-4 p-4 border rounded text-center hover:scale-105 transition-transform duration-200">
                <p className="text-lg">Training mixed martial arts (MMA) 🥋</p>
            </div>
            <div className="mb-4 p-4 border rounded text-center hover:scale-105 transition-transform duration-200">
                <p className="text-lg">Or just hanging out with friends and enjoying good company ☕</p>
            </div>
            </TextCard>
        </main>
    );
}