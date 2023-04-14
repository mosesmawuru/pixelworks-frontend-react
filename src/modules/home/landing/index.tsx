import React from "react";
import {
  HomeLandingCard,
  HomeLandingContainer,
  HomeLandingTextWrapper,
  HomeLandingWrapper,
} from "./styles";
import { RequestQuoteCard } from "../../../components";

export const HomeLanding: React.FC = () => {
  return (
    <HomeLandingWrapper>
      <HomeLandingContainer>
        <HomeLandingTextWrapper>
          <h1>Software For The Extraordinary</h1>
          <p>
            Cras vehicula sapien quis volutpat auctor. Phasellus consectetur
            laoreet pulvinar.
          </p>
          <span>Trusted by Top-Tier Companies</span>
          <div>
            {[...new Array(5)].map((item, key) => (
              <img src="/images/home-item.png" alt="" key={key} />
            ))}
          </div>
        </HomeLandingTextWrapper>
        <HomeLandingCard>
          <div>
            <RequestQuoteCard />
          </div>
        </HomeLandingCard>
      </HomeLandingContainer>
    </HomeLandingWrapper>
  );
};
