export function PageHeader({
  title,
  description,
  children,
  eyebrow = "Factory view",
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="border-b border-[color:color-mix(in_srgb,var(--factory-border)_76%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-canvas)_86%,black)] px-4 py-5 sm:px-8 sm:py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="factory-kicker mb-2">{eyebrow}</p>
          <h1 className="text-2xl font-semibold tracking-tight text-[color:var(--factory-text)] sm:text-[2rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--factory-text-muted)] sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children ? (
          <div className="flex w-full shrink-0 flex-wrap items-center gap-2 sm:w-auto sm:gap-2.5">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
