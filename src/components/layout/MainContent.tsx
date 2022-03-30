import Header from './Header';

const MainContent: React.FC = ({children}) => {
  return (
    <>
      <Header />
      <main className="container max-w-4xl mx-auto py-4 px-6 flex flex-col">
        {children}
      </main>
    </>
  );
};

export default MainContent;
