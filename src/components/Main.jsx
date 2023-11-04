const Main = (props) => {
  return (
    <main className="bg-red-600 flex-grow">
      <p>main content</p>
      {props.children}
    </main>
  );
};

export default Main;
