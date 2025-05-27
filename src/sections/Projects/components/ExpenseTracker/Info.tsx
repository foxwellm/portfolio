import Image from "next/image";

import { InfoWrapper } from "../InfoWrapper";

function Header() {
  return (
    <a
      href="https://FoxwellExpenseTracker.com"
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap cursor-pointer hover:underline"
    >
      FoxwellExpenseTracker.com
    </a>
  );
}
export function Info() {
  return (
    <InfoWrapper
      header={<Header />}
      techStacks={[
        "[ Next.js, TypeScript, Material-UI, D3, Apollo Client, Jest ]",
        "[ Vercel, Supabase Auth & DB, Postgres, GraphQL, Apollo Server ]",
      ]}
      description=" Expense Tracking website that implements CRUD functionality."
      links={
        <div className="flex gap-4">
          <a
            href="https://github.com/foxwellm/expense-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Image
              src="/projects/expense-tracker/github-mark-white.svg"
              alt="GitHub Mark"
              className="w-[1.5em] h-auto"
              width={40}
              height={20}
            />
            <Image
              src="/projects/expense-tracker/GitHub_Logo_White.png"
              alt="GitHub Logo"
              className="w-[4em] h-auto"
              width={100}
              height={20}
            />
          </a>
        </div>
      }
    />
  );
}
