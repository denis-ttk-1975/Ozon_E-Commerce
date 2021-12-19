const getData = () => {
  // return fetch('http://localhost:3000/goods').then((res) => {
  //   return res.json();
  // });
  // .then((data) => console.log(data));

  return fetch(
    'https://ozon-e-commerce-default-rtdb.firebaseio.com/goods.json'
  ).then((res) => {
    return res.json();
  });
};

export default getData;
