import React from 'react'
import styled from '@emotion/styled';
import { widths } from '../../styles';
import ProfileCard from '../../containers/ProfileCard';

const CourseDetail = ({ course }) => {

    return (
        <ContentSection>
            <img style={{ objectFit: 'cover', maxHeight: '400px', borderRadius: '4px', marginBottom: '30px' }} src="/gmitlogo.jpg" alt='' />
            <CourseDetails>
                <DetailRow>
                    <h1>{course.name || 'name'}</h1>
                </DetailRow>
                <DetailRow>
                    <h4>{course.bio || 'bio'}</h4>
                </DetailRow>
                <DetailRow>
                    <h4>Amount of people Graduated: {course.peopleGraduatedAggregate.count || '20'}</h4>
                </DetailRow>
                <DetailRow>
                    {course.peopleGraduated.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))}
                </DetailRow>
            </CourseDetails>
        </ContentSection>
    )
}

export default CourseDetail

const ContentSection = styled.div({
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: widths.textPageWidth,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#2d79a5',
});

const CourseDetails = styled.div({
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