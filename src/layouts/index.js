import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/typography.css';
import '../css/layout.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Blog | Foss@Amritagiri"
          meta={[
            { name: 'description', content: 'blog' },
            { name: 'keywords', content: 'blog, Foss at Amritagiri' },
          ]}
        />
        <div
          style={{
            background: `white`,
            marginBottom: `1.45rem`,
            boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: isRoot ? `0.7rem 1.0875rem` : `.5rem 0.75rem`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: isRoot ? `2rem` : `1.5rem` }}>
              <Link
                to="/"
                style={{
                  color: '#0A79DF',
                  textDecoration: 'none',
                  fontFamily: "'Lobster', sans-serif",
                }}
              >
                Foss@Amrita
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
