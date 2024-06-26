import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { jakarta, poppins } from '@/fonts/font';
import '@/styles/reset.css'

export const metadata = {
  title: "<Abuzarli/>",
  description: "Generated by Elchin Abuzarli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${poppins.variable}`}>
          <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
