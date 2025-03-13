
import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DownloadCloud, 
  Filter, 
  Plus, 
  RefreshCw, 
  Search, 
  Server, 
  Database, 
  HardDrive, 
  Shield, 
  Cpu 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Resource {
  id: string;
  name: string;
  type: string;
  provider: 'aws' | 'k8s' | 'azure' | 'gcp';
  region: string;
  status: 'healthy' | 'warning' | 'critical' | 'idle';
  cost: number;
  updated: string;
  usage: number;
}

const resources: Resource[] = [
  { 
    id: 'i-1234567890abcdef0', 
    name: 'web-server-prod-01', 
    type: 'EC2 Instance', 
    provider: 'aws', 
    region: 'us-east-1',
    status: 'healthy', 
    cost: 43.20,
    updated: '2 minutes ago',
    usage: 78
  },
  { 
    id: 'pod-web-5d7b9f8c4d-abc12', 
    name: 'web-deployment-pod-1', 
    type: 'Kubernetes Pod', 
    provider: 'k8s', 
    region: 'us-east-1',
    status: 'healthy', 
    cost: 12.50,
    updated: '5 minutes ago',
    usage: 45
  },
  { 
    id: 'db-prod-01289342', 
    name: 'users-database-prod', 
    type: 'RDS Database', 
    provider: 'aws', 
    region: 'us-east-1',
    status: 'warning', 
    cost: 105.60,
    updated: '12 minutes ago',
    usage: 92
  },
  { 
    id: 's3-static-assets', 
    name: 'static-assets-bucket', 
    type: 'S3 Bucket', 
    provider: 'aws', 
    region: 'us-east-1',
    status: 'healthy', 
    cost: 22.30,
    updated: '30 minutes ago',
    usage: 64
  },
  { 
    id: 'lambda-process-payments', 
    name: 'process-payments', 
    type: 'Lambda Function', 
    provider: 'aws', 
    region: 'us-east-1',
    status: 'critical', 
    cost: 8.45,
    updated: '1 hour ago',
    usage: 100
  },
  { 
    id: 'vm-analytics-345678', 
    name: 'analytics-server-01', 
    type: 'Azure VM', 
    provider: 'azure', 
    region: 'eastus',
    status: 'healthy', 
    cost: 58.90,
    updated: '2 hours ago',
    usage: 72
  },
  { 
    id: 'gke-cluster-987654', 
    name: 'data-processing-cluster', 
    type: 'GKE Cluster', 
    provider: 'gcp', 
    region: 'us-central1',
    status: 'warning', 
    cost: 124.60,
    updated: '3 hours ago',
    usage: 88
  },
  { 
    id: 'i-9876543210fedcba0', 
    name: 'api-server-prod-02', 
    type: 'EC2 Instance', 
    provider: 'aws', 
    region: 'us-west-2',
    status: 'healthy', 
    cost: 38.75,
    updated: '4 hours ago',
    usage: 65
  },
];

const getResourceIcon = (type: string) => {
  if (type.includes('EC2') || type.includes('Instance') || type.includes('VM')) return Server;
  if (type.includes('Database') || type.includes('RDS')) return Database;
  if (type.includes('Bucket') || type.includes('Storage')) return HardDrive;
  if (type.includes('Security') || type.includes('IAM')) return Shield;
  if (type.includes('Lambda') || type.includes('Function')) return Cpu;
  if (type.includes('Pod') || type.includes('Kubernetes') || type.includes('Cluster')) return Cpu;
  return Server;
};

const ResourcesPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Cloud Resources</h1>
        <div className="flex flex-col md:flex-row gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <DownloadCloud className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Resource
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-8"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Select defaultValue="all-providers">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-providers">All Providers</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="azure">Azure</SelectItem>
                  <SelectItem value="gcp">Google Cloud</SelectItem>
                  <SelectItem value="k8s">Kubernetes</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-types">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Resource Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="compute">Compute</SelectItem>
                  <SelectItem value="storage">Storage</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="network">Network</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-status">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="idle">Idle</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Resource Inventory</CardTitle>
          <CardDescription>
            Manage your cloud resources across multiple providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 font-medium text-left">Name & ID</th>
                  <th className="pb-3 font-medium text-left">Type</th>
                  <th className="pb-3 font-medium text-left hidden md:table-cell">Provider</th>
                  <th className="pb-3 font-medium text-left hidden lg:table-cell">Region</th>
                  <th className="pb-3 font-medium text-left">Status</th>
                  <th className="pb-3 font-medium text-left hidden md:table-cell">Usage</th>
                  <th className="pb-3 font-medium text-left hidden lg:table-cell">Cost</th>
                  <th className="pb-3 font-medium text-right">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => {
                  const Icon = getResourceIcon(resource.type);
                  
                  return (
                    <tr key={resource.id} className="border-b border-border hover:bg-muted/50">
                      <td className="py-4">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{resource.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground mt-1">{resource.id}</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm">{resource.type}</td>
                      <td className="py-4 hidden md:table-cell">
                        <Badge variant="outline" className={`resource-badge resource-badge-${resource.provider}`}>
                          {resource.provider.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-4 text-sm hidden lg:table-cell">{resource.region}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <span className={`status-dot status-dot-${resource.status}`}></span>
                          <span className="capitalize text-sm">{resource.status}</span>
                        </div>
                      </td>
                      <td className="py-4 hidden md:table-cell">
                        <div className="w-full bg-muted rounded-full h-2.5 dark:bg-muted">
                          <div 
                            className={`h-2.5 rounded-full ${
                              resource.usage > 90 ? 'bg-red-500' : 
                              resource.usage > 70 ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${resource.usage}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="py-4 text-sm hidden lg:table-cell">${resource.cost.toFixed(2)}/mo</td>
                      <td className="py-4 text-sm text-right">{resource.updated}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
};

export default ResourcesPage;
