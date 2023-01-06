
export const ROUTES = {
	MAIN: `/`,
	LOGIN: `/login`,
	UNAUTHORIZED: `/unauthorized`,
	DASHBOARD: `/dashboard`,
	NOT_FOUND: `/not-found`,
	LIFESTYLE: `/lifestyle`,
	ABOUT: '/about',
    BLOG: '/blog',
	RECIPES: '/recipes',
	NEW_RECIPE: 'new',
	VIEW_ROUTE: (id: number | string) => `${id}/view`,
	EDIT_ROUTE: (id: number | string) => `${id}/edit`,
	CHANGE_PASSWORD_BY_ID: (id: number | string) => `${id}/password`,
};