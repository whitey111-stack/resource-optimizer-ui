
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Server, Cpu, Activity, BarChartBig } from 'lucide-react';
import AppLayout from '@/components/Layout/AppLayout';
import { Badge } from '@/components/ui/badge';

interface ComputeResource {
  id: string;
  name: string;
  type: string;
  status: 'running' | 'stopped' | 'pending';
  instanceType: string;
  cpu: number;
  memory: number;
  region: string;
}

const computeResources: ComputeResource[] = [
  {
    id: 'i-1234567890abcdef0',
    name: 'web-server-prod-01',
    type: 'EC2 Instance',
    status: 'running',
    instanceType: 't3.large',
    cpu: 2,
    memory: 8,
    region: 'us-west-2'
  },
  {
    id: 'i-0987654321fedcba0',
    name: 'api-server-prod-01',
    type: 'EC2 Instance',
    status: 'running',
    instanceType: 'm5.xlarge',
    cpu: 4,
    memory: 16,
    region: 'us-west-2'
  },
  {
    id: 'i-abcdef1234567890',
    name: 'worker-node-01',
    type: 'EC2 Instance',
    status: 'stopped',
    instanceType: 'c5.large',
    cpu: 2,
    memory: 4,
    region: 'us-east-1'
  },
  {
    id: 'pod-web-5d7b9f8c4d-abc12',
    name: 'web-deployment-pod-1',
    type: 'Kubernetes Pod',
    status: 'running',
    instanceType: 'n/a',
    cpu: 1,
    memory: 2,
    region: 'us-central1'
  }
];

const ComputePage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Compute Resources</h1>
          <p className="text-muted-foreground">Manage your compute instances and containers</p>
        </div>

        <Tabs defaultValue="instances">
          <TabsList>
            <TabsTrigger value="instances">
              <Server className="h-4 w-4 mr-2" />
              Instances
            </TabsTrigger>
            <TabsTrigger value="kubernetes">
              <Cpu className="h-4 w-4 mr-2" />
              Kubernetes
            </TabsTrigger>
            <TabsTrigger value="serverless">
              <BarChartBig className="h-4 w-4 mr-2" />
              Serverless
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="instances" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Compute Instances</CardTitle>
                <CardDescription>Manage your cloud compute resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Name</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Type</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Instance</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Status</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Resources</th>
                        <th className="pb-2 font-medium text-muted-foreground text-sm">Region</th>
                      </tr>
                    </thead>
                    <tbody>
                      {computeResources.map((resource) => (
                        <tr key={resource.id} className="border-b border-border hover:bg-muted/50">
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <Server className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{resource.name}</span>
                            </div>
                          </td>
                          <td className="py-3 text-muted-foreground text-sm">{resource.type}</td>
                          <td className="py-3 text-sm">{resource.instanceType}</td>
                          <td className="py-3">
                            <Badge 
                              variant={
                                resource.status === 'running' ? 'default' : 
                                resource.status === 'stopped' ? 'secondary' : 'outline'
                              }
                            >
                              <span className="flex items-center gap-1">
                                <Activity className="h-3 w-3" />
                                <span className="capitalize">{resource.status}</span>
                              </span>
                            </Badge>
                          </td>
                          <td className="py-3 text-sm">
                            {resource.cpu} vCPU, {resource.memory} GB RAM
                          </td>
                          <td className="py-3 text-sm">{resource.region}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="kubernetes" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Kubernetes Resources</CardTitle>
                <CardDescription>Manage your Kubernetes clusters and workloads</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Kubernetes workload management coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="serverless" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Serverless Functions</CardTitle>
                <CardDescription>Manage your serverless functions and applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Serverless function management coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ComputePage;
