
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, AlertTriangle, Check, Info } from 'lucide-react';

interface Alert {
  id: string;
  title: string;
  description: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  timestamp: string;
}

const alerts: Alert[] = [
  {
    id: 'alert-1',
    title: 'High CPU Usage',
    description: 'web-server-prod-03 CPU usage exceeded 90% for 15 minutes',
    type: 'critical',
    timestamp: '15 minutes ago'
  },
  {
    id: 'alert-2',
    title: 'Database Approaching Capacity',
    description: 'users-database-prod storage usage at 85%',
    type: 'warning',
    timestamp: '45 minutes ago'
  },
  {
    id: 'alert-3',
    title: 'EC2 Instance Costs Increased',
    description: '15% increase in EC2 costs compared to last week',
    type: 'warning',
    timestamp: '2 hours ago'
  },
  {
    id: 'alert-4',
    title: 'Automatic Scaling Triggered',
    description: 'web-cluster scaled to 6 instances based on traffic',
    type: 'info',
    timestamp: '3 hours ago'
  },
  {
    id: 'alert-5',
    title: 'Security Updates Applied',
    description: 'All EC2 instances patched against vulnerabilities',
    type: 'success',
    timestamp: '6 hours ago'
  }
];

const getAlertIcon = (type: string) => {
  switch(type) {
    case 'critical':
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case 'info':
      return <Info className="h-5 w-5 text-blue-500" />;
    case 'success':
      return <Check className="h-5 w-5 text-green-500" />;
    default:
      return <Info className="h-5 w-5 text-blue-500" />;
  }
};

const AlertsPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts & Notifications</CardTitle>
        <CardDescription>Recent alerts from your infrastructure</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className="flex items-start space-x-3 p-3 bg-muted/40 rounded-lg border border-border"
            >
              <div className="mt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{alert.title}</h4>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
