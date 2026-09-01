import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Remplace next/link et next/navigation pour la navigation interne :
// conserve automatiquement la locale courante dans les URLs.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
