const mapping: Record<string, string> = {
  customers: 'customer',
  prompts: 'prompt',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
