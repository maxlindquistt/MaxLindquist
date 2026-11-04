const hobbies: { emoji: string; text: string }[] = [
    { emoji: "🥋", text: "Training mixed martial arts" },
    { emoji: "🎮", text: "Playing video games" },
    { emoji: "👫", text: "Hanging out with friends" },
];

export default function Hobbies() {
    return (
        <div className="h-full rounded-lg border border-green-100 bg-green-50/60 p-5 text-left">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Outside of code</h3>
            <ul className="space-y-2 text-gray-700">
                {hobbies.map(({ emoji, text }) => (
                    <li key={text} className="flex gap-2">
                        <span aria-hidden="true">{emoji}</span>
                        <span>{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
