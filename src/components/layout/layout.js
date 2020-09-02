import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

import jss from 'jss';
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  layout: {
    gridRow: 's/e',
    gridColumn: 's/e',
    maxWidth: '100%',
    display: 'grid',
    gridTemplateRows: '[nav-s] 50px [nav-e content-s] 1fr [content-e footer-s] 50px [foooter-e]',
    gridTemplateColumns: '[nav-s content-s footer-s] 1fr [nav-e content-e footer-e]'
  },
  layoutHeader: {
    gridRow: 'nav-s/nav-e',
    gridColumn: 'nav-s/nav-e',
    width: '100%'
  },
  layoutContent: {
    gridRow: 'content-s/content-e',
    gridColumn: 'content-s/content-e',
    width: '100%'
  },
  layoutFooter: {
    gridRow: 'footer-s/footer-e',
    gridColumn: 'footer-s/footer-e'
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default class Layout extends Component {
  render() {
    return (
      <div className={classes.layout}>
        <Header className={classes.layoutHeader}/>
        <div className={classes.layoutContent}>
          {this.props.children}
        </div>
        <Footer className={classes.layoutFooter}/>
      </div>
    );
  }
}
