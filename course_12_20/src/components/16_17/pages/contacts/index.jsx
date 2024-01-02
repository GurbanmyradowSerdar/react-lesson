import { useParams, useSearchParams } from "react-router-dom";

export default function ContactsPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  return <div>Contacts page {params.id}</div>;
}
