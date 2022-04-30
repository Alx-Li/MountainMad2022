function getGrandma() {
  const GrandmaURL = [
    "https://www.abaconnect.com/wp-content/uploads/2017/12/grandmas_rule.jpeg",
    "https://wallpaperaccess.com/full/2095408.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2020-04/8/18/asset/c9550d25834f/sub-buzz-3806-1586369310-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    "https://www.wareable.com/media/imager/201801/27747-original.jpg",
    "https://www.gottabemobile.com/wp-content/uploads/grandma-computer-1280x720.jpg",
    "https://resizing.flixster.com/wOnUtCxz4532xiBQ7qfe0yXKf8Q=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/455/855/thumb_E829B440-FD2C-4735-B9E6-D8C1777100E5.jpg",
    "https://neviewpoint.com/wp-content/uploads/2012/02/381038_248860661851644_248860515184992_632537_794934217_n.jpg"
  ];
  return GrandmaURL[Math.floor(Math.random() * GrandmaURL.length)];
}

function validateURL(string) {
  try{
    new URL(string);
    return true;
  }
  catch(e){
    return false;
  }
}

const MealItem = ({ meal }) => {
  var image_url = meal.image;
  if(!validateURL(meal.image))
    image_url = getGrandma();
  // last commit
  return (
    <div className="shadow-lg rounded-lg bg-orange-300 p-4">
      <img src={image_url} className="w-full h-auto" alt="Grandma couldn't figure out how to work the camera :(" />
      <h3 className="text-xl font-normal text-center comic py-2">{meal.name}</h3>
      <div className="">
        <div className="px-3 font-light bg-white text-oragne-300 comic">
          <p className="self-start italic pb-2 text-center">{meal.description}</p>
          <p>Ingredients: <span className="italic">{meal.ingredients}</span></p>
          <p>Cooking Method: {meal.method}</p>
          <p className="">Made by: {meal.author}</p>
        </div>
      </div>
    </div>
  );
};
export default MealItem;
