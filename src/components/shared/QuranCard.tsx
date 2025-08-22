import { Card, CardContent } from '@/components/ui/card';

interface QuranCardProps {
  number: string;
  title: string;
  verses: string;
  arabicTitle: string;
  onClick: () => void;
}

export default function QuranCard({ number, title, verses, arabicTitle, onClick }: QuranCardProps) {
  return (
    <Card onClick={onClick} className="shadow-sm cursor-pointer hover:bg-secondary">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
           <div className="flex items-center justify-center w-10 h-10">
              <span className="text-primary font-semibold">{number}</span>
           </div>
           <div>
              <p className="font-semibold text-card-foreground">{title}</p>
              <p className="text-xs text-muted-foreground">{verses}</p>
           </div>
        </div>
        <p className="font-arabic text-2xl text-primary font-bold">{arabicTitle}</p>
      </CardContent>
    </Card>
  );
}
