import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <ThreeDots
    height="200"
    width="200"
    radius="9"
    color="#5CD3A8"
    ariaLabel="three-dots-loading"
    wrapperStyle={{ marginTop: '30px' }}
  />
);

export default Loader;
