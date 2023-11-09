const API_KEY = "71c388fbef80c39f6f3ddcf356fe821c";

const requests = {
  trend: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  toprated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: ``,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
