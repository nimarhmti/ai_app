import { RoutesDetails } from "@/Routes/RoutesDetails";
import Heading from "@/components/heading";
import React from "react";
import ConversationFrom from "./_form/From";
export default function Conversation() {
  const { Conversation } = new RoutesDetails();
  return (
    <div>
      <Heading
        title={Conversation.label}
        description="Our most advance conversation"
        Icon={Conversation.icon}
        iconColor={Conversation.color}
        bgColor={Conversation.bgColor}
      />
      <div className="px-4 lg:px-8 ">
        <ConversationFrom />
      </div>
    </div>
  );
}
