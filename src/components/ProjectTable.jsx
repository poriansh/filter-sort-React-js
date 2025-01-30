import toLocalDateShort from "../utils/toLocalDateShort";
import {toPersianNumbers} from "../utils/toPersianNumbers";

function ProjectTable({projects}) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>شماره</th>
            <th>عنوان</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>تاریخ ایجاد</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.category.title}</td>
                <td>{toPersianNumbers(project.budget)}</td>
                <td>{toLocalDateShort(project.createdAt)}</td>
                <td>{toLocalDateShort(project.deadline)}</td>
                <td>
                  <div className="flex gap-3">
                    {project.tags.map((tag) => (
                      <span className="badge badge--primary">{tag}</span>
                    ))}
                  </div>
                </td>
                <td>
                  <span
                    className={`badge  ${
                      project.status === "OPEN" ? "badge--success" : "badge--danger"
                    }`}
                  >
                    {project.status === "OPEN" ? "باز" : "بسته"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ProjectTable;
