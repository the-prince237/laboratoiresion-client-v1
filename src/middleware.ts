import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Détection de la langue du navigateur à la première visite,
// puis mémorisation du choix via le cookie NEXT_LOCALE.
export default createMiddleware(routing);

export const config = {
  // Exclut l'API, les internes Next.js et tous les fichiers statiques (ex: /documents/*.pdf)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
