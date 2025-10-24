export default function ContactSection() {
    return (
        <section className="p-6 my-12 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Let&apos;s build something together!</h2>
            <p className="mb-4">Feel free to reach out to me for collaborations or just to say hello!</p>
            <a
                href="mailto:max.lindquist312@gmail.com"
                className="text-blue-500 hover:underline"
            >
                max.lindquist312@gmail.com
            </a>
        </section>
    );
}