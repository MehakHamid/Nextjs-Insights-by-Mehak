"use client";

import { useState } from "react";

export default function Definitions() {
  // State to keep track of which topic is expanded
  const [expandedTopics, setExpandedTopics] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state of the clicked topic
    }));
  };

  const definitions = [
    {
      topic: "What Are Next.js Components?",
      english:
        "Components in Next.js are reusable building blocks for your UI. They can be functional or class components.",
      urdu: "Next.js mein components aise reusable building blocks hain jo aapke UI ke liye hain. Ye functional ya class components ho sakte hain.",
      example: "Example: A Header component can be created to display navigation links."
    },
    {
      topic: "Client Components",
      english:
        "Client components are rendered on the client side, allowing for interactivity and dynamic behavior. They can use browser-specific features and hooks like useState and useEffect.",
      urdu: "Client components ko client side par render kiya jata hai, jo interactivity aur dynamic behavior ko ijazat dete hain. Ye browser-specific features aur hooks jaise useState aur useEffect ka istemal kar sakte hain.",
      example: "Example: An example of a client component could be a form that updates the state as a user types."
    },
    {
      topic: "Server Components",
      english:
        "Server components are rendered on the server, allowing for improved performance and SEO. They can fetch data directly from the server before sending the HTML to the client.",
      urdu: "Server components ko server par render kiya jata hai, jo performance aur SEO ko behtar banata hai. Ye HTML ko client ko bhejne se pehle seedha server se data fetch kar sakte h",
      example: "Example: An example of a server component could be a dashboard that displays data fetched from a database."
    },
    {
      topic: "Props",
      english: "Props are short for properties. They are used to pass data from one component to another.",
      urdu: "Props properties ka short form hain. Ye ek component se doosre component tak data pass karne ke liye istemal hoti hain.",
      example: "Example: You can pass a title prop to a Header component to display a dynamic title.",
    },
    {
      topic: "Dynamic Route",
      english: "Dynamic routes are created using brackets in file names, allowing you to create pages that respond to URL parameters.",
      urdu: "Dynamic routes ko file names mein brackets ka istemal karke banaya jata hai, jo aapko aise pages banane ki ijazat dete hain jo URL parameters ke liye respond karte hain.",
      example: "Example: pages/blog/[id].js allows you to access blog posts by their ID."
    },
    {
      topic: "Nested Route",
      english: "Nested routes are created by placing files within folders in the pages directory. This allows for hierarchical routing.",
      urdu: "Nested routes pages directory mein folders ke andar files rakh kar banai jati hain. Ye hierarchical routing ki ijaad karti hai.",
      example: "Example: pages/blog/index.js creates a route at /blog, and pages/blog/[id].js can create dynamic routes."
    },
    {
      topic: "Static and Dynamic Page Rendering",
      english: "Next.js supports both static site generation (SSG) and server-side rendering (SSR), giving you flexibility in how content is delivered.",
      urdu: "Next.js dono static site generation (SSG) aur server-side rendering (SSR) ko support karta hai, jo aapko content deliver karne ka flexibility deta hai.",
      example: "Example: Use SSG for blog posts and SSR for user-specific data."
    },
    {
      topic: "Pre-rendering",
      english: "Pre-rendering is the process of generating HTML at build time using Static Site Generation (SSG). It improves performance by serving pre-built pages.",
      urdu: "Pre-rendering ek aise process hai jahan HTML build time par Static Site Generation (SSG) ka istemal karke generate hota hai. Ye performance ko behtar banata hai kyunki pre-built pages serve kiye jate hain.",
      example: "Example: An example of pre-rendering is a blog site where each post is generated as a static HTML file at build time."
    },
    {
      topic: "Server-side Rendering",
      english: "Server-side Rendering (SSR) generates HTML on each request, allowing for dynamic content that changes based on user data or interactions.",
      urdu: "Server-side Rendering (SSR) har request par HTML generate karta hai, jo user data ya interactions ke basis par dynamic content ko ijazat deta hai.",
      example: "Example: An example of SSR is an e-commerce site that shows product availability based on the latest inventory data."
    },
    {
      topic: "Link",
      english: "A link is a clickable element that directs users to another resource or page. In Next.js, this is often done using the <Link> component.",
      urdu: "Link ek clickable element hai jo users ko kisi doosre resource ya page par le jata hai. Next.js mein ye aksar <Link> component ka istemal karke kiya jata hai.",
      example: "Example: Use <Link href='/about'>About</Link> to create a link to the About page."
    },
    {
      topic: "Navigation",
      english: "Navigation refers to the overall system or structure that allows users to move between different pages or sections of a website.",
      urdu: "Navigation aise system ya structure ko darust karta hai jo users ko website ke mukhtalif pages ya sections ke darmiyan move karne ki ijazat deta hai.",
      example: "Example: A navigation bar that contains links to Home, About, and Contact pages."
    },
    {
      topic: "Loading and Error Handling",
      english: "Next.js provides built-in support for loading states and error handling using error boundaries and loading components.",
      urdu: "Next.js loading states aur error handling ke liye built-in support deta hai, jo error boundaries aur loading components ka istemal karta hai.",
      example: "Example: You can show a loading spinner while data is being fetched."
    },
    {
      topic: "Image Component",
      english: "The Next.js Image component optimizes images on-demand, improving loading performance and user experience.",
      urdu: "Next.js Image component on-demand images ko optimize karta hai, jo loading performance aur user experience ko behtar banata hai.",
      example: "Example: Use <Image src='/image.jpg' alt='Description' width={500} height={300} />."
    },
    {
      topic: "Data Fetching",
      english: "Next.js supports various data-fetching methods such as getStaticProps, getServerSideProps, and client-side fetching.",
      urdu: "Next.js mukhtalif data-fetching methods ko support karta hai jaise getStaticProps, getServerSideProps, aur client-side fetching.",
      example: "Example: Use getStaticProps to fetch data at build time."
    },
    {
      topic: "UseState",
      english: "The useState hook allows you to add state to functional components, enabling dynamic behavior in your UI.",
      urdu: "useState hook aapko functional components mein state add karne ki ijazat deta hai, jo aapke UI mein dynamic behavior ko enable karta hai.",
      example: "Example: const [count, setCount] = useState(0); initializes a count state."
    },
    {
      topic: "UseEffect",
      english: "The useEffect hook lets you perform side effects in your components, such as data fetching and subscriptions.",
      urdu: "useEffect hook aapko apne components mein side effects perform karne ki ijazat deta hai, jaise data fetching aur subscriptions.",
      example: "Example: useEffect(() => { fetchData(); }, []); fetches data on component mount."
    },
    {
      topic: "Page Not Found",
      english: "Next.js provides a default 404 page when a route does not match any existing pages in the pages directory.",
      urdu: "Next.js ek default 404 page provide karta hai jab koi route pages directory mein maujood pages se match nahi karta.",
      example: "Example: Create a custom 404.js in the pages directory to customize the 404 page."
    },
    {
      topic: "Middleware",
      english: "Middleware in Next.js allows you to run code before a request is completed, useful for authentication and redirects.",
      urdu: "Next.js mein Middleware aapko request complete hone se pehle code chalane ki ijazat deta hai, jo authentication aur redirects ke liye faida mand hai.",
      example: "Example: Use middleware to check if a user is authenticated before accessing a route."
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {definitions.map((definition, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-4">
          <h3
            className="font-bold cursor-pointer text-xl"
            onClick={() => toggleExpand(index)}
          >
            {definition.topic}
          </h3>
          {expandedTopics[index] && (
            <div className="mt-2">
              <p className="text-gray-700"><strong>English:</strong> {definition.english}</p>
              <p className="text-gray-700"><strong>Urdu:</strong> {definition.urdu}</p>
              <p className="text-gray-700"><strong>Example:</strong> {definition.example}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
