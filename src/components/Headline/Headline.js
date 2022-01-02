import * as React from 'react';

const Headline = ({tagName, headline, containerClassName, className, rawHTML = true, onClick,}) => {
    if ('' === headline) {
        return null;
    }
    if (!tagName) {
        tagName = 'h2';
    }

    const Element = tagName;

    if (rawHTML) {
        return (
            <header
                className={containerClassName}
                onClick={onClick}>
                <Element
                    className={className}
                    dangerouslySetInnerHTML={{
                        __html: headline,
                    }}
                />
            </header>
        );
    }

    return (
        <header
            className={containerClassName}
            onClick={onClick}>
            {<Element className={className}>{headline}</Element>}
        </header>
    );
};

export default Headline;
