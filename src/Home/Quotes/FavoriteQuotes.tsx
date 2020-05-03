import * as React from 'react';
import { PageSection, SectionContent, SpacedItemDiv } from '../../LayoutUtils';
import { StyledHeader } from '../../TextUtils';

export const FavoriteQuotes: React.FC = () => {
  const quotes = [
    {
      quote: `The place where you lock yourself in and lock all else out - that's
          not your home. Your home is sometimes a place you travel long and far
          to find.`,
      attr: 'Geralt of Rivia',
    },
    {
      quote: `Saruman believes it is only great power that can hold evil in check, but that is not what I have found. I found it is the small everyday deeds of ordinary folk that keep the darkness at bay. Small acts of kindness and love.`,
      attr: 'Gandalf',
    },
  ];
  return (
    <PageSection>
      <SectionContent>
        <StyledHeader>Favorite Quotes</StyledHeader>
      {quotes.map((quote, index) => {
        return (
          <SpacedItemDiv key={index}>
            <cite>"{quote.quote}"</cite>
            {` - ${quote.attr}`}
          </SpacedItemDiv>
        );
      })}
      </SectionContent>
    </PageSection>
  );
};
