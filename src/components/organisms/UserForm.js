import React from 'react';
import InputText from '../molecules/InputText';
import InputEmail from '../molecules/InputEmail';
import InputTextArea from '../molecules/InputTextArea';
import Button from '../atoms/Button';

const UserForm = () => {
    return (
        <div>
            <InputText />
            <InputEmail />
            <InputTextArea />
            <Button />
        </div>
    )
}

export default UserForm;
