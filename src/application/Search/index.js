import React, { useState, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from './style';
import SearchBox from '../../baseUI/search-box/index';

function Search (props) {
  const [query, setQuery] = useState('');
  // 控制动画
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const searchBack = useCallback(() => {
    setShow(false);
  }, []);

  const handleQuery = (q) => {
    setQuery(q);
  }
  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container>
        <div className="search_box_wrapper">
          <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery}></SearchBox>
        </div>
      </Container>
    </CSSTransition>
  )
}

export default Search;