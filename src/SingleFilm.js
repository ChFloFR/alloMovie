const url =
  "https://api.themoviedb.org/3/movie/550?api_key=ab7b3a0007914779b57efa24bb03a284";

const { id } = useParams();
const [loading, setLoading] = useState(false);
const [cocktails, setCocktails] = useState({});

async function getCocktails() {
  setLoading(true);
  try {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    console.log(data);
    if (data.drinks) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strinstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setCocktails(newCocktail);
      setLoading(false);
    } else {
      setCocktails(null);
    }
  } catch (error) {
    setLoading(false);
  }
}

useEffect(() => {
  getCocktails();
  // eslint-disable-next-line
}, [id]);

if (loading) {
  return <Loading />;
}

const { name, image, category, info, glass, instructions, ingredients } =
  cocktails;
