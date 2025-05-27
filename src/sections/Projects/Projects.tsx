import { ExpenseTracker, ListTaskTick } from "./components";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex-1 flex-col bg-gray-950 py-32 space-y-32 scroll-mt-16 px-8"
    >
      <div className="flex flex-col lg:flex-row w-full">
        <ExpenseTracker />
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full">
        <ListTaskTick />
      </div>
    </section>
  );
}
