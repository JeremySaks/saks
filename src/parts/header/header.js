import React from 'react';
import {Link, IndexLink} from 'react-router';

const paths = ['projects', 'contact'];

const Header = props => <header id='header'>
  <h1>
    <IndexLink to='/'>J</IndexLink>
  </h1>
  <nav>
    {paths.map(path => <Link
      key={path}
      to={`/${path}`}
      activeClassName='current'>
        {path}
      </Link>)}
    <a>blog</a>
  </nav>
</header>;

export default Header;