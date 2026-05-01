import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="h-full border-border hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;