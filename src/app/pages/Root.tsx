import { Outlet, useLocation } from 'react-router';
import { TabBar } from '../components/TabBar';
import { ScrollToTop } from '../components/ScrollToTop';
import { ThemeProvider } from 'next-themes';

const noTabBarRoutes = ['/sign-in'];
const noHeaderRoutes = ['/', '/vision', '/sign-in'];

export function Root() {
  const location = useLocation();
  const showTabBar = !noTabBarRoutes.includes(location.pathname);
  const showHeader = !noHeaderRoutes.includes(location.pathname) && !location.pathname.startsWith('/recipe/');

  const getHeaderTitle = () => {
    if (location.pathname === '/search') return 'Recettes';
    if (location.pathname === '/chat') return 'Chef Farah';
    if (location.pathname === '/plan') return 'Menu';
    if (location.pathname === '/list') return 'Courses';
    if (location.pathname === '/profile') return 'Profil';
    if (location.pathname.startsWith('/recipe/')) return 'Recette';
    return '';
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        {showHeader && (
          <header className="sticky top-0 z-40 bg-card border-b border-[var(--border)] px-4 h-14 flex items-center">
            <h1 className="font-serif text-xl text-[var(--text)]">{getHeaderTitle()}</h1>
          </header>
        )}
        <main className={showTabBar ? 'pb-16' : ''}>
          <Outlet />
        </main>
        {showTabBar && <TabBar />}
      </div>
    </ThemeProvider>
  );
}