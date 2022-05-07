import { CloseButton } from "../../CloseButton";
import { FeedbackTypes, feedbackTypes } from "..";
import { ArrowLeft, Camera } from "phosphor-react";
import { MouseEventHandler } from "react";

interface FeedbackContentStepProps {
  title: FeedbackTypes;
  onRestartFeedback: MouseEventHandler;
}

export const FeedbackContentStep = ({
  title,
  onRestartFeedback,
}: FeedbackContentStepProps) => {
  const feedbackInfo = feedbackTypes[title];

  return (
    <>
      <header>
        <button
          onClick={onRestartFeedback}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackInfo.image.src}
            alt={feedbackInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[102px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md border-2 focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo"
        />

        <div className="flex gap-2 mt-2">
          <button
            type="button"
            className="p-2 bg-zinc-800 rounded-ms border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            <Camera className="w-6 h-6" />
          </button>
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-ms border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            {" "}
            Enviar feedback
          </button>
        </div>
      </form>
    </>
  );
};
