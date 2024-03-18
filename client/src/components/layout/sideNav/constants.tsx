import { Icon } from '@iconify/react';
import { LuUser } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="16" height="16" />,
  },
  {
    title: 'Pro Management',
    path: '/projectManagement/',
    icon: <LuUser width="16" height="16" className="text-amber-500" />,
    submenu: true,
    subMenuItems: [
      { title: 'Overview', path: '/humanResource/overview' },
      { title: 'Onboarding', path: '/humanResource/onboarding' },
      { title: 'Attendance', path: '/humanResource/attendance' },    
      { title: 'Payroll', path: '/humanResource/payroll' },
    ],
  },
  {
    title: 'For Students',
    path: '/students',
    icon: <LuUser width="16" height="16" className="text-blue-500" />,
    submenu: true,
    subMenuItems: [
      { title: 'Group Registration', path: '/students/groupRegistration' },
    ],
  },
  {
    title: 'User Management',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="16" height="16" />,
  },
  {
    title: 'Marking',
    path: '/marking/',
    icon: <IoIosCheckmarkCircleOutline width="16" height="16" />,
    submenu: true,
    subMenuItems: [
      { title: 'Mark Sheet', path: '/marking/overview' },
      { title: 'Record finances', path: '/marking/recordFinances' },
    ],
  },
  {
    title: 'Research Publiction',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="16" height="16" />,
  },
  {
    title: 'Presentation Man',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="16" height="16" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="16" height="16" />,
  },
];