import { AiOutlineTeam, AiTwotoneCalendar } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { GrDiamond, GrProjects } from "react-icons/gr";
import { MdPayment } from "react-icons/md";


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
  },{
    route:"/admin-dashboard/Reports",
    item:"Reports",
    icon: <GoReport/>

  }
]

const AdminSidebarSettings = [
   {
    route:"/admin-dashboard/upgrade-plan",
    item:"Upgrade Plan",
    icon: <GrDiamond/>
   },{
    route:"/admin-dashboard/payments",
    item:"Payments",
    icon: <MdPayment/>
   }
]