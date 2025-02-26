"use client"
import Link from "next/link";
import { useParams,useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li><Link href="/create">create</Link></li>
      {id ? <>
        <li><Link href={"/update/"+id}>update</Link></li>
        <li>
          <button onClick={async ()=>{
              const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${id}`, {
                method: 'DELETE',
              });
              await resp.json();
              router.push('/');
              router.refresh();
            }}>delete</button>
        </li>
      </>:null}
    </ul>
  );
}
