const ROUTES = require('./routes')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      [ROUTES.home.href]: { page: ROUTES.home.href },
      [ROUTES.dashboard.href]: { page: ROUTES.dashboard.href },
      [ROUTES.dashboardVillages.href]: { page: ROUTES.dashboardMyVikings.href },
      [ROUTES.dashboardMyVikings.href]: {
        page: ROUTES.dashboardMyVikings.href,
      },
      [ROUTES.dashboardMyBoats.href]: {
        page: ROUTES.dashboardMyBoats.href,
      },
      [ROUTES.dashboardMyClans.href]: {
        page: ROUTES.dashboardMyClans.href,
      },
      [ROUTES.dashboardFinance.href]: {
        page: ROUTES.dashboardMyFinance.href,
      },
      [ROUTES.dashboardMyFinance.href]: {
        page: ROUTES.dashboardMyFinance.href,
      },
     
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    })

    return config
  },
}
