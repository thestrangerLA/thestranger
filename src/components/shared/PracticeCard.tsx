import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PracticeCardProps {
  emoji: string;
  title: string;
  onClick?: () => void;
}

export default function PracticeCard({ emoji, title, onClick }: PracticeCardProps) {
  return (
    <Card 
      onClick={onClick} 
      className={cn("p-4 shadow-sm", onClick && "cursor-pointer transition-transform hover:scale-105 hover:shadow-md")}
    >
      <CardContent className="flex items-center p-0 gap-3">
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
          <span className="text-3xl">{emoji}</span>
        </div>
        <span className="font-semibold text-card-foreground">{title}</span>
      </CardContent>
    </Card>
  );
}
