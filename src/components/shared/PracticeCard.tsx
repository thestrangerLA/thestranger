import { Card, CardContent } from '@/components/ui/card';

interface PracticeCardProps {
  emoji: string;
  title: string;
}

export default function PracticeCard({ emoji, title }: PracticeCardProps) {
  return (
    <Card className="p-4 shadow-sm">
      <CardContent className="flex items-center p-0 gap-3">
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
          <span className="text-3xl">{emoji}</span>
        </div>
        <span className="font-semibold text-card-foreground">{title}</span>
      </CardContent>
    </Card>
  );
}
