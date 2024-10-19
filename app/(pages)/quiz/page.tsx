"use client"; // Ensure this is a client-side component

import { useState } from 'react';
import emailjs from 'emailjs-com';

// Sample quiz topics and questions
const classTopics = [
    {
        title: "Components",
        questions: [
            {
                question: "What is a React component?",
                options: ["A function or class that returns HTML", "A part of CSS", "A server-side element"],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a correct way to declare a functional component?",
                options: ["function Component() {}", "let Component() {}", "class Component {}"],
                correctAnswer: 0
            },
            {
                question: "What is the purpose of a component in Next.js?",
                options: ["To divide UI into reusable pieces", "To handle routing", "To store global state"],
                correctAnswer: 0
            },
            {
                question: "How are components imported in Next.js?",
                options: ["import Component from './Component'", "require('./Component')", "load('./Component')"],
                correctAnswer: 0
            },
            {
                question: "What is a higher-order component (HOC)?",
                options: ["A function that returns a component", "A function that renders props", "A component that loops through arrays"],
                correctAnswer: 0
            },
            {
                question: "How can you pass props to a component?",
                options: ["By using attributes in JSX", "By creating a global variable", "By declaring it inside the component"],
                correctAnswer: 0
            },
            {
                question: "What is the main difference between functional and class components?",
                options: ["Functional components are stateless, class components are stateful", "Class components render faster", "Functional components do not return JSX"],
                correctAnswer: 0
            },
            {
                question: "What hook can you use in functional components to introduce state?",
                options: ["useState", "useProps", "useEffect"],
                correctAnswer: 0
            },
            {
                question: "Which lifecycle method is similar to useEffect in functional components?",
                options: ["componentDidMount", "componentWillUnmount", "render"],
                correctAnswer: 0
            },
            {
                question: "What do React components return to describe what should appear on the screen?",
                options: ["JSX", "HTML", "JSON"],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Props",
        questions: [
            {
                question: "What are props in React?",
                options: ["Arguments passed to components", "A hook used in components", "Global variables for all components"],
                correctAnswer: 0
            },
            {
                question: "How are props passed to a child component?",
                options: ["As attributes in JSX", "By importing the props file", "By declaring a function in the child component"],
                correctAnswer: 0
            },
            {
                question: "Which of these is the correct way to access props in a functional component?",
                options: ["props.name", "this.props.name", "props.state.name"],
                correctAnswer: 0
            },
            {
                question: "Can you pass functions as props?",
                options: ["Yes", "No", "Only in class components"],
                correctAnswer: 0
            },
            {
                question: "What is a default prop?",
                options: ["A fallback value for a missing prop", "A prop used in class components", "A required prop"],
                correctAnswer: 0
            },
            {
                question: "How can you set default values for props?",
                options: ["Using defaultProps", "By setting it in useState", "In the component's constructor"],
                correctAnswer: 0
            },
            {
                question: "How do props differ from state?",
                options: ["Props are read-only, state is managed within the component", "Props are mutable", "State is passed to child components"],
                correctAnswer: 0
            },
            {
                question: "Can props be updated by the child component?",
                options: ["No", "Yes", "Only if passed by reference"],
                correctAnswer: 0
            },
            {
                question: "Which hook is commonly used to initialize state from props?",
                options: ["useState", "useEffect", "useProps"],
                correctAnswer: 0
            },
            {
                question: "What happens if a prop is not passed to a component?",
                options: ["The component might break unless default values are provided", "The component automatically assigns a random value", "The prop is ignored"],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Dynamic Routes",
        questions: [
            {
                question: "What are dynamic routes in Next.js?",
                options: ["Routes that are generated based on data", "Static pages", "Server routes"],
                correctAnswer: 0
            },
            {
                question: "How are dynamic routes defined in Next.js?",
                options: ["Using brackets [ ] in the filename", "By writing JavaScript functions", "By declaring variables in the page"],
                correctAnswer: 0
            },
            {
                question: "Which Next.js hook is used to access dynamic route parameters?",
                options: ["useRouter", "useParams", "getStaticProps"],
                correctAnswer: 0
            },
            {
                question: "Can dynamic routes be used with getStaticProps in Next.js?",
                options: ["Yes", "No", "Only in development mode"],
                correctAnswer: 0
            },
            {
                question: "What does getStaticPaths do in dynamic routing?",
                options: ["Defines which paths to pre-render", "Fetches data from an API", "Stores route data in the browser"],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a valid dynamic route file name?",
                options: ["[id].js", "user.id.js", "[page]/index.js"],
                correctAnswer: 0
            },
            {
                question: "Can you nest dynamic routes in Next.js?",
                options: ["Yes", "No", "Only one level deep"],
                correctAnswer: 0
            },
            {
                question: "In which method would you typically fetch data for dynamic routes?",
                options: ["getStaticProps", "useEffect", "useState"],
                correctAnswer: 0
            },
            {
                question: "What is fallback in getStaticPaths?",
                options: ["It controls how Next.js handles pages not returned by getStaticPaths", "It is an error-handling mechanism", "It provides a default layout"],
                correctAnswer: 0
            },
            {
                question: "Can you use dynamic routes with server-side rendering in Next.js?",
                options: ["Yes", "No", "Only with custom configurations"],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Nested Routes",
        questions: [
            {
                question: "What are nested routes in Next.js?",
                options: ["Routes within routes", "Dynamic routes", "Server-side rendered routes"],
                correctAnswer: 0
            },
            {
                question: "How are nested routes created in Next.js?",
                options: ["By placing files in subdirectories under the pages folder", "Using query parameters", "By creating a new layout component"],
                correctAnswer: 0
            },
            {
                question: "Which of the following folder structure represents nested routing?",
                options: ["/pages/about/[id].js", "/pages/blog/[id]/comments.js", "/pages/[id]/[name].js"],
                correctAnswer: 1
            },
            {
                question: "Can nested routes also be dynamic?",
                options: ["Yes", "No", "Only at the top level"],
                correctAnswer: 0
            },
            {
                question: "Which hook allows accessing route information inside nested routes?",
                options: ["useRouter", "useParams", "getStaticProps"],
                correctAnswer: 0
            },
            {
                question: "What happens if a nested route does not match a valid path?",
                options: ["It shows a 404 page", "It defaults to the main page", "It shows the next available route"],
                correctAnswer: 0
            },
            {
                question: "Can nested routes have their own layouts?",
                options: ["Yes", "No", "Only in SSR"],
                correctAnswer: 0
            },
            {
                question: "How do you define layouts for nested routes?",
                options: ["By creating a layout.js file in the directory", "By importing Layout from '_app.js'", "By wrapping the component in a layout function"],
                correctAnswer: 0
            },
            {
                question: "What happens if you don't specify a layout for a nested route?",
                options: ["It uses the parent route’s layout", "It breaks the route", "It uses a default layout"],
                correctAnswer: 0
            },
            {
                question: "What is the purpose of nested routes?",
                options: ["To organize related pages", "To add authentication", "To separate static and dynamic routes"],
                correctAnswer: 0
            }
        ]
    },
        

            {
                title: "Class 05: Static and Dynamic Page Rendering",
                questions: [
                    {
                        question: "What is static page rendering in Next.js?",
                        options: ["Pre-rendering pages at build time", "Rendering pages on every request", "Rendering pages on the client side"],
                        correctAnswer: 0
                    },
                    {
                        question: "What method is used for static page generation?",
                        options: ["getStaticProps", "getServerSideProps", "useEffect"],
                        correctAnswer: 0
                    },
                    {
                        question: "Which Next.js method is used for dynamic page rendering?",
                        options: ["getServerSideProps", "useStaticRendering", "getStaticPaths"],
                        correctAnswer: 0
                    },
                    {
                        question: "What does getStaticPaths do?",
                        options: ["It defines dynamic routes for static generation", "It fetches data for SSR", "It initializes a client-side state"],
                        correctAnswer: 0
                    },
                    {
                        question: "When should you use getStaticProps?",
                        options: ["For content that doesn’t change often", "For data that updates frequently", "For pages that rely on user input"],
                        correctAnswer: 0
                    },
                    {
                        question: "Which feature in Next.js allows pages to be rendered on each request?",
                        options: ["Server-side rendering (SSR)", "Client-side rendering (CSR)", "Static rendering"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is ISR (Incremental Static Regeneration)?",
                        options: ["Allows static pages to be updated after build", "Fetches data on every request", "Provides real-time updates to users"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the main difference between getStaticProps and getServerSideProps?",
                        options: ["getStaticProps runs at build time, getServerSideProps runs on each request", "getStaticProps is used for SSR", "getServerSideProps is used for static generation"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can static and dynamic rendering be combined in a single app?",
                        options: ["Yes", "No", "Only with custom configurations"],
                        correctAnswer: 0
                    },
                    {
                        question: "How is revalidation controlled in ISR?",
                        options: ["Using the revalidate key in getStaticProps", "By using useEffect", "Through the pages directory"],
                        correctAnswer: 0
                    }
                ]
            },
            {
                title: "Loading and Error Handling",
                questions: [
                    {
                        question: "How can you handle loading states in Next.js?",
                        options: ["By using a loading spinner or skeleton component", "By using the getStaticProps method", "By using a redirect"],
                        correctAnswer: 0
                    },
                    {
                        question: "Which hook can be used for handling loading in a component?",
                        options: ["useState and useEffect", "getStaticProps", "useRouter"],
                        correctAnswer: 0
                    },
                    {
                        question: "How does Next.js handle error pages?",
                        options: ["By providing a custom 404 or 500 page", "By redirecting to the home page", "By rendering a server error"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the default error page provided by Next.js?",
                        options: ["404 and 500", "200", "403 and 404"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you customize the error pages in Next.js?",
                        options: ["Yes, by creating custom 404.js or 500.js files", "No", "Only 404 pages can be customized"],
                        correctAnswer: 0
                    },
                    {
                        question: "How do you handle errors in getServerSideProps?",
                        options: ["By returning an error key in the return object", "By throwing an error", "By using useState"],
                        correctAnswer: 0
                    },
                    {
                        question: "How can you handle errors in API routes in Next.js?",
                        options: ["By using try-catch blocks in API handlers", "By using getServerSideProps", "By writing errors in a static file"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the recommended approach to display loading spinners in Next.js?",
                        options: ["Using useState and conditional rendering", "Using getStaticPaths", "Using Server-Side rendering"],
                        correctAnswer: 0
                    },
                    {
                        question: "How can you prevent a page from loading indefinitely in Next.js?",
                        options: ["By setting a timeout for API calls", "By using a loop in the component", "By using getStaticProps"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the purpose of the _error.js file in Next.js?",
                        options: ["To create custom error handling for all errors", "To redirect to a 404 page", "To handle SSR errors only"],
                        correctAnswer: 0
                    }
                ]
            },
            {
                title: "Link & Navigation",
                questions: [
                    {
                        question: "How do you handle client-side navigation in Next.js?",
                        options: ["Using the Link component", "Using a <a> tag", "Using window.location"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the benefit of using the Link component in Next.js?",
                        options: ["It enables faster, client-side navigation", "It loads external pages", "It refreshes the entire page"],
                        correctAnswer: 0
                    },
                    {
                        question: "How do you programmatically navigate to another page in Next.js?",
                        options: ["Using the useRouter hook", "By directly updating window.location", "Using the static routing method"],
                        correctAnswer: 0
                    },
                    {
                        question: "What attribute in the Next.js Link component is used to specify the destination?",
                        options: ["href", "to", "link"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you pass dynamic parameters with the Link component?",
                        options: ["Yes, using query parameters or dynamic routing", "No", "Only with server-side routing"],
                        correctAnswer: 0
                    },
                    {
                        question: "What happens when you click a Next.js Link component?",
                        options: ["It loads the page without a full refresh", "It reloads the entire app", "It sends a server request"],
                        correctAnswer: 0
                    },
                    {
                        question: "Which hook is used to access router information in Next.js?",
                        options: ["useRouter", "useLink", "useState"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can Next.js handle nested navigation?",
                        options: ["Yes", "No", "Only with dynamic routes"],
                        correctAnswer: 0
                    },
                    {
                        question: "How can you navigate back to the previous page in Next.js?",
                        options: ["Using router.back()", "Using window.history.back()", "By clicking the browser back button"],
                        correctAnswer: 0
                    },
                    {
                        question: "Is the Next.js Link component accessible?",
                        options: ["Yes, it generates semantic, accessible HTML", "No, it doesn't support accessibility", "Only with additional configuration"],
                        correctAnswer: 0
                    }
                ]
            },
            {
                title: "Image in Next.js",
                questions: [
                    {
                        question: "What is the purpose of the Image component in Next.js?",
                        options: ["Optimized image loading and responsive images", "Rendering inline images", "Adding background images"],
                        correctAnswer: 0
                    },
                    {
                        question: "How does Next.js optimize images?",
                        options: ["By lazy-loading and resizing images automatically", "By caching images locally", "By adding metadata to the images"],
                        correctAnswer: 0
                    },
                    {
                        question: "Which attribute in the Image component specifies the image source?",
                        options: ["src", "path", "source"],
                        correctAnswer: 0
                    },
                    {
                        question: "What attribute in the Image component is used to define alternative text?",
                        options: ["alt", "description", "title"],
                        correctAnswer: 0
                    },
                    {
                        question: "How does Next.js handle responsive images?",
                        options: ["It automatically adjusts image size based on device width", "By using media queries", "By providing multiple image sizes"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the benefit of using the layout attribute in the Image component?",
                        options: ["It controls the image’s layout behavior", "It provides lazy loading", "It adds caching capabilities"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you use external image URLs with the Next.js Image component?",
                        options: ["Yes, but the domain must be whitelisted", "No, only local images are allowed", "Only with server-side rendering"],
                        correctAnswer: 0
                    },
                    {
                        question: "How can you make images lazy-loaded by default in Next.js?",
                        options: ["Next.js Image component lazy-loads by default", "By using a placeholder prop", "By adding a class to the image"],
                        correctAnswer: 0
                    },
                    {
                        question: "What does the placeholder attribute do in the Image component?",
                        options: ["It provides a blurred image while the main image loads", "It caches the image", "It sets a background image"],
                        correctAnswer: 0
                    },
                    {
                        question: "Which image formats does Next.js support for optimization?",
                        options: ["JPEG, PNG, WebP", "GIF, BMP, TIFF", "SVG only"],
                        correctAnswer: 0
                    }
                ]
            },
            {
                title: "404 Page / Page Not Found",
                questions: [
                    {
                        question: "What is a 404 page in Next.js?",
                        options: ["A custom page shown when a route is not found", "A server error page", "A redirect page"],
                        correctAnswer: 0
                    },
                    {
                        question: "How do you create a custom 404 page in Next.js?",
                        options: ["By creating a 404.js file in the pages directory", "By adding a dynamic route", "By creating an error handler"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the default behavior when a page is not found in Next.js?",
                        options: ["Next.js shows a default 404 page", "It redirects to the homepage", "It crashes the application"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you customize the design of the 404 page?",
                        options: ["Yes, by creating a custom 404 page", "No, the default design is fixed", "Only the content can be customized"],
                        correctAnswer: 0
                    },
                    {
                        question: "What status code is associated with a 404 error?",
                        options: ["404", "500", "200"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you create a 404 page for dynamic routes in Next.js?",
                        options: ["Yes, the 404 page works for both static and dynamic routes", "No, only static routes are supported", "Only with additional configuration"],
                        correctAnswer: 0
                    },
                    {
                        question: "Is the 404 page rendered on the client or server in Next.js?",
                        options: ["It can be rendered both on the client and server", "Only on the server", "Only on the client"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you show a 404 page conditionally based on some logic in Next.js?",
                        options: ["Yes, using client-side logic or getServerSideProps", "No, it’s always shown automatically", "Only with SSR"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you use custom layouts for the 404 page?",
                        options: ["Yes, you can apply custom layouts like other pages", "No, the 404 page has a fixed layout", "Only with client-side rendering"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the main purpose of a 404 page?",
                        options: ["To inform users that the requested page does not exist", "To show server errors", "To redirect users to a valid page"],
                        correctAnswer: 0
                    }
                ]
            },
            {
                title: "useState & useEffect",
                questions: [
                    {
                        question: "What is the purpose of the useState hook in React?",
                        options: ["To manage state in functional components", "To handle routing", "To perform side effects"],
                        correctAnswer: 0
                    },
                    {
                        question: "What does useEffect hook do in React?",
                        options: ["It handles side effects in functional components", "It updates state", "It handles component styling"],
                        correctAnswer: 0
                    },
                    {
                        question: "When is useEffect executed?",
                        options: ["After the component renders", "Before rendering", "During server-side rendering"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can you use multiple useState hooks in a single component?",
                        options: ["Yes", "No", "Only with SSR"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is the initial value in useState?",
                        options: ["The default value of the state", "The value returned from useEffect", "The updated state value"],
                        correctAnswer: 0
                    },
                    {
                        question: "When does useEffect with an empty dependency array run?",
                        options: ["Only once after the initial render", "On every render", "Whenever the state updates"],
                        correctAnswer: 0
                    },
                    {
                        question: "What happens when you update the state using useState?",
                        options: ["The component re-renders", "The state value is stored in local storage", "The state is reset"],
                        correctAnswer: 0
                    },
                    {
                        question: "What is a common use case for the useEffect hook?",
                        options: ["Fetching data after a component renders", "Handling onClick events", "Styling components"],
                        correctAnswer: 0
                    },
                    {
                        question: "Can useEffect be used for cleanup actions?",
                        options: ["Yes, by returning a cleanup function from the effect", "No, useEffect can’t handle cleanup", "Only with useState"],
                        correctAnswer: 0
                    },
                    {
                        question: "What happens if you don’t include a dependency array in useEffect?",
                        options: ["The effect runs after every render", "The effect runs once", "The effect doesn’t run at all"],
                        correctAnswer: 0
                    }
                ]
            }
        ];
        

export default function QuizPage() {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', classDay: '', classTime: '' });
    const [selectedTopic, setSelectedTopic] = useState<any>(null);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    // Handle answer selection
    const handleAnswerChange = (questionIndex: number, optionIndex: number) => {
        setUserAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[questionIndex] = optionIndex;
            return newAnswers;
        });
    };

    // Function to send results via EmailJS
    const sendEmail = () => {
        const correctAnswers = userAnswers.filter((answer, index) => answer === selectedTopic.questions[index].correctAnswer).length;
        const totalQuestions = selectedTopic.questions.length;

        const templateParams = {
            name: userInfo.name,
            email: userInfo.email,
            score: correctAnswers,
            total: totalQuestions,
        };

        emailjs.send('service_m63nitd', 'template_vrono6g', templateParams, '8Rh1NjDZBC5ZgppVa')
            .then(() => console.log('Email sent!'))
            .catch((error) => console.log('Error sending email:', error));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const correctAnswers = userAnswers.filter((answer, index) => answer === selectedTopic.questions[index].correctAnswer).length;
        setScore(correctAnswers);
        setSubmitted(true);
        sendEmail();
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Next.js Quiz</h1>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label>Name:</label>
                        <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} required className=" text-gray-50 mt-2 p-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label>Email:</label>
                        <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} required className="text-gray-50 mt-2 p-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label>Class Day:</label>
                        <input type="text" name="classDay" value={userInfo.classDay} onChange={handleInputChange} required className="text-gray-50 mt-2 p-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label>Class Time:</label>
                        <input type="text" name="classTime" value={userInfo.classTime} onChange={handleInputChange} required className="text-gray-50 mt-2 p-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label>Select Topic:</label>
                        <select onChange={(e) => setSelectedTopic(classTopics[parseInt(e.target.value)])} required className="text-gray-50 mt-2 p-2 border rounded-md">
                            <option value="">Select a topic</option>
                            {classTopics.map((topic, index) => (
                                <option key={index} value={index}>{topic.title}</option>
                            ))}
                        </select>
                    </div>

                    {selectedTopic && selectedTopic.questions.map((q: any, questionIndex: any) => (
                        <div key={questionIndex} className="mb-4">
                            <p>{q.question}</p>
                            {q.options.map((option: string, optionIndex: number) => (
                                <label key={optionIndex} className="block">
                                    <input className='text-gray-50' type="radio" name={`question_${questionIndex}`} value={optionIndex} onChange={() => handleAnswerChange(questionIndex, optionIndex)} required />
                                    {option}
                                </label>
                            ))}
                        </div>
                    ))}

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
                </form>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-4">Results</h2>
                    <p>You scored: {score} out of {selectedTopic.questions.length}</p>
                    <button onClick={() => { setSubmitted(false); setUserAnswers([]); setSelectedTopic(null); }} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Retake Quiz</button>
                </div>
            )}
        </div>
    );
}
