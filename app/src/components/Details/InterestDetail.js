import React from 'react'
import styled from '@emotion/styled';
import { widths } from '../../styles';

const InterestDetail = ({ interest }) => {
    const { name, bio, id } = interest;

    return (
        <ContentSection>
            <img style={{ objectFit: 'cover', maxHeight: '400px', borderRadius: '4px', marginBottom: '30px' }} src="/gmitlogo.jpg" />
            <InterestDetails>
                <DetailRow>
                    <h1>{name || 'name'}</h1>
                </DetailRow>
                <DetailRow>
                    <h4>{bio || 'bio'}</h4>
                </DetailRow>
            </InterestDetails>
        </ContentSection>
    )
}

export default InterestDetail

const ContentSection = styled.div({
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: widths.textPageWidth,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#2d79a5',
});

const InterestDetails = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    marginBottom: 30,
    border: `solid 1px grey`,
    backgroundColor: 'white',
    h1: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 5,
    },
    h4: {
        fontSize: '20px',
        marginBottom: 5,
        color: 'black',
    },
});

const DetailRow = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottom: `solid 1px lightgrey`,
});