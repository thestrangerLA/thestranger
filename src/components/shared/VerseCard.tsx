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
        <div className="flex justify-between items-start mb-2 text-right">
          <span className="text-sm font-bold text-primary mr-2 leading-loose">{`(${number})`}</span>
          <p className="font-arabic text-2xl leading-relaxed text-foreground">{arabic}</p>
        </div>
        <p className="text-lg font-bold text-card-foreground mt-4 leading-relaxed">{lao}</p>
      </CardContent>
    </Card>
  );
}
