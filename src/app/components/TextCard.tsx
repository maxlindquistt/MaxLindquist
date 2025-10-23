import { ReactNode } from 'react';

type TextCardProps = {
    maxWidth?: string;
    children?: ReactNode;
};

export default function TextCard({ maxWidth = "max-w-4xl", children }: TextCardProps) {
    return (
        <div className={`border border-gray-300 rounded-lg p-4 bg-gray-800/40 shadow-2xl ${maxWidth} hover:shadow-lg transition-all duration-300`}>
            {children}
        </div>
    );
}
