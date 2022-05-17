const Header = () => {
  const view = `
    <div class="header-logo">
      <h1>ClimaApp</h1>
      <img src="../assets/images/cloud.png" alt="Clima App Icon">
    </div>
    <nav class="header-menu">
      <ul>
        <li>
          <a href="https://openweathermap.org/" target='_blank' rel='noopener noreferrer'>
            <img src="../assets/images/key.png" alt="API" alt="API Icon">
            <span>API</span>
          </a>
        </li>

        <li>
          <a href="">
            <img src="../assets/images/github.png" alt="Code" alt="Code">
            <span>Code</span>
          </a>
        </li>
        <li>

          <a href="https://www.linkedin.com/in/edgardoavs/" target='_blank' rel='noopener noreferrer'>
            <img src="../assets/images/linkedin.png" alt="" alt="About me">
            <span>About</span>
          </a>
        </li>

      </ul>

    </nav>
  `;

  return view;
}

export { Header };