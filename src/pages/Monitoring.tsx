
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, AlertTriangle, BarChartBig, Gauge } from 'lucide-react';
import AppLayout from '@/components/Layout/AppLayout';

const performanceData = [
  { time: '00:00', cpu: 45, memory: 30, network: 10 },
  { time: '04:00', cpu: 30, memory: 35, network: 15 },
  { time: '08:00', cpu: 65, memory: 50, network: 40 },
  { time: '12:00', cpu: 85, memory: 75, network: 60 },
  { time: '16:00', cpu: 70, memory: 60, network: 55 },
  { time: '20:00', cpu: 50, memory: 45, network: 30 },
  { time: '23:59', cpu: 40, memory: 35, network: 20 },
];

const alertsData = [
  { category: 'CPU', critical: 2, warning: 5, healthy: 15 },
  { category: 'Memory', critical: 1, warning: 3, healthy: 18 },
  { category: 'Disk', critical: 0, warning: 4, healthy: 20 },
  { category: 'Network', critical: 3, warning: 2, healthy: 12 },
];

const MonitoringPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Monitoring & Metrics</h1>
          <p className="text-muted-foreground">Track performance and health of your cloud resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Gauge className="h-4 w-4 mr-2 text-blue-500" />
                CPU Utilization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">65%</div>
              <p className="text-xs text-muted-foreground">+5% from last hour</p>
              <div className="mt-2 w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Activity className="h-4 w-4 mr-2 text-green-500" />
                Memory Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48%</div>
              <p className="text-xs text-muted-foreground">-2% from last hour</p>
              <div className="mt-2 w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '48%' }}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">3 critical, 4 warnings</p>
              <div className="mt-2 flex">
                <div className="bg-red-500 h-2 flex-1 rounded-l-full"></div>
                <div className="bg-yellow-500 h-2 flex-1"></div>
                <div className="bg-green-500 h-2 flex-1 rounded-r-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance">
          <TabsList>
            <TabsTrigger value="performance">
              <BarChartBig className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="alerts">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="logs">
              <Activity className="h-4 w-4 mr-2" />
              Logs
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Resource Utilization</CardTitle>
                <CardDescription>24-hour performance metrics for your infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="cpu" stroke="#3b82f6" name="CPU %" />
                      <Line type="monotone" dataKey="memory" stroke="#10b981" name="Memory %" />
                      <Line type="monotone" dataKey="network" stroke="#6366f1" name="Network MB/s" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="alerts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Resource Alerts</CardTitle>
                <CardDescription>Current alert status by resource category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={alertsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="critical" fill="#ef4444" name="Critical" />
                      <Bar dataKey="warning" fill="#f59e0b" name="Warning" />
                      <Bar dataKey="healthy" fill="#10b981" name="Healthy" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="logs" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>System Logs</CardTitle>
                <CardDescription>Recent system events and log entries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-mono bg-muted rounded-md p-4 h-80 overflow-y-auto">
                  <p className="text-red-500">[ERROR] 10:42:15 - Database connection failed on users-database-prod</p>
                  <p className="text-yellow-500">[WARN] 10:35:22 - High CPU utilization detected on web-server-prod-01 (92%)</p>
                  <p className="text-green-500">[INFO] 10:30:18 - Auto-scaling group added 2 new instances</p>
                  <p className="text-green-500">[INFO] 10:25:01 - Deployment completed successfully</p>
                  <p className="text-yellow-500">[WARN] 10:22:33 - Memory usage approaching threshold on api-server-prod-01</p>
                  <p className="text-green-500">[INFO] 10:15:12 - Backup completed successfully</p>
                  <p className="text-green-500">[INFO] 10:10:05 - User admin logged in from 192.168.1.105</p>
                  <p className="text-red-500">[ERROR] 10:05:30 - S3 bucket access denied - check IAM permissions</p>
                  <p className="text-green-500">[INFO] 10:01:22 - Daily maintenance tasks started</p>
                  <p className="text-green-500">[INFO] 10:00:01 - System monitoring refreshed</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default MonitoringPage;
