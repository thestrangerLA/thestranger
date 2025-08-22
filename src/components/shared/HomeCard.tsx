import { Card, CardContent } from '@/components/ui/card';

interface HomeCardProps {
  emoji: string;
  title: string;
  onClick: () => void;
}

export default function HomeCard({ emoji, title, onClick }: HomeCardProps) {
  return (
    <Card onClick={onClick} className="p-4 shadow-sm cursor-pointer transition-transform hover:scale-105 hover:shadow-md">
      <CardContent className="flex items-center p-0 gap-3">
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
          <span className="text-3xl">{emoji}</span>
        </div>
        <span className="font-semibold text-card-foreground">{title}</span>
      </CardContent>
    </Card>
  );
}
