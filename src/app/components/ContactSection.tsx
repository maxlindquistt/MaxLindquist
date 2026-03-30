import Reveal from "./Reveal";

export default function ContactSection() {
    return (
        <section id="contact" className="p-6 my-12 bg-white border border-gray-100 shadow-md rounded-lg text-center">
            <Reveal direction="left"><h2 className="text-2xl font-bold mb-4">Let&apos;s build something together!</h2></Reveal>
            <Reveal direction="up" delay={150}>
                <p className="mb-4">Feel free to reach out to me for collaborations or just to say hello!</p>
                <a
                    href="mailto:max.lindquist312@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    max.lindquist312@gmail.com
                </a>
            </Reveal>
        </section>
    );
}
