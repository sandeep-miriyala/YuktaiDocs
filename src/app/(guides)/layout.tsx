import GuideNav from "@/components/guides/GuideNav";

// Every guide: the sidebar, a place for release notes, then the guide itself.
// guide.css holds the styles for code tabs, live demos and reference tables.
export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/guide.css" precedence="default" />
      <div className="guide-layout">
        <GuideNav />
        <div className="guide-body">
          <div className="banner" id="docs-banner" role="status" hidden />
          {children}
        </div>
      </div>
    </>
  );
}
