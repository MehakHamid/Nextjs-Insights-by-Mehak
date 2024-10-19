import Link from 'next/link';

const classes = [
    {
        className: "Class 01",
        link: "/class-topic/class01",
        topics: [
            { title: "Next.js Introduction" },
            { title: "Next.js Installation and Structure" },
            { title: "Initial Error While Creating Project" }
        ]
    },
    {
        className: "Class 02",
        link: "/class-topic/class02",
        topics: [
            { title: "What Are Next.js Components?" },
            { title: "Confusion About Component" },
            { title: "Props" },
            { title: "Route" }
        ]
    },
    {
        className: "Class 03",
        link: "/class-topic/class03",
        topics: [
            { title: "Nested Route" },
            { title: "Navigation" },
            { title: "Layout" }
        ]
    },
    {
        className: "Class 04",
        link: "/class-topic/class04",
        topics: [
            { title: "Dynamic Route" },
            { title: "TypeScript Topic" },
            { title: "Map and Array Method" },
            { title: "Async/Await" }
        ]
    },
    {
        className: "Class 05",
        link: "/class-topic/class05",
        topics: [
            { title: "Static and Dynamic Page Rendering" },
            { title: "Image Component" },
            { title: "Data Fetching Through API" }
        ]
    },
    {
        className: "Upcoming Class Topics",
        link: "/class-topic/nextclass",
        topics: [
            { title: "Route Group" },
            { title: "Page Not Found" },
            { title: "UseState" },
            { title: "UseEffect" }
        ]
    }
];

export default function ClassTopics() {
    return (
        <div className="m-20">
            <h1 className="text-3xl font-bold text-center mb-10">Class Topics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {classes.map((classItem, index) => (
                    <div key={index} className="bg-cyan-300 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-xl font-semibold mb-4">
                            <Link href={classItem.link} className="text-blue-600 underline hover:text-blue-800">
                                {classItem.className}
                            </Link>
                        </h2>
                        <ul className="list-disc ml-5 mb-4 space-y-2">
                            {classItem.topics.map((topic, topicIndex) => (
                                <li key={topicIndex}>
                                    <Link
                                        href={`${classItem.link}#${topic.title.replace(/\s+/g, '-').toLowerCase()}`}
                                        className="text-black underline hover:text-blue-700"
                                    >
                                        {topic.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href={classItem.link} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                            View This Class
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
