import { cn } from '@/lib/utils';
import { tokens } from '@/lib/design-tokens';

export function Section({
  children,
  className,
  container = true,
}: React.PropsWithChildren<{ className?: string; container?: boolean }>) {
  return (
    <section className={cn('w-full', className)} style={{ paddingBlock: tokens.spacing.sectionY }}>
      <div className={cn(container && 'mx-auto w-full max-w-6xl px-4')}>{children}</div>
    </section>
  );
}
