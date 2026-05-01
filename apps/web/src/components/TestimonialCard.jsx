import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

function TestimonialCard({ text, author, role, company }) {
  return (
    <Card className="h-full border-border bg-card">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="text-sm leading-relaxed mb-6 italic">{text}</p>
        <div className="border-t pt-4">
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{role}, {company}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;