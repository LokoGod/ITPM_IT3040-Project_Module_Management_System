import { Icon } from '@iconify/react';
import { LuUser } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="16" height="16" />,
  },
  {
    title: 'Module Management',
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
    title: 'Messages',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="16" height="16" />,
  },
  {
    title: 'Marking Management',
    path: '/markingManagement/',
    icon: <GrMoney width="16" height="16" className="text-lime-500" />,
    submenu: true,
    subMenuItems: [
      { title: 'Overview', path: '/finance/overview' },
      { title: 'Record finances', path: '/finance/recordFinances' },
    ],
  },
  {
    title: 'Settings',
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