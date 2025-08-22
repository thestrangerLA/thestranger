import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SummaryCardProps {
  title: string;
  children: React.ReactNode;
}

export default function SummaryCard({ title, children }: SummaryCardProps) {
  return (
    <Card className="bg-primary text-primary-foreground shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{children}</p>
      </CardContent>
    </Card>
  );
}
