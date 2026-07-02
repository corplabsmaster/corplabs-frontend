import React from "react";

import { TierId } from "../../data/corpsite";

interface Props {
  tier: TierId;
}

/**
 * Placeholder slot for tier-specific portfolio anchors. The Notion brief
 * lists case-study attachments per tier (HiTerra → Stack/Suite, Corpi/
 * PerfectSign → Studio, NGO pilot → Launch, etc.) — fill these in once
 * the case studies are written. Renders nothing visible by default.
 */
const PortfolioAnchorPlaceholder: React.FC<Props> = ({ tier }) => {
  // TODO: wire actual portfolio anchor links per tier when content lands.
  return (
    <span
      data-portfolio-tier={tier}
      data-corpsite-portfolio-slot="true"
      className="hidden"
      aria-hidden="true"
    />
  );
};

export default PortfolioAnchorPlaceholder;
