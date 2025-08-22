import { Card, CardContent } from '@/components/ui/card';

interface VerseCardProps {
  number: string;
  arabic: string;
  lao: string;
}

export default function VerseCard({ number, arabic, lao }: VerseCardProps) {
  return (
    <Card className="shadow-sm mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-base font-bold text-primary">{number}</p>
          <p className="font-arabic text-xl text-right leading-relaxed text-foreground">{arabic}</p>
        </div>
        <p className="text-xl font-bold text-card-foreground mt-4 leading-relaxed">{lao}</p>
      </CardContent>
    </Card>
  );
}
