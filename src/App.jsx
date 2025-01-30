import {useState} from "react";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectTable from "./components/ProjectTable";
import {projects} from "./data/projects";

function App() {
  const [status, setstatus] = useState("ALL");
  const [category, setcategory] = useState("ALL");
  const [sort, setsort] = useState("created_desc");
  const handelclickbtn = (value) => {
    setstatus(value);
  };
  const handlechengecategory = (e) => {
    setcategory(e.target.value);
  };
  const onchangeSort = (e) => {
    setsort(e.target.value);
  };
  const handelSort = (a, b) => {
    switch (sort) {
      case "created_desc":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "created_asc":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case "deadline_asc":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case "deadline_desc":
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      case "budget_desc":
        return b.budget - a.budget;
      case "budget_asc":
        return a.budget - b.budget;
    }
  };
  const filterProject = projects
    .filter((p) => (status === "ALL" ? true : p.status === status))
    .filter((p) => (category === "ALL" ? true : p.category.englishTitle === category))
    .sort(handelSort);
  return (
    <div className="flex justify-center pt-20 p-4">
      <div className="max-w-screen-lg w-full">
        <ProjectsHeader
          status={status}
          onchangeStatus={handelclickbtn}
          onchangeCategory={handlechengecategory}
          sort={sort}
          category={category}
          onchangeSort={onchangeSort}
        />
        <ProjectTable projects={filterProject} />
      </div>
    </div>
  );
}

export default App;
