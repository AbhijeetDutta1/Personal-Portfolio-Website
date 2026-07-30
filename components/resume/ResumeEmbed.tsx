import { Download, ExternalLink } from "lucide-react";

// TODO: replace with the real FlowCV share link (e.g. https://flowcv.com/resume/xxxxx).
const FLOWCV_URL = "https://flowcv.com/resume/REPLACE_ME";

export default function ResumeEmbed() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-3">
        <a
          href={FLOWCV_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
        >
          <ExternalLink size={16} />
          Open in New Tab
        </a>
        <a
          href="/abhiresume1115.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-ink/10" style={{ aspectRatio: "8.5 / 11" }}>
        <iframe
          src={FLOWCV_URL}
          title="Abhijeet Dutta's Resume"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
