const DASHBOARD_ROUTES = {
  dashboard: {
    id: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard',
    private: true,
  },
  dashboardVillages: {
    id: 'dashboard-my-villages',
    name: 'My villages',
    href: '/dashboard/villages',
    private: true,
  },
  dashboardMyVikings: {
    id: 'dashboard-my-vikings',
    name: 'My vikings',
    href: '/dashboard/villages/vikings',
    private: true,
  },
  dashboardMyBoats: {
    id: 'dashboard-my-boats',
    name: 'My boats',
    href: '/dashboard/villages/boats',
    private: true,
  },
  dashboardMyClans: {
    id: 'dashboard-my-clans',
    name: 'My clans',
    href: '/dashboard/villages/clans',
    private: true,
  },
  dashboardFinance: {
    id: 'dashboard-finance',
    name: 'Finance',
    href: '/dashboard/finance',
    private: true,
  },
  dashboardMyFinance: {
    id: 'dashboard-my-finance',
    name: 'My Finance',
    href: '/dashboard/finance/home',
    private: true,
  },
}

const ROUTES = {
  home: {
    id: 'home',
    name: 'Home',
    href: '/',
  },
  ...DASHBOARD_ROUTES,
}

module.exports = ROUTES
