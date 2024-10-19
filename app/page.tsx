
   
const cards = [
  {
      title: 'Fast',
      description: 'Next.js is fast by default with server-side rendering and optimized performance.',
  },
  {
      title: 'SEO Friendly',
      description: 'Built-in SEO features help you rank better in search engines.',
  },
  {
      title: 'Static & Dynamic',
      description: 'Generate static sites with ease, or use dynamic rendering for your applications.',
  },
  {
      title: 'API Routes',
      description: 'Easily create API endpoints with file-based routing.',
  },
];

export default function Home() {
  return (
      <div>
          <section className="bg-white text-black p-16 text-center">
              <h1 className="text-4xl font-bold">Explore Next.js with Mehak Hamid</h1>
              <p className="mt-4 text-xl">Next.js is more than just a React framework—it’s a gateway to building fast, SEO-friendly, and scalable web applications. With features like server-side rendering, static site generation, and an intuitive file-based routing system, Next.js streamlines your development workflow and enhances your project’s performance. Whether you're a seasoned developer or just starting out, Next.js empowers you to create dynamic and modern websites that keep up with the demands of today’s web. Embrace the future of development with Next.js, and transform your coding experience!</p>
              <div className="flex justify-center gap-4 mt-8">
                 
              </div>
          </section>

          <section className="flex justify-around flex-wrap p-5">
              {cards.map((card, index) => (
                  <div key={index} className="bg-cyan-300 rounded-lg shadow-lg m-2 p-5 w-60 text-center">
                      <h2 className="text-blue-600 text-xl font-semibold">{card.title}</h2>
                      <p >{card.description}</p>
                  </div>
              ))}
          </section>
      </div>
  );
}
 
