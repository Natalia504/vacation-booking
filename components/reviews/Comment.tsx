"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function Comment({ comment }: { comment: string }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const longComment = comment.length > 130;
  const displayComment =
    longComment && !expanded ? `${comment.slice(0, 130)}...` : comment;
  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="pl-0 text-muted-foreground"
          onClick={toggleExpanded}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}
