import PageMenu from './PageMenu';


export default function Layout({ children }) {
  return (
    <>
      <PageMenu />
      {children}
    </>
  );
}
