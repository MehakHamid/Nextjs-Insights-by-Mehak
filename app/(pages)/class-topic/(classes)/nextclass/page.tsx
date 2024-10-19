export default function NextClass() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 transition duration-300 hover:text-blue-800">
                Next Class Topics
            </h2>
            <div className="space-y-6">
                <div>
                    <h3
                        id="route-group"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Route Group
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> Route groups allow you to group related routes, making your routing structure clearer.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Route groups aapko mutaliq routes ko group karne ki ijazat dete hain, jo aapki routing structure ko behtar banata hai.
                    </p>
                </div>

                <div>
                    <h3
                        id="page-not-found"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        Page Not Found
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> Implementing a custom 404 page allows you to guide users when a page is not found.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> Custom 404 page implement karne se aap users ko guide kar sakte hain jab koi page nahi milta.
                    </p>
                </div>

                <div>
                    <h3
                        id="use-state"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        UseState
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> The useState hook allows you to manage state in functional components.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> UseState hook aapko functional components mein state manage karne ki ijazat deta hai.
                    </p>
                </div>

                <div>
                    <h3
                        id="use-effect"
                        className="text-xl font-semibold text-gray-800 mb-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                    >
                        UseEffect
                    </h3>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">English:</strong> The useEffect hook lets you perform side effects in functional components.
                    </p>
                    <p className="text-base text-gray-700 transition duration-300 hover:text-gray-900">
                        <strong className="underline">Roman Urdu:</strong> UseEffect hook aapko functional components mein side effects perform karne ki ijazat deta hai.
                    </p>
                </div>
            </div>
        </div>
    );
}
