import RDFUploader from "@/app/components/RDFUploader";
import KGNavigatorLayout from "@/app/components/KGNavigatorLayout";

export default function UploadPage() {
  return (
    <KGNavigatorLayout>
      <RDFUploader />
    </KGNavigatorLayout>
  );
}
