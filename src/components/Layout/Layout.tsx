import MainNavigation from './MainNavigation';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

export default Layout;
