import { Dispatch, SetStateAction } from "react";
import { feedbackTypes, FeedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  setFeedbackType: Dispatch<SetStateAction<FeedbackTypes | null>>;
}

export const FeedbackTypeStep = ({
  setFeedbackType,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => setFeedbackType(key as FeedbackTypes)}
            >
              <img src={value.image.src} alt={value.image.src} />
              {value.title}
            </button>
          );
        })}
      </div>
    </>
  );
};
