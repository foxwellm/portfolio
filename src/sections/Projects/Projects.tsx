import { ExpenseTracker, ListTaskTick } from "./components";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-1 flex-col gap-8 p-8 scroll-mt-16"
    >
      <div className="flex flex-col lg:flex-row w-full">
        <ExpenseTracker />
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full ">
        <ListTaskTick />
      </div>
    </section>
  );
}
