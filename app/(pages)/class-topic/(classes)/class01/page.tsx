export default function Class01() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 transition duration-300 hover:text-blue-800">
                Class 01 Topics
            </h2>
            <div className="space-y-6">
                <div>
                    <h3
                        id="nextjs-introduction"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Next.js Introduction
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> Next.js is a React framework that enables developers to build server-side rendered and static web applications.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Next.js ek React framework hai jo developers ko server-side rendered aur static web applications banane ki ijazat deta hai.
                    </p>
                </div>

                <div>
                    <h3
                        id="nextjs-installation-and-structure"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Next.js Installation and Structure
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> To install Next.js, use the command: <code className="bg-gray-200 px-2 py-1 rounded">npx create-next-app</code>.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Next.js install karne ke liye, yeh command istemal karein: <code className="bg-gray-200 px-2 py-1 rounded">npx create-next-app</code>.
                    </p>
                </div>

                <div>
                    <h3
                        id="initial-error-while-creating-project"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Initial Error While Creating Project
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> Common errors include package issues or incorrect Node.js versions.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Aam galtiyan package issues ya ghalat Node.js version hoti hain.
                    </p>
                </div>
            </div>
        </div>
    )
}