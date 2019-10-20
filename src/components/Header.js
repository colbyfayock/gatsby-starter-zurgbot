import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <p>My Gatsby Site</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Page 2</Link>
          </li>
          <li>
            <Link to="https://github.com/zurgbot/gatsby-starter-zurgbot">
              <FaGithub />
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
