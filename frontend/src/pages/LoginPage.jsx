import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useUser } from "@/store/UserStore"
import toast from "react-hot-toast"
import { BeatLoader } from "react-spinners"

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginFunc, loading } = useUser();
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    if(!email || !password) {
      toast.error("All fields are required")
      return;
    }
    if(password.length < 7) {
      toast.error("Password length must be more than 7");
      return;
    }
    try {
      const result = await loginFunc(email, password)
      if(result.success) {
        localStorage.setItem("userid", result?.userid);
        localStorage.setItem("username", result?.username);
        toast.success(result?.message);
        navigate("/")
      }
      else {
        toast.error(result?.message);
      }
    } catch (error) {
      toast.error("Internal server issue");
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col cursor-pointer">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-md space-y-6 md:space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-gray-400 mt-2">Login to your IntervuAI account</p>
          </div>

          <div className="bg-[#1E1E1E] p-8 rounded-xl border border-gray-800 shadow-lg">
            <form onSubmit={handleLogin} className="space-y-6">

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="bg-[#2A2A2A] border-gray-700 text-white placeholder:text-gray-500"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  className="bg-[#2A2A2A] border-gray-700 text-white" 
                  placeholder="••••••••"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="border-[1px] border-purple-700" />
                <Label htmlFor="remember" className="text-sm text-gray-300">
                  Remember me
                </Label>
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                {loading? <BeatLoader color="#fff" size={10}/> : "Login"}
              </Button>
            </form>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-purple-400 hover:text-purple-300">
              Create an account
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default LoginPage;