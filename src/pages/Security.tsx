
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Key, Lock, Users, AlertTriangle } from 'lucide-react';
import AppLayout from '@/components/Layout/AppLayout';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface SecurityAlert {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  resource: string;
  timestamp: string;
  status: 'open' | 'investigating' | 'resolved';
}

const securityAlerts: SecurityAlert[] = [
  { 
    id: 'alert-001', 
    title: 'Unusual API call detected', 
    severity: 'high', 
    resource: 'IAM:user/admin', 
    timestamp: '10:32 AM', 
    status: 'open'
  },
  { 
    id: 'alert-002', 
    title: 'Multiple failed login attempts', 
    severity: 'medium', 
    resource: 'IAM:user/developer', 
    timestamp: '9:45 AM', 
    status: 'investigating'
  },
  { 
    id: 'alert-003', 
    title: 'Unencrypted data transfer detected', 
    severity: 'critical', 
    resource: 'S3:bucket/user-data', 
    timestamp: 'Yesterday', 
    status: 'open'
  },
  { 
    id: 'alert-004', 
    title: 'Public security group detected', 
    severity: 'high', 
    resource: 'EC2:sg-web-servers', 
    timestamp: 'Yesterday', 
    status: 'resolved'
  },
  { 
    id: 'alert-005', 
    title: 'Root account activity', 
    severity: 'medium', 
    resource: 'IAM:user/root', 
    timestamp: '2 days ago', 
    status: 'resolved'
  }
];

const SecurityPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Security</h1>
          <p className="text-muted-foreground">Protect your cloud resources and monitor security posture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Shield className="h-4 w-4 mr-2 text-blue-500" />
                Security Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76/100</div>
              <Progress value={76} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">5 recommendations to improve</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                Open Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex gap-2 mt-2">
                <Badge variant="destructive" className="text-xs">1 Critical</Badge>
                <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">2 High</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Key className="h-4 w-4 mr-2 text-green-500" />
                Access Keys
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-yellow-500 mt-1">2 keys need rotation</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Users className="h-4 w-4 mr-2 text-purple-500" />
                User Accounts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">3 admins, 5 developers</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alerts">
          <TabsList>
            <TabsTrigger value="alerts">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Security Alerts
            </TabsTrigger>
            <TabsTrigger value="compliance">
              <Shield className="h-4 w-4 mr-2" />
              Compliance
            </TabsTrigger>
            <TabsTrigger value="access">
              <Lock className="h-4 w-4 mr-2" />
              Access Management
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="alerts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Alerts</CardTitle>
                <CardDescription>Recent security events requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Alert</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Severity</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Resource</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Status</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm text-right">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {securityAlerts.map((alert) => (
                        <tr key={alert.id} className="border-b border-border hover:bg-muted/50">
                          <td className="py-3">
                            <div className="font-medium">{alert.title}</div>
                          </td>
                          <td className="py-3">
                            <Badge 
                              variant={
                                alert.severity === 'critical' ? 'destructive' : 
                                alert.severity === 'high' ? 'outline' : 
                                alert.severity === 'medium' ? 'secondary' : 'default'
                              }
                              className={
                                alert.severity === 'high' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : ''
                              }
                            >
                              <span className="capitalize">{alert.severity}</span>
                            </Badge>
                          </td>
                          <td className="py-3 text-sm font-mono">{alert.resource}</td>
                          <td className="py-3">
                            <Badge 
                              variant={
                                alert.status === 'open' ? 'outline' : 
                                alert.status === 'investigating' ? 'secondary' : 'default'
                              }
                              className={
                                alert.status === 'open' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 
                                alert.status === 'resolved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : ''
                              }
                            >
                              <span className="capitalize">{alert.status}</span>
                            </Badge>
                          </td>
                          <td className="py-3 text-right text-muted-foreground text-sm">{alert.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compliance" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>Security standards and compliance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">GDPR</h3>
                        <p className="text-xs text-muted-foreground">General Data Protection Regulation</p>
                      </div>
                    </div>
                    <div className="text-green-500 font-medium">Compliant</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-yellow-500" />
                      <div>
                        <h3 className="font-medium">SOC 2</h3>
                        <p className="text-xs text-muted-foreground">Service Organization Control 2</p>
                      </div>
                    </div>
                    <div className="text-yellow-500 font-medium">In Progress</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">ISO 27001</h3>
                        <p className="text-xs text-muted-foreground">Information Security Management</p>
                      </div>
                    </div>
                    <div className="text-green-500 font-medium">Compliant</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-500" />
                      <div>
                        <h3 className="font-medium">HIPAA</h3>
                        <p className="text-xs text-muted-foreground">Health Insurance Portability and Accountability Act</p>
                      </div>
                    </div>
                    <div className="text-red-500 font-medium">Not Compliant</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="access" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Access Management</CardTitle>
                <CardDescription>User and role management for your cloud resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Access management tools coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SecurityPage;
