import SectionCard from "../ui/SectionCard";
import { RECENT_QR_CODES } from "../../constants/recentQrCodes";

function RecentQrList() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-slate-950">
        Recent QR Codes
      </h2>

      <SectionCard className="p-0">
        <ul className="divide-y divide-slate-200">
          {RECENT_QR_CODES.map((qrCode) => (
            <li
              key={qrCode.id}
              className="flex cursor-pointer items-center justify-between gap-4 p-4 transition hover:bg-slate-50"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                  {qrCode.icon}
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-slate-900">
                    {qrCode.title}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {qrCode.url}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span
                  className={`rounded px-2 py-1 text-xs font-bold uppercase ${
                    qrCode.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {qrCode.status}
                </span>

                <button className="text-slate-400 hover:text-blue-900">
                  ⬇
                </button>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}

export default RecentQrList;