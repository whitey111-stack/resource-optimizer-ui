
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ServerCrash, Server, Database, HardDrive, Shield, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Resource {
  id: string;
  name: string;
  type: string;
  provider: 'aws' | 'k8s' | 'azure' | 'gcp';
  status: 'healthy' | 'warning' | 'critical' | 'idle';
  updated: string;
  usage: number;
}

const resources: Resource[] = [
  { 
    id: 'i-1234567890abcdef0', 
    name: 'web-server-prod-01', 
    type: 'EC2 Instance', 
    provider: 'aws', 
    status: 'healthy', 
    updated: '2 minutes ago',
    usage: 78
  },
  { 
    id: 'pod-web-5d7b9f8c4d-abc12', 
    name: 'web-deployment-pod-1', 
    type: 'Kubernetes Pod', 
    provider: 'k8s', 
    status: 'healthy', 
    updated: '5 minutes ago',
    usage: 45
  },
  { 
    id: 'db-prod-01289342', 
    name: 'users-database-prod', 
    type: 'RDS Database', 
    provider: 'aws', 
    status: 'warning', 
    updated: '12 minutes ago',
    usage: 92
  },
  { 
    id: 's3-static-assets', 
    name: 'static-assets-bucket', 
    type: 'S3 Bucket', 
    provider: 'aws', 
    status: 'healthy', 
    updated: '30 minutes ago',
    usage: 64
  },
  { 
    id: 'lambda-process-payments', 
    name: 'process-payments', 
    type: 'Lambda Function', 
    provider: 'aws', 
    status: 'critical', 
    updated: '1 hour ago',
    usage: 100
  },
];

const getResourceIcon = (type: string) => {
  if (type.includes('EC2') || type.includes('Instance')) return Server;
  if (type.includes('Database') || type.includes('RDS')) return Database;
  if (type.includes('Bucket') || type.includes('Storage')) return HardDrive;
  if (type.includes('Security') || type.includes('IAM')) return Shield;
  if (type.includes('Lambda') || type.includes('Function')) return Cpu;
  if (type.includes('Pod') || type.includes('Kubernetes')) return Cpu;
  return Server;
};

const ResourceList: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Recent Resources</CardTitle>
        <CardDescription>Latest activity across your cloud infrastructure</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 font-medium text-muted-foreground text-sm">Name</th>
                <th className="pb-2 font-medium text-muted-foreground text-sm">Type</th>
                <th className="pb-2 font-medium text-muted-foreground text-sm hidden md:table-cell">Provider</th>
                <th className="pb-2 font-medium text-muted-foreground text-sm">Status</th>
                <th className="pb-2 font-medium text-muted-foreground text-sm hidden md:table-cell">Usage</th>
                <th className="pb-2 font-medium text-muted-foreground text-sm text-right">Updated</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource) => {
                const Icon = getResourceIcon(resource.type);
                return (
                  <tr key={resource.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{resource.name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-muted-foreground text-sm">{resource.type}</td>
                    <td className="py-3 hidden md:table-cell">
                      <Badge variant="outline" className={`resource-badge resource-badge-${resource.provider}`}>
                        {resource.provider.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <span className={`status-dot status-dot-${resource.status}`}></span>
                        <span className="capitalize text-sm">{resource.status}</span>
                      </div>
                    </td>
                    <td className="py-3 hidden md:table-cell">
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
                    <td className="py-3 text-right text-muted-foreground text-sm">{resource.updated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceList;
