import Layout from '../../components/layout';
import Sidebar from '../../components/sidebar';
import '../globals.css';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <Sidebar />
      {children}
    </Layout>
  );
}