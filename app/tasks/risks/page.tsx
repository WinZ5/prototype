import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { column } from "../components/column";
import { DataTable } from "../components/data-table";
import { UserNav } from "../components/user-nav";
import { riskSchema } from "@/app/data/schema";

export const metadata: Metadata = {
  title: "Risks"
}

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/data/risks.json")
  ) 

  const risks = JSON.parse(data.toString())

  console.log(risks)

  return z.array(riskSchema).parse(risks);
}

export default async function TaskPage() {
  const risks = await getTasks()

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-end space-y-2">
          {/* <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div> */}
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={risks} columns={column} />
      </div>
    </>
  )
}