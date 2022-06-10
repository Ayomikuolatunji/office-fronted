import { AiOutlineTeam, AiTwotoneCalendar } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";


export const adminSidebarItems=[
  {
    route:"/admin-dashboard/projects",
    item:"Projects",
    icon: <GrProjects/>
  },{
    route:"/admin-dashboard/employees",
    item:"Employees",
    icon: <AiOutlineTeam/>
  },{
      route:"/admin-dashboard/calendar",
    item:"Calendar",
    icon: <AiTwotoneCalendar/>
  }

]