import * as React from 'react';
import { Section, SpacedItemDiv } from '../../LayoutUtils';
import { StyledH2Center, ExternalLink } from '../../TextUtils';

interface IQuote {
  quote: string;
  attr: string;
  url: string;
}

const quotes: Array<IQuote> = [
  {
    quote: `The place where you lock yourself in and lock all else out - that's
          not your home. Your home is sometimes a place you travel long and far
          to find.`,
    attr: 'Geralt of Rivia',
    url: 'https://witcher.fandom.com/wiki/Geralt_of_Rivia',
  },
  {
    quote: `Saruman believes it is only great power that can hold evil in check, but that is not what I have found. I found it is the small everyday deeds of ordinary folk that keep the darkness at bay. Small acts of kindness and love.`,
    attr: 'Gandalf the Grey',
    url: 'https://lotr.fandom.com/wiki/Gandalf',
  },
];

export const FavoriteQuotes: React.FC = () => {
  return (
    <Section>
      <StyledH2Center>Favorite Quotes</StyledH2Center>
      {quotes.map((quote, index) => {
        return (
          <SpacedItemDiv key={index}>
            <cite>"{quote.quote}"</cite>
            {' - '}
            <ExternalLink link={quote.url} text={quote.attr} />
          </SpacedItemDiv>
        );
      })}
    </Section>
  );
};
