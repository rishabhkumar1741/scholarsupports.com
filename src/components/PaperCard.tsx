import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}

export function PaperCard({carddata}:any)
{
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/papers/${carddata.filename}`}>
            {/* <embed  className="rounded-t-lg" src="https://sumanbogati.github.io/tiny.pdf" width="600px" height="500px" />  */}
            <object className="rounded-t-lg w-full"  data={`${carddata.fileurl}`} >
            </object>
            </Link>
            

            <div className="p-5">
            <Badge className="capitalize">{carddata.college}</Badge>

                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Previous Year <span className="capitalize">{carddata.course}</span>  Paper:  [<span className="capitalize">{carddata.subject}/{carddata.papertype}</span> ]</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: [{carddata.batch}] | Difficulty: [{carddata.level}] | Semister: [{carddata.semester}].</p>
                <Link download href={`/papers/${carddata.filename}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Download File
                     <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
        )
}