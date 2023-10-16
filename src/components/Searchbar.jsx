import { React} from 'react'
import { MichaelJackson } from '../screens/MichaelJackson'
import { Link, useLocation, useNavigate } from 'react-router-dom'
function Searchbar(props) {
  const { curca, updateshow } = props
  const navigate = useNavigate()
  const handleClick = () => {
    console.log("curca.name",curca.name);
    updateshow(curca)
    navigate('/ca')
  };

  return (
    // this display the search data and if click then navigate to this page
    <div className='barlist'>
      <span onClick={() => handleClick()}>{curca.name}</span>
    </div>
  );
}

export default Searchbar
