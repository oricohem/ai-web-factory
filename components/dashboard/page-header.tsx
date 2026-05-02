export function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10 bg-zinc-950/50 px-4 py-6 sm:px-8 sm:py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children ? (
          <div className="flex w-full shrink-0 flex-wrap items-center gap-2 sm:w-auto sm:gap-3">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
