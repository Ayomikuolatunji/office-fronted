import { AiOutlineTeam, AiTwotoneCalendar } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { GrDiamond, GrProjects } from "react-icons/gr";
import { MdPayment } from "react-icons/md";


export const adminSidebarItems=[
  {
    route:"/admin-dashboard/projects",
    item:"Projects",
    icon: <GrProjects/>
  },{
    route:"/admin-dashboard/tasks",
    item:"Tasks",
    icon:  <BiTask/>
  }
  ,{
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

export const AdminSidebarSettings = [
   {
    route:"/admin-dashboard/upgrade-plan",
    item:"Upgrade Plan",
    icon: <GrDiamond/>
   },{
    route:"/admin-dashboard/payments",
    item:"Payments",
    icon: <MdPayment/>
   },{
    route:"/admin-dashboard/app-settings",
    item:"App Settings",
    icon: <FcSettings/>
   }
]