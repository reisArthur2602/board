import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from './components/header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './providers/auth';
import { SidebarProvider } from './providers/sidebar';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard - Mais que atender, entender',
  description: 'Gerencie sua empresa, atendimentos e clientes',
  icons: {
    icon: '/board-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <AuthProvider>
          <SidebarProvider>
            <div className="flex h-full flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <ToastContainer
                position="top-right"
                autoClose={4000}
                theme="dark"
              />
            </div>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
