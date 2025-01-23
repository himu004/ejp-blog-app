import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return undefined;
  }
  const post = await res.json();
  return post;
}

export default async function BlogDetails({ params }) {
  const { id } = params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <article className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-gray-100">
          <div className="p-8 md:p-12">
            {/* Header Section */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 hover:text-indigo-600 transition-colors duration-300">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-medium text-lg">A</span>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">
                    Author Name
                  </span>
                </div>
                <span className="text-gray-400">•</span>
                <time className="text-gray-500 font-medium">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            {/* Content Section */}
            <div className="prose prose-lg prose-indigo max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.body}
              </p>
            </div>

            {/* Footer Section */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all duration-200">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Share
                  </button>
                  <button className="flex items-center px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all duration-200">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Like
                  </button>
                </div>
                <div className="px-4 py-2 bg-gray-50 rounded-full text-gray-500 text-sm font-medium">
                  Post #{id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
