import Link from "next/link"

export default function Header() {
    return (
        <div>
            {/* Header section */}
            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-3">
                <h1 className="justify-center items-center flex text-4xl font-extrabold text-white shadow-md">
                    Next.js Insights with<span className="text-red-500 ml-2">Mehak Hamid</span>
                </h1>
            </div>

            {/* Navigation bar */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 font-bold p-4 flex gap-8 justify-center shadow-lg">
                <Link href={"/"} className="text-white hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    Home
                </Link>
                <Link href={"/about"} className="text-white hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    About
                </Link>
                <Link href={"/definations"} className="text-white hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    Definitions
                </Link>
                <Link href={"/class-topic"} className="text-white hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    Class-Topic
                </Link>
                <Link href={"/quiz"} className="text-white hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    Quiz
                </Link>
                <Link href={"/contact"} className="text-white hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out">
                    Contact Me
                </Link>
            </div>
        </div>
    );
}
