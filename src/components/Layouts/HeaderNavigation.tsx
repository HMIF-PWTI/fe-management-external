const HeaderNavigation = () => {
  return (
    <div className="flex justify-between px-5 py-3 items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="space-x-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Content</a>
        <a href="">IF-Pedia</a>
        <a href="">Contact Us</a>
      </div>
      <div className="space-x-5">
        <a href="">Report</a>
        <a href="">Lapak KWU</a>
      </div>
    </div>
  );
};

export default HeaderNavigation;
