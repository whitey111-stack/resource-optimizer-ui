
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Database, Cloud, Shield } from 'lucide-react';

interface ResourceCountProps {
  icon: React.ElementType;
  title: string;
  count: number;
  change: string;
  positive: boolean;
}

const ResourceCount: React.FC<ResourceCountProps> = ({ icon: Icon, title, count, change, positive }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0">
          <h3 className="text-sm font-medium tracking-tight text-muted-foreground">{title}</h3>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-end justify-between mt-2">
          <div className="text-2xl font-bold">{count}</div>
          <div className={`text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ResourceSummary = () => {
  const resources = [
    { icon: Server, title: 'Compute Instances', count: 32, change: '+2.5%', positive: true },
    { icon: Database, title: 'Database Services', count: 18, change: '-0.8%', positive: false },
    { icon: Cloud, title: 'Storage Buckets', count: 45, change: '+4.2%', positive: true },
    { icon: Shield, title: 'Security Services', count: 12, change: '+1.0%', positive: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {resources.map((resource, index) => (
        <ResourceCount
          key={index}
          icon={resource.icon}
          title={resource.title}
          count={resource.count}
          change={resource.change}
          positive={resource.positive}
        />
      ))}
    </div>
  );
};

export default ResourceSummary;
