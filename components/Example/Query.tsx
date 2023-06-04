import React from 'react';
import ParentWrapper from './ParentWrapper';

const Query = ({ toggleClick }: { toggleClick?: () => void }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <ParentWrapper>
            <button onClick={toggleClick}>Click Me</button>
            {isLoading ? (
                <button onClick={() => setIsLoading(!isLoading)}>Toggle</button>
            ) : (
                <ul>
                    {Array.from({ length: 12 }, (_, index) => index + 1).map(
                        (ele) => (
                            <li key={ele}>{ele}</li>
                        )
                    )}
                </ul>
            )}
        </ParentWrapper>
    );
};

export default Query;
