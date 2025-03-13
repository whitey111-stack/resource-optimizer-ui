
import React from 'react';
import { Bell, CheckCircle, AlertTriangle, InfoIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/components/Layout/AppLayout';

interface Notification {
  id: string;
  title: string;
  description: string;
  type: 'info' | 'success' | 'warning' | 'error';
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Resource Alert',
    description: 'CPU usage for web-server-prod-01 exceeded 90% threshold',
    type: 'warning',
    time: '10 minutes ago',
    read: false
  },
  {
    id: '2',
    title: 'Deployment Successful',
    description: 'New version deployed to production environment',
    type: 'success',
    time: '1 hour ago',
    read: false
  },
  {
    id: '3',
    title: 'Security Update',
    description: 'Security patches have been applied to all servers',
    type: 'info',
    time: '3 hours ago',
    read: true
  },
  {
    id: '4',
    title: 'Database Error',
    description: 'Connection to users-database-prod was lost temporarily',
    type: 'error',
    time: '5 hours ago',
    read: true
  },
  {
    id: '5',
    title: 'Cost Alert',
    description: 'Monthly spending is approaching the budget limit',
    type: 'warning',
    time: '1 day ago',
    read: true
  }
];

const getNotificationIcon = (type: Notification['type']) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case 'error':
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    case 'info':
    default:
      return <InfoIcon className="h-5 w-5 text-blue-500" />;
  }
};

const NotificationsPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">Manage your alerts and notifications</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Mark all as read</Button>
            <Button variant="outline" size="sm">Settings</Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-xl flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications Center
            </CardTitle>
            <CardDescription>You have {notifications.filter(n => !n.read).length} unread notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`flex items-start gap-4 p-3 rounded-lg transition-colors ${
                    notification.read ? 'bg-background' : 'bg-muted'
                  }`}
                >
                  <div className="mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{notification.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        {!notification.read && (
                          <Badge variant="secondary" className="text-xs">New</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default NotificationsPage;
