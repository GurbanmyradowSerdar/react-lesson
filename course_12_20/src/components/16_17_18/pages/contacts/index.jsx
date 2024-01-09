import { Fragment, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getContactById } from "../../loader";

export default function ContactsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [data, setData] = useState({ body: [] });

  useEffect(() => {
    getContactById(params.id).then((value) => {
      if (value.isError) {
        throw new Error("error");
      }
      setData((prev) => {
        console.log(prev);
        return value;
      });
    });
  }, []);

  return (
    <div className="*:text-5xl">{data.body.length > 0 && data.body[0].id}</div>
  );
}
