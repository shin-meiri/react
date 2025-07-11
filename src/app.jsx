const currentUrl = window.location.href;
return (
  <div>
    <h1>Hello, React!</h1>
    <p>URL aplikasi ini: <a href={currentUrl}>{currentUrl}</a></p>
  </div>
);
