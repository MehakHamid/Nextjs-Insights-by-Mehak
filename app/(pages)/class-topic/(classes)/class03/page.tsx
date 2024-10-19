export default function Class03() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 transition duration-300 hover:text-blue-800">
                Class 03 Topics
            </h2>
            <div className="space-y-6">
                <div>
                    <h3
                        id="nested-route"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Nested Route
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> Nested routes allow you to organize routes within other routes for better structure.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Nested routes aapko routes ko doosre routes ke andar organize karne ki ijazat dete hain taake behtar structure ban sake.
                    </p>
                </div>

                <div>
                    <h3
                        id="navigation"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Navigation
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> Next.js provides a powerful Link component for navigation between pages.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Next.js navigation ke liye aik powerful Link component faraham karta hai jo pages ke darmiyan navigate karne mein madadgar hai.
                    </p>
                </div>

                <div>
                    <h3
                        id="layout"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Layout
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> Layouts allow you to define a consistent structure across multiple pages.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Layouts aapko mukhtalif pages mein consistent structure define karne ki ijazat dete hain.
                    </p>
                </div>
            </div>
        </div>
    );
}
