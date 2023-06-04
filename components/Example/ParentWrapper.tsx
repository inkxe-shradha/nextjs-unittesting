const ParentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <p>Parent content</p>
      {children}
    </div>
  );
};

export default ParentWrapper;
