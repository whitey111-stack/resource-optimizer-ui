
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'EC2', aws: 4200, azure: 0, gcp: 0 },
  { name: 'Storage', aws: 2800, azure: 1400, gcp: 900 },
  { name: 'Database', aws: 3500, azure: 0, gcp: 1200 },
  { name: 'Network', aws: 1800, azure: 900, gcp: 0 },
  { name: 'Kubernetes', aws: 2500, azure: 0, gcp: 0 },
  { name: 'Security', aws: 1200, azure: 600, gcp: 300 },
];

const CostOverview: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Cost Distribution</CardTitle>
        <CardDescription>Monthly cost breakdown by service and provider</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis 
                className="text-xs"
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Cost']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar dataKey="aws" stackId="a" fill="#FF9900" />
              <Bar dataKey="azure" stackId="a" fill="#0078D4" />
              <Bar dataKey="gcp" stackId="a" fill="#4285F4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#FF9900] mr-2"></div>
            <span className="text-sm">AWS</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#0078D4] mr-2"></div>
            <span className="text-sm">Azure</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#4285F4] mr-2"></div>
            <span className="text-sm">GCP</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostOverview;
