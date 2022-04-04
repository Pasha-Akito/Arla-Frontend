import React from 'react';
import Header from './Header/Header';
import styled from '@emotion/styled';
import { widths, unit } from '../styles';

const Layout = ({ fullWidth, children, grid }) => {
    return (
      <>
        <Header />
        <PageContainer fullWidth={fullWidth} grid={grid}>
          {children}
        </PageContainer>
      </>
    );
  };
  
  export default Layout;
  
  /** Layout styled components */
  const PageContainer = styled.div((props) => ({
    display: 'flex',
    backgroundColor: '#2d79a5',
    justifyContent: props.grid ? 'center' : 'top',
    flexDirection: props.grid ? 'row' : 'column',
    flexWrap: 'wrap',
    alignSelf: 'center',
    flexGrow: 1,
    maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
    width: '100%',
    padding: props.fullWidth ? 0 : unit * 2,
    paddingLeft: props.fullWidth ? 0 : unit * 5,
    paddingRight: props.fullWidth ? 0 : unit * 5,
    paddingBottom: unit * 5,
    marginLeft: 'auto',
    marginRight: 'auto'
  }));
  