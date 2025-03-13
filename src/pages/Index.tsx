
import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import ResourceSummary from '@/components/Dashboard/ResourceSummary';
import PerformanceOverview from '@/components/Dashboard/PerformanceOverview';
import ResourceList from '@/components/Dashboard/ResourceList';
import CostOverview from '@/components/Dashboard/CostOverview';
import AlertsPanel from '@/components/Dashboard/AlertsPanel';

const Index = () => {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">Cloud Resource Dashboard</h1>
      
      <section className="mb-6">
        <ResourceSummary />
      </section>
      
      <section className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <PerformanceOverview />
          <AlertsPanel />
        </div>
      </section>
      
      <section className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CostOverview />
          <div className="col-span-1 md:col-span-2">
            <ResourceList />
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Index;
