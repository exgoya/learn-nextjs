import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by exgoya",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics', {cache: 'no-cache'});
  const topics = await resp.json();
  const resp1 = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+"api");
  const data1 = await resp1.json();
  return (
    <html>
      <body>
        <h1>{data1.message}</h1>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic)=>{
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}