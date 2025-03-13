
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
  HardDrive, 
  Database, 
  Save, 
  FileText
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

interface StorageResource {
  id: string;
  name: string;
  type: 'S3 Bucket' | 'Block Storage' | 'File System' | 'Database Backup' | 'Archive';
  provider: 'aws' | 'azure' | 'gcp';
  region: string;
  size: number; // in GB
  used: number; // in GB
  status: 'active' | 'archived' | 'provisioning';
  lastAccessed: string;
  created: string;
}

const storageResources: StorageResource[] = [
  {
    id: 's3-app-assets',
    name: 'app-assets-production',
    type: 'S3 Bucket',
    provider: 'aws',
    region: 'us-east-1',
    size: 500,
    used: 342.5,
    status: 'active',
    lastAccessed: '10 minutes ago',
    created: '2023-05-15',
  },
  {
    id: 'ebs-db-vol-01',
    name: 'database-volume-primary',
    type: 'Block Storage',
    provider: 'aws',
    region: 'us-east-1',
    size: 1000,
    used: 786.2,
    status: 'active',
    lastAccessed: '5 minutes ago',
    created: '2023-03-22',
  },
  {
    id: 'efs-shared-01',
    name: 'shared-file-system',
    type: 'File System',
    provider: 'aws',
    region: 'us-west-2',
    size: 2000,
    used: 1256.8,
    status: 'active',
    lastAccessed: '1 hour ago',
    created: '2023-01-10',
  },
  {
    id: 'az-blob-media',
    name: 'media-content-storage',
    type: 'Block Storage',
    provider: 'azure',
    region: 'eastus',
    size: 5000,
    used: 3245.7,
    status: 'active',
    lastAccessed: '30 minutes ago',
    created: '2022-11-05',
  },
  {
    id: 'gcp-bucket-logs',
    name: 'application-logs',
    type: 'S3 Bucket',
    provider: 'gcp',
    region: 'us-central1',
    size: 750,
    used: 523.9,
    status: 'active',
    lastAccessed: '15 minutes ago',
    created: '2023-06-30',
  },
  {
    id: 'rds-backup-prod',
    name: 'production-db-backup',
    type: 'Database Backup',
    provider: 'aws',
    region: 'us-east-1',
    size: 200,
    used: 200,
    status: 'archived',
    lastAccessed: '7 days ago',
    created: '2023-07-15',
  },
  {
    id: 'az-archive-2023',
    name: 'yearly-archive-2023',
    type: 'Archive',
    provider: 'azure',
    region: 'westeurope',
    size: 1500,
    used: 1500,
    status: 'archived',
    lastAccessed: '45 days ago',
    created: '2023-12-31',
  },
  {
    id: 'gcp-fs-new',
    name: 'new-file-system',
    type: 'File System',
    provider: 'gcp',
    region: 'europe-west1',
    size: 1000,
    used: 0,
    status: 'provisioning',
    lastAccessed: 'Never',
    created: 'Today',
  },
];

const getStorageIcon = (type: string) => {
  if (type.includes('S3') || type.includes('Bucket')) return DownloadCloud;
  if (type.includes('Block')) return HardDrive;
  if (type.includes('File System')) return FileText;
  if (type.includes('Database')) return Database;
  if (type.includes('Archive')) return Save;
  return HardDrive;
};

const calculateUsagePercentage = (used: number, size: number) => {
  return Math.round((used / size) * 100);
};

const formatStorageSize = (sizeInGB: number) => {
  if (sizeInGB >= 1000) {
    return `${(sizeInGB / 1000).toFixed(1)} TB`;
  }
  return `${sizeInGB} GB`;
};

const StoragePage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Storage Resources</h1>
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
            Add Storage
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
                placeholder="Search storage resources..."
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
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-types">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Storage Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="s3">S3 Bucket</SelectItem>
                  <SelectItem value="block">Block Storage</SelectItem>
                  <SelectItem value="file">File System</SelectItem>
                  <SelectItem value="backup">Database Backup</SelectItem>
                  <SelectItem value="archive">Archive</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all-status">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                  <SelectItem value="provisioning">Provisioning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Storage Inventory</CardTitle>
          <CardDescription>
            Manage your cloud storage resources across multiple providers
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
                  <th className="pb-3 font-medium text-left">Usage</th>
                  <th className="pb-3 font-medium text-left hidden lg:table-cell">Size</th>
                  <th className="pb-3 font-medium text-right">Last Accessed</th>
                </tr>
              </thead>
              <tbody>
                {storageResources.map((resource) => {
                  const Icon = getStorageIcon(resource.type);
                  const usagePercentage = calculateUsagePercentage(resource.used, resource.size);
                  
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
                        <Badge 
                          variant="outline" 
                          className={`status-badge status-badge-${
                            resource.status === 'active' ? 'healthy' : 
                            resource.status === 'archived' ? 'idle' : 'warning'
                          }`}
                        >
                          {resource.status}
                        </Badge>
                      </td>
                      <td className="py-4">
                        <div className="w-full bg-muted rounded-full h-2.5 dark:bg-muted">
                          <div 
                            className={`h-2.5 rounded-full ${
                              usagePercentage > 90 ? 'bg-red-500' : 
                              usagePercentage > 70 ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${usagePercentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground mt-1">
                          {formatStorageSize(resource.used)} / {formatStorageSize(resource.size)}
                        </span>
                      </td>
                      <td className="py-4 text-sm hidden lg:table-cell">{formatStorageSize(resource.size)}</td>
                      <td className="py-4 text-sm text-right">{resource.lastAccessed}</td>
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

export default StoragePage;
