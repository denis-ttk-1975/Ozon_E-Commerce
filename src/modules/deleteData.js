const deleteData = () => {
  return fetch('http://localhost:3000/goods/25', {
    method: 'DELETE',
  }).then((res) => res.json());
};

export default deleteData;
