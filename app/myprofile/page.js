"use client";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 mt-10">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-40 h-40 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-gray-100 flex items-center justify-center">
                  <FaUserCircle className="w-full h-full text-gray-400" />
                </div>
              </div>
              <div className="inline-flex items-center space-x-3">
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Online</span>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome to your profile!
                </h1>
                <p className="mt-2 text-gray-600">
                  This is your personal space to manage your content and
                  settings.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="font-bold text-xl">12</div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="font-bold text-xl">1.2k</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="font-bold text-xl">348</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
