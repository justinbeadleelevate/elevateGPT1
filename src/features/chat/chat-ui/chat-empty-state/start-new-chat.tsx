import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { AI_NAME } from "@/features/theme/customise";
import { FC } from "react";
import { NewChat } from "../../chat-menu/new-chat";

interface Prop {}

export const StartNewChat: FC<Prop> = (props) => {
  return (
    <div className="grid grid-cols-5 w-full items-center container mx-auto max-w-3xl justify-center h-full gap-9">
      <div className="col-span-2 gap-5 flex flex-col flex-1">
        <img src="/ai-icon.png" className="w-36" />
      </div>
      <Card className="col-span-3 flex flex-col gap-5 p-5 ">
        <Typography variant="h4" className="text-primary">
          <p>Elevate Consulting Private GPT Chat Service</p>
        </Typography>
        <div className="flex flex-col gap-2">
          <p className="">
            Welcome to Elevate's Private GPT Chat Service. This service utilizes the Microsoft Azure OpenAI resource in the Canada East data centre.</p>
            <p>This is a <b>private</b> deployment that is isolated in Elevate's Microsoft Azure tenant.</p>
            <p><b>Usage Guidelines</b></p>
            <p><i>DO</i>use this approved tool to:</p>
            <ul>
              <li>Find and consider templates related to work streams.</li>
              <li>Brainstorm ideas.</li>
              <li>Create draft blocks of text, or increase precision.</li>
            </ul>
            <p><i>DO NOT</i>use this approved tool to:</p>
            <ul>
              <li>Assume the information produced by an AI is correct or accurate.</li>
              <li>Input personally identifiable information into any AI tools.</li>
              <li>Use Elevate AI tools for non-work purposes</li>
            </ul>
            <p>You should interact in a friendly manner with the AI assistant and refrain from participating in any harmful
            activities.
          </p>
          <p>You can start a new chat by clicking the button below.</p>
        </div>
        <div className="-mx-5 -mb-5 p-5 flex flex-col border-t bg-muted">
          <NewChat />
        </div>
      </Card>
    </div>
  );
};
