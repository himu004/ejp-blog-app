import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
          Welcome to EJP Blog App
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="group h-[400px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden backdrop-blur-sm border border-gray-100">
                <div className="h-1/3 bg-gradient-to-br from-violet-500 to-fuchsia-500 group-hover:scale-105 transition-transform duration-300 relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 h-2/3 relative">
                  <div className="absolute -top-8 left-4 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <span className="text-2xl font-bold bg-gradient-to-br from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
                      #{post.id}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-violet-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-gray-600 line-clamp-3 text-sm group-hover:text-gray-700 transition-colors">
                      {post.body}
                    </p>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className="group-hover:translate-x-2 transition-transform">
                          <p className="text-sm font-semibold text-gray-700">
                            Author
                          </p>
                          <p className="text-xs text-gray-500">2 min read</p>
                        </div>
                        <span className="bg-violet-100 text-violet-600 px-4 py-1.5 rounded-full text-xs font-medium group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
