import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
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
          <p>Elevate Private GPT Chat Service</p>
        </Typography
        <div className="flex flex-col gap-2">
          <p className="">
            Welcome to Elevate's Private GPT Chat Service v2. This service utilizes the Microsoft Azure OpenAI resource in the Canada East data centre.</p>
            <p>This is a <b>private</b> deployment that is isolated in Elevate's Microsoft Azure tenant.</p>
            <p><b>Usage Guidelines</b></p>
            <p><i>DO</i> use this approved tool to:</p>
            <ul>
              <li>• Find and consider templates related to work streams.</li>
              <li>• Brainstorm ideas.</li>
              <li>• Create draft blocks of text, or apply concission to your drafts.</li>
              <li>• Mine Word (.docx) and PDF documents for insights or summarization.</li>
            </ul>
            <p><i>DO NOT</i>:</p>
            <ul>
              <li>• Assume the information produced by this service or any AI is correct or accurate.</li>
              <li>• Input personally identifiable information or sensitive client data (sanitize the source document first).</li>
              <li>• Use eGPT for non-work purposes.</li>
            </ul>
            <p>Please interact with the AI assistant in a friendly manner. Refrain from participating in any activities that could be considered harmful.
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
