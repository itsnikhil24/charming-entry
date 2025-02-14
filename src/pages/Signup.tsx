
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <GraduationCap className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-center text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </button>
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                className="mt-1"
              />
            </div>

            <Button
              onClick={() => navigate("/dashboard")}
              className="w-full"
              size="lg"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
      
      {/* Right side - Background image */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center text-white p-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Start Your Career Journey</h2>
            <p className="text-lg opacity-90">
              Join our community to access personalized career guidance, mentorship opportunities, and exclusive job listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
