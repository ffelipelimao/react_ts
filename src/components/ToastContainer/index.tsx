import React from 'react';
import { useTransition } from 'react-spring'

import Toast from './Toast';
import { Container } from './styles'
import { ToastMessage } from '../../hooks/Toats'

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

    const messagesWithTransactions = useTransition(
        messages,
        message => message.id,
        {
            from: { right: '-120%' },
            enter: { right: '0%' },
            leave: { right: '-120%' }
        }
    )

    return (
        <Container>
            {messagesWithTransactions.map(({ item, key, props }) => (
                <Toast key={key} style={props} message={item} />
            ))}
        </Container>
    );
}

export default ToastContainer;