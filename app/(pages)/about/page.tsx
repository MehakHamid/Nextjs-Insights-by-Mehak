export default function About() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mt-10 underline">About Next.js</h1>
            <p className="mt-4 text-lg">
                Next.js is a React framework that enables developers to build fast and scalable web applications with ease. 
                It provides features like server-side rendering, static site generation, and automatic code splitting.
            </p>

            <h2 className="text-2xl font-semibold mt-8">What is Next.js?</h2>
            <p className="mt-4">
                Next.js is a React framework that allows for the creation of web applications that are both fast and user-friendly. 
                It optimizes the development process by providing a range of built-in features such as routing, API endpoints, and performance optimizations.
            </p>

            <h2 className="text-2xl font-semibold mt-8">How Does It Work?</h2>
            <p className="mt-4">
                Next.js combines the best features of static and dynamic rendering. It allows developers to generate static pages 
                at build time or render pages on the server on each request. This means that you can create a site that is both fast and SEO-friendly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 underline">Key Features</h2>
            <ul className="list-disc ml-5 mt-4">
                <li>Server-side rendering (SSR) for dynamic content</li>
                <li>Static site generation (SSG) for optimized performance</li>
                <li>API routes to build serverless functions</li>
                <li>File-based routing system</li>
                <li>Image optimization for faster loading times</li>
                <li>Automatic code splitting for improved performance</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
            <p className="mt-4">
                Next.js is a powerful framework for building modern web applications. 
                With its rich feature set and ease of use, it is an excellent choice for both small projects and large-scale applications.
            </p>
        </div>
    );
}