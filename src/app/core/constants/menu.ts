import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [{ label: 'Nfts', route: '/dashboard/nfts' }],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Blogs (News & Updates)',
          route: '/blog',
          children: [
            { label: 'News & Updates', route: '/blog/viewblogs' },
            { label: 'Add News or Updates ', route: '/blog/addblogs' },
          ],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Dragons',
          route: '/dragons',
          children: [{ label: 'Add Dragon +', route: '/dragons/CreateDragons' }, { label: 'View Dragon', route: '/dragons/ViewDragons' }],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Territory',
          route: '/territory',
          children: [{ label: 'Add Territory +', route: '/territory/Createrritory' }, { label: 'View Territories ', route: '/territory/ViewTerritory' }],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'AMA',
          route: '/ama',
          children: [{ label: 'View AMAs ', route: '/ama/ViewEvent' }, { label: 'Add AMA ', route: '/ama/CreateEvent' }],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Users',
          route: '/users',
          children: [{ label: 'View Users ', route: '/users/ViewUsers' }, { label: 'Add Users ', route: '/users/ViewUserDetails' }],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },

    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        // {
        //   icon: 'assets/icons/outline/folder.svg',
        //   label: 'Folders',
        //   route: '/folders',
        //   children: [
        //     { label: 'Current Files', route: '/folders/current-files' },
        //     { label: 'Downloads', route: '/folders/download' },
        //     { label: 'Trash', route: '/folders/trash' },
        //   ],
        // },
      ],
    },
  ];
}
