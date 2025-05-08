import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Calendar,
  Clock,
  Code,
  Database,
  Edit,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings,
  Shield,
  Star,
  Trash,
  User,
} from "lucide-react"
import InterviewCard from "@/components/mycomponents/InterviewCard"
import { Link, Router } from "react-router-dom"

export default function ProfilePage() {
//   const router = Router()
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=128&width=128",
    initials: "JD",
    joinedDate: "January 2024",
    completedInterviews: 12,
    averageRating: 4.2,
  })

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    // For now, we'll just redirect to the login page
    // router.push("/login")
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-4 py-3 flex justify-between items-center">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl font-semibold">PrepWise</span>
        </Link>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 cursor-pointer">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#1E1E2D] border-gray-800 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-800" />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    className="text-red-400 focus:bg-red-900/20 focus:text-red-400 cursor-pointer"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-[#1E1E2D] border-gray-800 text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400">
                      You will need to log in again to access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={handleLogout}>
                      Log out
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24 border-4 border-purple-600">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-2xl">{user.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
              <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
                <div className="flex items-center gap-1 text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Joined {user.joinedDate}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm">{user.completedInterviews} Interviews</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{user.averageRating} Average Rating</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
              <Button variant="default" className="gap-2 bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4" />
                Create Interview
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="past-interviews" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#1E1E2D]">
            <TabsTrigger value="past-interviews" className="data-[state=active]:bg-purple-900/30">
              Past Interviews
            </TabsTrigger>
            <TabsTrigger value="my-interviews" className="data-[state=active]:bg-purple-900/30">
              My Interviews
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-purple-900/30">
              Account Settings
            </TabsTrigger>
          </TabsList>

          {/* Past Interviews Tab */}
          <TabsContent value="past-interviews" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastInterviews.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))}
            </div>
            {pastInterviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">You haven't completed any interviews yet.</p>
                <Button className="bg-purple-600 hover:bg-purple-700">Start Your First Interview</Button>
              </div>
            )}
          </TabsContent>

          {/* My Interviews Tab */}
          <TabsContent value="my-interviews" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My Created Interviews</h2>
              <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                <Plus className="h-4 w-4" />
                Create New
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myInterviews.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))}
            </div>
            {myInterviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">You haven't created any custom interviews yet.</p>
                <Button className="bg-purple-600 hover:bg-purple-700">Create Your First Interview</Button>
              </div>
            )}
          </TabsContent>

          {/* Account Settings Tab */}
          <TabsContent value="account" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#1E1E2D] border-gray-800 text-white col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Update your personal information and how it is displayed
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-3 py-2 bg-[#2A2A3A] border border-gray-700 rounded-md text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-3 py-2 bg-[#2A2A3A] border border-gray-700 rounded-md text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Bio</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about yourself..."
                      className="w-full px-3 py-2 bg-[#2A2A3A] border border-gray-700 rounded-md text-white"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
                </CardFooter>
              </Card>

              <div className="space-y-6">
                <Card className="bg-[#1E1E2D] border-gray-800 text-white">
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription className="text-gray-400">Change your password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 bg-[#2A2A3A] border border-gray-700 rounded-md text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">New Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 bg-[#2A2A3A] border border-gray-700 rounded-md text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 bg-[#2A2A3A] border border-gray-700 rounded-md text-white"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-purple-600 hover:bg-purple-700">Update Password</Button>
                  </CardFooter>
                </Card>

                <Card className="bg-[#1E1E2D] border-gray-800 text-white">
                  <CardHeader>
                    <CardTitle>Danger Zone</CardTitle>
                    <CardDescription className="text-gray-400">
                      Permanently delete your account and all data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Account</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-[#1E1E2D] border-gray-800 text-white">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription className="text-gray-400">
                            This action cannot be undone. This will permanently delete your account and remove your data
                            from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">
                            Delete Account
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

// Sample data for past interviews
const pastInterviews = [
    {
      id: 1,
      title: "Frontend Dev Interview",
      date: "Feb 15, 2025",
      duration: "45 min",
      rating: 4.2,
      technical: true,
      icon: Code,
    },
    {
      id: 2,
      title: "Behavioral Interview",
      date: "Feb 10, 2025",
      duration: "35 min",
      rating: 4.8,
      technical: false,
      icon: MessageSquare,
    },
    {
      id: 3,
      title: "Backend Dev Interview",
      date: "Feb 05, 2025",
      duration: "50 min",
      rating: 4.5,
      technical: true,
      icon: Database,
    },
    {
      id: 4,
      title: "System Design Interview",
      date: "Jan 28, 2025",
      duration: "60 min",
      rating: 3.9,
      technical: true,
      icon: PieChart,
    },
    {
      id: 5,
      title: "Cybersecurity Interview",
      date: "Jan 20, 2025",
      duration: "55 min",
      rating: 4.1,
      technical: true,
      icon: Shield,
    },
  ]
  
  // Sample data for my created interviews
  const myInterviews = [
    {
      id: 1,
      title: "Custom Frontend Interview",
      createdAt: "Mar 01, 2025",
      description: "A custom interview focusing on React, Next.js, and modern CSS frameworks.",
      technical: true,
      icon: Code,
    },
    {
      id: 2,
      title: "Leadership Assessment",
      createdAt: "Feb 20, 2025",
      description: "Interview questions to assess leadership skills and team management abilities.",
      technical: false,
      icon: MessageSquare,
    },
    {
      id: 3,
      title: "Database Expert Interview",
      createdAt: "Feb 15, 2025",
      description: "Advanced SQL, NoSQL, and database optimization questions for senior roles.",
      technical: true,
      icon: Database,
    },
  ]