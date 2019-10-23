import React from 'react';
import FormTemplate from '../components/templates/FormTemplate';

const ComplaintPage = ({firstname, lastname, bio, ...props}) => {
    return (
        <div>
            <FormTemplate firstname="Clive" lastname="Weathers" bio="Here is the Weather Person's bio" avatar="/avatar.png"/>
        </div>
    )
}

export default ComplaintPage;
