const Search = () => {

  const view = `
    <form class='form' action=''>
      <input class="search-input" type="text" placeholder="Search for a city">
      <button type='submit' class="search-button" id="search-button">Submit<span><img href="../assets/images/search.png"></span></button>
    </form>
  `;

  return view;
}

export { Search };