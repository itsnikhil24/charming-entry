
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <GraduationCap className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-center text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </button>
          </p>

          <form className="mt-8 space-y-6">
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
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <Button
              onClick={() => navigate("/dashboard")}
              className="w-full"
              size="lg"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
      
      {/* Right side - Background image */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center text-white p-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Transform Your Career Journey</h2>
            <p className="text-lg opacity-90">
              Access personalized career guidance, connect with mentors, and discover opportunities that align with your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
