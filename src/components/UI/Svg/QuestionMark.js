import React from 'react';

const QuestionMark = ({click}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} onClick={click}>
            <path
                fill="#444"
                d="M9 10H7c0-2 1.2-2.6 2-3 .3-.1.5-.2.7-.4.1-.1.3-.3.1-.7-.2-.5-.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-.3C4.5 5 5.4 2.9 8 2.9c1.6 0 3 .9 3.6 2.2.4 1.1.2 2.2-.6 3-.4.4-.8.6-1.2.7-.6.4-.8.2-.8 1.2z"
            />
            <path
                fill="#444"
                d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm0-1C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
            />
            <path fill="#444" d="M6.9 11h2v2h-2v-2z" />
        </svg>
    );
};

export default QuestionMark;