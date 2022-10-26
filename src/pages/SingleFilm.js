const url =
  "https://api.themoviedb.org/3/movie/550?api_key=ab7b3a0007914779b57efa24bb03a284";

const { id } = useParams();
const [loading, setLoading] = useState(false);
const [films, setFilms] = useState({});

async function getFilms() {
  setLoading(true);
  try {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    console.log(data);
    if (data.films) {
      const {
        strFilm: name,
        strFilmThumb: image,
        strSynopsis: info,
        strCategory: category,
      } = data.films[0];
      const informations = [];
      const newFilm = {
        name,
        image,
        info,
        category,
      };
      setFilms(newFilm);
      setLoading(false);
    } else {
      setFilms(null);
    }
  } catch (error) {
    setLoading(false);
  }
}

useEffect(() => {
  getFilms();
  // eslint-disable-next-line
}, [id]);

const { name, image, category, info, ingredients } = films;
