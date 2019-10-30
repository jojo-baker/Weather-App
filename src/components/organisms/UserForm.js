import React from 'react';
import InputText from '../molecules/InputText';
import InputEmail from '../molecules/InputEmail';
import InputTextArea from '../molecules/InputTextArea';

const UserForm = () => {
    return (
        <div>
            <InputText />
            <InputEmail />
            <InputTextArea />
        </div>
    )
}

export default UserForm;
