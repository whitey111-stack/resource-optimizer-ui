
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  LayoutDashboard, 
  BarChartBig, 
  Shield, 
  Settings, 
  Bell, 
  HelpCircle 
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarTrigger,
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from '@/components/ui/sidebar';

const mainMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Cloud, label: 'Cloud Resources', path: '/resources' },
  { icon: Server, label: 'Compute', path: '/compute' },
  { icon: Database, label: 'Storage', path: '/storage' },
  { icon: BarChartBig, label: 'Monitoring', path: '/monitoring' },
  { icon: Shield, label: 'Security', path: '/security' },
];

const secondaryMenuItems = [
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help & Support', path: '/help' },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent className="pb-4">
        <div className="px-3 py-6">
          <h2 className="text-lg font-bold flex items-center text-sidebar-foreground">
            <Cloud className="mr-2 h-6 w-6" />
            Cloud Manager
          </h2>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
