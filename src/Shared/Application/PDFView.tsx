import dynamic from 'next/dynamic';
import '@react-pdf-viewer/core/lib/styles/index.css';
const PDFViewer = dynamic(
  () =>
    import('@react-pdf-viewer/core').then((mod) => {
      const { Worker, Viewer, SpecialZoomLevel } = mod;
      return function WrappedViewer() {
        return (
          <Worker workerUrl="/pdf-worker/pdf.worker.min.js">
            <Viewer
              fileUrl="/NDA_SAFT_agreement.pdf"
              defaultScale={SpecialZoomLevel.PageWidth}
            />
          </Worker>
        );
      };
    }),
  { ssr: false, loading: () => <p>Loading PDF...</p> }
);

export default PDFViewer;
