import { CompanyTable } from "../components/company-table/CompanyTable";
import { Home } from "../components/home/Home";

//* For secured route
const routes = [

  {
    path: ['/'],
    exact: true,
    component: Home,
  },
  {
    path: '/companies',
    exact: true,
    component: CompanyTable,
  },
];

export default routes;
