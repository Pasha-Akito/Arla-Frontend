import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { mq } from '../styles';

const ProfileCard = ({ profile }) => {

    return (

        <CardContainer to={`/profile/${profile.id}`}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%' }}>

                <div style={{ height: '160px', position: 'relative' }}>
                    <img style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'greyscale(60%)' }} src={profile.image} />
                </div>

                <div style={{ padding: '18px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '18px', lineHeight: '16px', fontWeight: '700', color: 'black', flex: '1' }}>
                        {profile.name || 'name'}
                    </h3>
                    {profile.graduatedCoursesConnection.edges.map((course) => (
                        <h3> Graduated in {course.year || 1999}</h3>
                    ))}
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ lineHeight: '16px', fontSize: '14px' }}>
                            {profile.bio || 'bio'}
                        </div>
                    </div>
                </div>
            </div>
        </CardContainer>

    )
}

export default ProfileCard

const CardContainer = styled(Link)({
    borderRadius: 6,
    color: 'black',
    backgroundSize: 'cover',
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [mq[0]]: {
        width: '90%',
    },
    [mq[1]]: {
        width: '47%',
    },
    [mq[2]]: {
        width: '31%',
    },
    height: 300,
    margin: 10,
    overflow: 'hidden',
    position: 'relative',
    ':hover': {
        backgroundColor: 'lightBlue',
    },
    cursor: 'pointer',
    textDecoration: 'none',
});