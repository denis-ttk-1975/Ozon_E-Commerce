import getData from './getData';
import postData from './postData';
import deleteData from './deleteData';

const second = () => {
  const cartBtn = document.getElementById('cart');

  cartBtn.addEventListener('click', () => {
    // deleteData().then((data) => {
    //   console.log(data);
    //   getData().then((data) => console.log(data));
    // });
    postData().then((data) => {
      console.log(data);
      getData().then((data) => console.log(data));
    });
  });
};

export default second;
