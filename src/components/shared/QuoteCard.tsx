interface QuoteCardProps {
  children: React.ReactNode;
  source: string;
}

export default function QuoteCard({ children, source }: QuoteCardProps) {
  return (
    <div className="bg-accent p-4 border-l-4 border-primary rounded-md my-6">
      <blockquote className="italic text-card-foreground">
        {children}
      </blockquote>
      <p className="text-right mt-2 text-sm text-card-foreground font-medium">- {source}</p>
    </div>
  );
}
