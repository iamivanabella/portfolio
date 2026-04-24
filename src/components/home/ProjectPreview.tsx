type ProjectPreviewProps = {
  variant: string;
};

export function ProjectPreview({ variant }: ProjectPreviewProps) {
  if (variant === "board") {
    return (
      <div className="rounded-[14px] border border-line bg-white p-3">
        <div className="grid h-[180px] grid-cols-[52px_1fr] overflow-hidden rounded-xl border border-line">
          <div className="bg-[#0f214f] p-3 text-[8px] text-white/70">
            <div className="mb-3 text-white">TaskFlow</div>
            <div className="space-y-2">
              <div className="h-1 rounded bg-white/30" />
              <div className="h-1 rounded bg-white/20" />
              <div className="h-1 rounded bg-white/20" />
              <div className="h-1 rounded bg-white/20" />
            </div>
          </div>
          <div className="bg-slate-50 p-3">
            <div className="mb-3 grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-8 rounded-lg bg-white shadow-sm" />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-14 rounded-lg bg-white shadow-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "stay") {
    return (
      <div className="rounded-[14px] border border-line bg-white p-3">
        <div className="h-[180px] overflow-hidden rounded-xl border border-line bg-white">
          <div className="border-b border-line px-3 py-2">
            <div className="mb-2 h-5 w-24 rounded bg-slate-100" />
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-7 rounded-md bg-slate-100" />
              ))}
            </div>
          </div>
          <div className="p-3">
            <div className="mb-2 text-[10px] font-bold text-ink">Popular Homes</div>
            <div className="grid grid-cols-3 gap-2">
              {["#9bb8d9", "#b58d68", "#9c8a74"].map((color, index) => (
                <div key={index}>
                  <div className="h-16 rounded-lg" style={{ backgroundColor: color }} />
                  <div className="mt-2 h-2 w-16 rounded bg-slate-200" />
                  <div className="mt-1 h-2 w-10 rounded bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[14px] border border-line bg-white p-3">
      <div className="grid h-[180px] grid-cols-[54px_1fr] overflow-hidden rounded-xl border border-line">
        <div className="bg-[#10224c] p-3">
          <div className="mb-3 h-2.5 w-7 rounded bg-white/90" />
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-1 rounded bg-white/25" />
            ))}
          </div>
        </div>
        <div className="bg-white p-3">
          <div className="mb-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-line p-2">
              <div className="h-2 w-10 rounded bg-slate-100" />
              <div className="mt-2 h-3 w-14 rounded bg-slate-200" />
            </div>
            <div className="rounded-lg border border-line p-2">
              <div className="h-2 w-10 rounded bg-slate-100" />
              <div className="mt-2 h-3 w-14 rounded bg-slate-200" />
            </div>
            <div className="rounded-lg border border-line p-2">
              <div className="h-2 w-10 rounded bg-slate-100" />
              <div className="mt-2 h-3 w-14 rounded bg-slate-200" />
            </div>
          </div>
          <div className="grid grid-cols-[1.25fr_0.9fr] gap-2">
            <div className="rounded-xl border border-line p-3">
              <div className="flex h-[80px] items-end gap-1.5">
                {[18, 30, 25, 44, 39, 61, 57, 73].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-full bg-blue/70" style={{ height }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-line p-3">
              <div className="mx-auto h-16 w-16 rounded-full bg-[conic-gradient(#4f8cff_0_35%,#ff9c3f_35%_53%,#4fd1c5_53%_74%,#7c5cff_74%_100%)] p-3">
                <div className="h-full w-full rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
