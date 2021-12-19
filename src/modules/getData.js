const getData = () => {
  return fetch('http://localhost:3000/goods').then((res) => {
    return res.json();
  });
  // .then((data) => console.log(data));
};

export default getData;
