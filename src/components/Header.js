import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

const Header = () => {
  return (
    <header>
      <Container>
        <Columns>
          <Column>
            <p>My Gatsby Site</p>
          </Column>
          <Column>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page-2/">Page 2</Link>
              </li>
              <li>
                <a href="https://github.com/zurgbot/gatsby-starter-zurgbot">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </Column>
        </Columns>
      </Container>
    </header>
  );
};

export default Header;
