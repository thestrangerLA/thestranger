import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({ title, icon, children, className }: ContentSectionProps) {
  return (
    <Card className={cn("bg-card shadow-sm border-none", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed text-card-foreground space-y-4">
        {children}
      </CardContent>
    </Card>
  );
}
