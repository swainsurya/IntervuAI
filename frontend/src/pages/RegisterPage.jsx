import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast from "react-hot-toast"
import { useUser } from "@/store/UserStore"
import { BeatLoader } from "react-spinners"

const RegisterPage = () => {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { registerFunc, loading } = useUser();

  const handleRegister = async(e) => {
    e.preventDefault();
    if(!fullname || !email || !password || !confirmPassword) {
      toast.error("All fields are required")
      return;
    }
    if(password.length < 7) {
      toast.error("Password length must be more than 7");
      return;
    }
    if(password != confirmPassword) {
      toast.error("Confirm Password must be same with password");
      return;
    }
    // Register right here
    try {
      const result = await registerFunc(fullname,email,password);
      if(!result.success) {
        toast.error(result.message);
      }
      else{
        toast.success(result.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Internal Server Issue");
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col cursor-pointer">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-md space-y-6 md:space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-gray-400 mt-2">Join IntervuAI and ace your interviews</p>
          </div>

          <div className="bg-[#1E1E1E] p-8 rounded-xl border border-gray-800 shadow-lg">
            <form onSubmit={handleRegister} className="space-y-6">

              {/* name field */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-300">
                  Full Name
                </Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  className="bg-[#2A2A2A] border-gray-700 text-white" 
                  placeholder="John Doe" 
                  value={fullname}
                  onChange={e=> setFullname(e.target.value)}
                />
              </div>

              {/* email field */}
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

              {/* password field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Input 
                  id="password" 
                  type="password" 
                  className="bg-[#2A2A2A] border-gray-700 text-white" 
                  placeholder="••••••••"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  />
              </div>

              {/* confirm password field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-300">
                  Confirm password
                </Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  className="bg-[#2A2A2A] border-gray-700 text-white" 
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={e=>setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="terms" className="border-[1px] border-purple-700" />
                <Label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                {loading? <BeatLoader color="#fff" size={10}/> : "Create Account"}
              </Button>
            </form>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:text-purple-300">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default RegisterPage;