export function createPageUrl(name: string): string {
  // Map human names to paths
  const map: Record<string, string> = {
    Home: '/home',
    Projects: '/projects',
    Portfolio: '/portfolio',
    About: '/about',
    Contact: '/contact',
    HowItWorks: '/how-it-works',
    Legal: '/legal',
    TermsOfUse: '/terms-of-use',
    PrivacyPolicy: '/privacy-policy',
    CookieNotice: '/cookie-notice',
    KeyRisks: '/key-risks'
  };
  return map[name] ?? `/${name.toLowerCase()}`;
}



