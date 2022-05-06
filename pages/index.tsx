import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Image from "../components/image";
import useSWR from "swr";

export default function Home() {
  const url = "/data.json";
  const fetcher = (req: RequestInfo) => fetch(req).then((res) => res.json());
  const { data } = useSWR(url, fetcher);

  const func = (req: RequestInfo) => fetch(req).then((res) => res.text());
  const data2 = useSWR("/data.txt", func);
  console.log(data2.data);

  // const [data, setData] = useState({ message: "", data: [] });
  // useEffect(() => {
  //   try {
  //     fetch(url)
  //       .then((res) => res.json()) //受け取ったデータをjson形式に変える
  //       .then((res) => setData(res))
  //       .then(() => console.log(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{data2.data}</h5>
          {/* {data !== undefined ? data.message : "error..."} */}
          <table className="table bg-white">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>
              {data !== undefined ? (
                data.data.map((value, key) => (
                  <tr key={key}>
                    <th>{value.name}</th>
                    <th>{value.mail}</th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>no data.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}
