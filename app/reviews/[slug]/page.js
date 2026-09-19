import { notFound } from "next/navigation";

export const metadata = {
  title: "Review Source Unavailable",
  robots: { index: false, follow: true },
};

export default function ReviewPage() {
  notFound();
}
