import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

function TeamMemberCard({ name, role, initials, bgColor }) {
  return (
    <Card className="border-border hover:shadow-md transition-all duration-300">
      <CardContent className="pt-6 text-center">
        <Avatar className={`w-24 h-24 mx-auto mb-4 rounded-xl ${bgColor}`}>
          <AvatarFallback className="text-2xl font-semibold bg-transparent text-white rounded-xl">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{role}</p>
      </CardContent>
    </Card>
  );
}

export default TeamMemberCard;