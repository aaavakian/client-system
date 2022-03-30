import Header from './Header';

const MainContent: React.FC = ({children}) => {
  return (
    <>
      <Header />
      <main className="container max-w-4xl mx-auto py-5 px-6 flex flex-col gap-4">
        {children}
      </main>
    </>
  );
};

export default MainContent;
