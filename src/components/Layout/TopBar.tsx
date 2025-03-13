
import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  Search, 
  HelpCircle, 
  Plus,
  Moon, 
  Sun 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/hooks/use-toast';

const TopBar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddResource = () => {
    toast({
      title: "Add Resource",
      description: "Resource creation wizard will be available soon.",
    });
  };

  return (
    <header className="border-b border-border px-6 py-3 bg-background flex items-center justify-between">
      <div className="flex items-center">
        <SidebarTrigger />
        <div className="relative ml-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search resources..."
            className="h-10 w-[200px] md:w-[300px] rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {isDarkMode ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
        
        <Button variant="outline" size="icon" asChild>
          <Link to="/notifications">
            <Bell className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        
        <Button variant="outline" size="icon" asChild>
          <Link to="/help">
            <HelpCircle className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">RM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to="/settings">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button size="sm" className="hidden md:flex ml-2" onClick={handleAddResource}>
          <Plus className="h-4 w-4 mr-1" />
          Add Resource
        </Button>
      </div>
    </header>
  );
};

export default TopBar;
