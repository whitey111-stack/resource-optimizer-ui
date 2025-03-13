
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, Book, MessageSquare, FileText, Video, Link } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AppLayout from '@/components/Layout/AppLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">Find answers, get support, and learn about our platform</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Search for Help</CardTitle>
              <CardDescription>Find answers to your questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input 
                  className="flex-1" 
                  placeholder="Search for help topics..." 
                />
                <Button>Search</Button>
              </div>
              
              <div className="mt-6">
                <Tabs defaultValue="faq">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="faq">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      FAQ
                    </TabsTrigger>
                    <TabsTrigger value="docs">
                      <Book className="h-4 w-4 mr-2" />
                      Documentation
                    </TabsTrigger>
                    <TabsTrigger value="guides">
                      <FileText className="h-4 w-4 mr-2" />
                      Guides
                    </TabsTrigger>
                    <TabsTrigger value="videos">
                      <Video className="h-4 w-4 mr-2" />
                      Videos
                    </TabsTrigger>
                    <TabsTrigger value="community">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Community
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="faq" className="mt-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I connect to my AWS account?</AccordionTrigger>
                        <AccordionContent>
                          To connect your AWS account, go to Settings &gt; Integrations and click on "Connect AWS Account". You'll need to provide your Access Key ID and Secret Access Key or set up cross-account IAM roles for more secure access.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>How can I monitor my cloud costs?</AccordionTrigger>
                        <AccordionContent>
                          Our platform provides comprehensive cost monitoring through the Billing dashboard. You can view cost breakdowns by service, set budget alerts, and receive recommendations for cost optimization.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How do I set up alerts for resource usage?</AccordionTrigger>
                        <AccordionContent>
                          Navigate to Monitoring &gt; Alerts and click "Create Alert". Select the resource type, define thresholds, and choose notification channels. You can set alerts for CPU, memory, disk usage, and more.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Can I manage multiple cloud providers?</AccordionTrigger>
                        <AccordionContent>
                          Yes, our platform supports multi-cloud management. You can connect AWS, Azure, Google Cloud, and Kubernetes clusters for unified visibility and control across all your cloud resources.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>How secure is the platform?</AccordionTrigger>
                        <AccordionContent>
                          Security is our top priority. We use end-to-end encryption, implement least-privilege access, and offer SSO and MFA. We never store your cloud provider credentials and support IAM role-based access for enhanced security.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="docs" className="mt-4">
                    <div className="space-y-4">
                      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Getting Started Guide</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Complete guide to setting up your account and connecting cloud providers</p>
                            <Button variant="outline" size="sm" className="w-full">
                              <FileText className="h-4 w-4 mr-2" />
                              Read Guide
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">API Documentation</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Comprehensive API reference for developers</p>
                            <Button variant="outline" size="sm" className="w-full">
                              <FileText className="h-4 w-4 mr-2" />
                              View API Docs
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Resource Management</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Learn how to effectively manage cloud resources</p>
                            <Button variant="outline" size="sm" className="w-full">
                              <FileText className="h-4 w-4 mr-2" />
                              Read Documentation
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Security Best Practices</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Guidelines for securing your cloud infrastructure</p>
                            <Button variant="outline" size="sm" className="w-full">
                              <FileText className="h-4 w-4 mr-2" />
                              View Security Guide
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="guides" className="mt-4">
                    <p>Step-by-step guides coming soon</p>
                  </TabsContent>
                  
                  <TabsContent value="videos" className="mt-4">
                    <p>Video tutorials coming soon</p>
                  </TabsContent>
                  
                  <TabsContent value="community" className="mt-4">
                    <p>Community forums coming soon</p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Talk to our support team in real-time</p>
                    <Button size="sm" className="mt-2">Start Chat</Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Submit Ticket</h3>
                    <p className="text-sm text-muted-foreground">Create a support ticket for complex issues</p>
                    <Button size="sm" className="mt-2">Open Ticket</Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                  <Link className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Resources</h3>
                    <p className="text-sm text-muted-foreground">Helpful links to resources</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <p><a href="#" className="text-blue-500 hover:underline">Knowledge Base</a></p>
                      <p><a href="#" className="text-blue-500 hover:underline">Video Tutorials</a></p>
                      <p><a href="#" className="text-blue-500 hover:underline">Community Forum</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default HelpPage;
