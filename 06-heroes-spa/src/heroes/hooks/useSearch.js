import { useNavigate, useLocation } from 'react-router';
import queryString from 'query-string';

export const useSearch = (text) => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if( text.trim().length <= 1 ) return;

    navigate(`?q=${text.toLowerCase().trim()}`);
  }

  return [
    q,
    onSearchSubmit,
  ];
}