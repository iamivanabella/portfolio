import { Search } from "lucide-react";

import { StatCard } from "./StatCard";

export function HeroComposite() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[680px] lg:mr-0">
      <div className="absolute right-0 top-4 h-[325px] w-[96%] rounded-[18px] border border-line bg-white shadow-card">
        <div className="flex items-center justify-between rounded-t-[18px] border-b border-line px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="text-xs font-semibold text-ink">Overview</div>
          <div className="flex items-center gap-3 text-slate-400">
            <Search size={14} />
            <div className="h-6 w-6 rounded-full bg-[linear-gradient(135deg,#f1f5ff,#d7e3ff)]" />
          </div>
        </div>
        <div className="grid grid-cols-[88px_1fr] gap-4 p-4">
          <div className="rounded-2xl border border-line bg-slate-50/60 p-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-blue/10" />
              <span className="text-xs font-bold text-ink">FinDash</span>
            </div>
            {["Overview", "Transactions", "Budgets", "Reports", "Goals", "Settings"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-2 rounded-lg px-2 py-1.5 text-[10px] font-semibold ${
                    index === 0 ? "bg-white text-blue shadow-sm" : "text-muted"
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              <StatCard title="Total Balance" value="$60,810.35" trend="+12.5%" />
              <StatCard title="Income" value="$3,240.00" trend="+8.3%" />
              <StatCard title="Expenses" value="$3,420.50" trend="-3.1%" />
              <StatCard title="Savings" value="$4,819.50" trend="+16.5%" />
            </div>
            <div className="grid grid-cols-[1.6fr_1fr] gap-3">
              <div className="rounded-2xl border border-line bg-white p-4">
                <div className="mb-3 text-[10px] font-bold text-ink">Spending Over Time</div>
                <div className="flex h-[150px] items-end gap-2 overflow-hidden">
                  {[26, 44, 38, 52, 58, 74, 66, 81, 72, 96].map((height, index) => (
                    <div key={index} className="flex h-full flex-1 items-end">
                      <div
                        className="w-full rounded-t-full bg-[linear-gradient(180deg,#8fb2ff,#2563ff)]"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-white p-4">
                <div className="mb-4 text-[10px] font-bold text-ink">Spending by Category</div>
                <div className="mx-auto h-28 w-28 rounded-full bg-[conic-gradient(#3f85ff_0_32%,#f59e0b_32%_52%,#ef5da8_52%_70%,#22c55e_70%_86%,#8b5cf6_86%_100%)] p-4">
                  <div className="h-full w-full rounded-full bg-white" />
                </div>
                <div className="mt-4 space-y-2 text-[10px]">
                  {[
                    ["Housing", "32%"],
                    ["Food", "20%"],
                    ["Transport", "18%"],
                    ["Entertainment", "16%"],
                    ["Others", "14%"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between text-muted">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[6%] top-[215px] w-[260px] rounded-2xl bg-[#111827] p-4 text-white shadow-[0_18px_38px_rgba(15,23,42,0.35)]">
        <div className="mb-3 flex items-center gap-2 text-[10px] text-slate-400">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="space-y-2 font-mono text-[10px] leading-5 text-slate-300">
          <div>
            <span className="text-blue-300">function</span> <span className="text-white">App</span>
            () {"{"}
          </div>
          <div className="pl-3">
            <span className="text-fuchsia-300">const</span> data = {"{"}
            <span className="text-emerald-300">name</span>:{" "}
            <span className="text-amber-300">&quot;Ivan&quot;</span>
            {"}"};
          </div>
          <div className="pl-3">
            <span className="text-fuchsia-300">return</span> (
          </div>
          <div className="pl-6 text-sky-300">&lt;Hero /&gt;</div>
          <div className="pl-3">);</div>
          <div>{"}"}</div>
        </div>
      </div>

      <div className="absolute bottom-7 left-[31%] w-[155px] rounded-2xl border border-line bg-white p-4 shadow-panel">
        <p className="text-[10px] font-bold text-ink">User Growth</p>
        <p className="mt-2 text-2xl font-black text-emerald-500">+24.5%</p>
        <p className="text-[10px] text-muted">vs last month</p>
        <div className="mt-4 flex h-14 items-end gap-1">
          {[28, 36, 41, 46, 54, 64, 73, 82].map((height, index) => (
            <div key={index} className="flex-1 rounded-t-full bg-blue" style={{ height }} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[82%] rounded-2xl border border-line bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between text-[10px] font-semibold text-muted">
          <span>Project Board</span>
          <span>...</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            ["To Do", "Design landing page", "May 12"],
            ["In Progress", "Build dashboard UI", "May 14"],
            ["Review", "Code review", "May 15"],
            ["Done", "Launch v1.0", "May 19"],
          ].map(([status, item, date]) => (
            <div key={status} className="rounded-xl border border-line bg-slate-50/70 p-3">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-bold text-ink">{status}</p>
                <span className="text-[10px] text-muted">3</span>
              </div>
              <div className="rounded-lg border border-white bg-white p-2">
                <p className="text-[10px] font-semibold text-ink">{item}</p>
                <p className="mt-2 text-[9px] text-muted">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
