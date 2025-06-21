import React, { useEffect, useRef, useState } from 'react'

function ExpandableText({ text }) {
    const [expanded, setExpanded] = useState(false);
    const [needsTruncation, setNeedsTruncation] = useState(false);
    const textRef = useRef(null);
    const lineCount = 5;


    useEffect(() => {

        if (!textRef.current) return;

        const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
        const maxHeight = lineHeight * lineCount;

        if (textRef.current.scrollHeight > maxHeight) {
            setNeedsTruncation(true);
        }
        else {
            setNeedsTruncation(false);
        }

    }, [text])

    return (
        <div>
            <p ref={textRef}
               className='text-gray-800 mb-3 transition-all duration-300 ease-in-out'
               style={{
                   overflow: "hidden",
                   display: "-webkit-box",
                   WebkitLineClamp: expanded ? 'none' : lineCount,
                   WebkitBoxOrient: 'vertical',
                   whiteSpace: expanded ? 'normal' : 'unset',
                   maxHeight: expanded ? 'none' : 'calc(1.4em * lineCount)',
               }}
            >
                {text}
            </p>

            <div className='text-right w-5rem'>

                {
                    needsTruncation && !expanded &&
                    (
                        <p
                            onClick={() => setExpanded(true)}
                            className="cursor-pointer text-indigo-600 hover:underline text-sm border-none"
                        >
                            daha fazla göster
                        </p>
                    )
                }

                {
                    expanded &&
                    (
                        <p
                            onClick={() => setExpanded(false)}
                            className="cursor-pointer text-indigo-600 hover:underline text-sm"
                        >
                            daha az göster
                        </p>
                    )
                }
            </div>

        </div >
    )
}

export default ExpandableText
