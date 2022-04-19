import React from 'react'
import styled from '@emotion/styled';
import { widths } from '../../styles';
import ConnectInterestButton from '../RelationshipButtons/ConnectInterestButton';
import DisconnectInterestButton from '../RelationshipButtons/DisconnectInterestButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import ProfileCard from '../../containers/ProfileCard';

export const USER_INTEREST_COUNT = gql`
query UserInterestCount($tokenId: String!, $name: String!) {
  userInterestCount(tokenId: $tokenId, name: $name)
}
`;

const InterestDetail = ({ interest }) => {

    const { user } = useAuth0();

    const { data, loading, error } = useQuery(USER_INTEREST_COUNT, {
        variables: {
            tokenId: user.sub,
            name: interest.name
        },
        fetchPolicy: "network-only"
    });

    if (loading) return <Box sx={{ display: 'center' }}>
        <CircularProgress />
    </Box>;

    if (error) return (
        <text>Error! ${error.message}</text>
    );


    return (
        <ContentSection>
            <img style={{ objectFit: 'cover', maxHeight: '400px', borderRadius: '4px', marginBottom: '30px' }} src="/gmitlogo.jpg" />
            <InterestDetails>
                <DetailRow>
                    <h1>{interest.name || 'name'}</h1>

                    {data.userInterestCount > 0
                        ?
                        <DisconnectInterestButton interestButton={interest.name} />
                        :
                        <ConnectInterestButton interestButton={interest.name} />
                    }

                </DetailRow>
                <DetailRow>
                    <h4>{interest.bio || 'bio'}</h4>
                </DetailRow>
                <DetailRow>
                    <h4>Amount of people interested: {interest.peopleInterestedAggregate.count || '20'}</h4>
                </DetailRow>
                <DetailRow>
                    {interest.peopleInterested.map((profile) => (
                        <ProfileCard key ={profile.id} profile={profile}/>
                    ))}
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