import Image from "next/image";

import { InfoWrapper } from "../InfoWrapper";

export function Info() {
  return (
    <InfoWrapper>
      <h3 className="text-[1.75em] text-sky-400 font-bold text-center lg:text-left">
        <a
          href="https://FoxwellExpenseTracker.com"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap cursor-pointer hover:underline"
        >
          FoxwellExpenseTracker.com
        </a>
      </h3>
      <div className="flex flex-col text-gray-400 -mt-4">
        <span className="text-[0.75em] max-w-full text-gray-400">
          [ Next.js, TypeScript, Material-UI, D3, Apollo Client, Jest ]
        </span>

        <span className="text-[0.75em] max-w-full">
          [ Vercel, Supabase Auth & DB, Postgres, GraphQL, Apollo Server ]
        </span>
      </div>
      <span className="text-[0.875em] text-gray-200 max-w-full">
        Expense Tracking website that implements CRUD functionality.
      </span>

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
    </InfoWrapper>
  );
}
