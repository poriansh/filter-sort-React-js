import Filter from "../ui/Filter";
import Select from "../ui/Select";
import {projects} from "../data/projects";

// ROLE: USER, ADMIN, MANGAER,..
// STATUS: ALL, OPEN, CLOSED
// SIZE: L, XL, XXL
// ACTIVE:

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const categorys = projects.map((p) => {
  return {
    label: p.category.title,
    value: p.category.englishTitle,
  };
});
const createobjectsCategory = [
  {
    label: "همه",
    value: "ALL",
  },
  ...categorys,
];

const sortOptions = [
  {
    label: "تاریخ ایجاد (جدید ترین)",
    value: "created_desc",
  },
  {
    label: "تاریخ ایجاد (قدیمی ترین)",
    value: "created_asc",
  },
  {
    label: "قیمت (صعودی)",
    value: "budget_asc",
  },
  {
    label: "قیمت (نزولی)",
    value: "budget_desc",
  },
  {
    label: "ددلاین (صعودی)",
    value: "deadline_asc",
  },
  {
    label: "ددلاین (نزولی)",
    value: "deadline_desc",
  },
];

function ProjectsHeader({status, sort, category, onchangeStatus, onchangeCategory, onchangeSort}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-secondary-700 mb-8">
      <h1 className="text-lg font-bold ">لیست پروژه ها</h1>
      <Filter status={status} option={statusOptions} onchange={onchangeStatus} />
      <Select option={createobjectsCategory} value={category} onChange={onchangeCategory} />
      <Select option={sortOptions} value={sort} onChange={onchangeSort} />
    </div>
  );
}
export default ProjectsHeader;
