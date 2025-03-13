
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', cpu: 55, memory: 40, network: 20 },
  { name: '03:00', cpu: 40, memory: 45, network: 25 },
  { name: '06:00', cpu: 65, memory: 50, network: 30 },
  { name: '09:00', cpu: 80, memory: 65, network: 45 },
  { name: '12:00', cpu: 75, memory: 60, network: 50 },
  { name: '15:00', cpu: 90, memory: 70, network: 65 },
  { name: '18:00', cpu: 85, memory: 75, network: 60 },
  { name: '21:00', cpu: 70, memory: 65, network: 45 },
];

const PerformanceOverview: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Resource Utilization</CardTitle>
        <CardDescription>24-hour performance metrics across your infrastructure</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis 
                className="text-xs"
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="cpu" 
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))" 
                fillOpacity={0.2} 
              />
              <Area 
                type="monotone" 
                dataKey="memory" 
                stroke="hsl(var(--secondary))" 
                fill="hsl(var(--secondary))" 
                fillOpacity={0.2} 
              />
              <Area 
                type="monotone" 
                dataKey="network" 
                stroke="hsl(var(--accent))" 
                fill="hsl(var(--accent))" 
                fillOpacity={0.2} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
            <span className="text-sm">CPU</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-secondary mr-2"></div>
            <span className="text-sm">Memory</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-accent mr-2"></div>
            <span className="text-sm">Network</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceOverview;
