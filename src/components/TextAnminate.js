import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
  'Personal Recipe Organizer',
  ' Everything in one place',
  ' Personalize Your Recipe',
];

const TextAnminate = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
};

export default TextAnminate;
