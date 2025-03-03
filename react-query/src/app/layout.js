import { Aside } from '@/components/Aside';
import { SearchForm } from '@/components/SearchForm';
import { ReactQueryProvider } from '@/ReactQueryProvider';
import { Prompt } from 'next/font/google';
import './globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para devs!',
};

const prompt = Prompt({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <ReactQueryProvider>
        <body>
          <div className="app-container">
            <div>
              <Aside />
            </div>
            <div className="main-content">
              <SearchForm />
              {children}
            </div>
          </div>
        </body>
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </ReactQueryProvider>
    </html>
  );
}
