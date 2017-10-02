export default (elem) => {
  elem.addEventListener('click', (e) => {
    console.log('click from handler', e);
  });
};
