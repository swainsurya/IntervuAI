import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { LogOut, FolderOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProfileButton = ({ username }) => {
    const navigate = useNavigate();
    const handleLogout = async() => {
        await localStorage.removeItem("userid");
        await localStorage.removeItem("username");
        navigate("/landing")
    }

  return (
    <Menubar className="border-0 bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger asChild>
          <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center rounded-full cursor-pointer shadow-md">
            <h2 className="text-lg font-bold text-white">
              {username.charAt(0).toUpperCase()}
            </h2>
          </div>
        </MenubarTrigger>

        <MenubarContent className="w-56 bg-[#1E1E2D] border border-gray-700 shadow-lg rounded-md p-2">
          <MenubarItem asChild>
            <Link
              to="/interview/my-interviews"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm text-white cursor-pointer"
            >
              <FolderOpen className="h-4 w-4 text-blue-400" />
              Your Created Interviews
            </Link>
          </MenubarItem>

          <MenubarItem>
            <Button
              variant="ghost"
              className="w-full flex justify-start items-center gap-2 px-3 py-2 hover:bg-gray-800 text-sm text-white"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 text-red-400" />
              Logout
            </Button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ProfileButton;
