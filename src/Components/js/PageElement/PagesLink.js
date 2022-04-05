export const PagesLink = {
  popular:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=060f347dcc7582a34aa7ccbecd45da16&page=1",
  nowInCinema: `https://api.themoviedb.org/3/discover/movie?primary_release_year=${dateNow``}&sort_by=vote_average.desc&api_key=060f347dcc7582a34aa7ccbecd45da16&page=1`,
};

function dateNow() {
  const local = new Date();
  let year = local.getFullYear();
  return year;
}
