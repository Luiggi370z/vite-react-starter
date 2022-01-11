import { envVariables } from 'utils';

const MyButton = () => {
  return <div className="underline italic">{`My Button ${envVariables.MY_VAR}`}</div>;
};

export default MyButton;
