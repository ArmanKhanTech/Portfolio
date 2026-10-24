import React from "react";

// The white tile with an orange line icon used on every card.
const IconBadge = ({ Icon }) => {
  return (
    <span className="icon-tile" aria-hidden="true">
      <Icon className="w-7 h-7 text-orange-600" />
    </span>
  );
};

export default IconBadge;
