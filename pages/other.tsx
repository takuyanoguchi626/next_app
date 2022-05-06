import Link from "next/link";
import Layout from "../components/Layout";
// import React from "react";
import { Header } from "./header";

export default function other() {
  const title = "Other";
  return (
    <div>
      <Layout header="Next.js" title="Other page.">
        <div className="card p-4 text-center">
          <h5 className="mb-4">This is Other page...</h5>
          <Link href="/">
            <button className="btn btn-primary">Back to Top</button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
