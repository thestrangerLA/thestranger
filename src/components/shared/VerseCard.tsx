import { Card, CardContent } from '@/components/ui/card';

interface VerseCardProps {
  number: string;
  arabic: string;
  lao: string;
}

export default function VerseCard({ number, arabic, lao }: VerseCardProps) {
  return (
    <Card className="shadow-sm mb-4">
      <CardContent className="p-6">
        <p className="text-lg font-bold text-primary mb-2">{number}</p>
        <p className="font-arabic text-2xl text-right leading-relaxed text-foreground">{arabic}</p>
        <p className="text-base font-medium text-card-foreground mt-4 leading-relaxed">{lao}</p>
      </CardContent>
    </Card>
  );
}
