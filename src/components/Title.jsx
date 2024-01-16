
import { Helmet} from 'react-helmet-async';

const Title = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>Software House | {title}</title>
      </Helmet>
    </div>
  );
};

export default Title;