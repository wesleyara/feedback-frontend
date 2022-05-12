import { CloseButton } from "../../CloseButton";
import { FeedbackTypes, feedbackTypes } from "..";
import { ArrowLeft } from "phosphor-react";
import { FormEvent, MouseEventHandler, useState } from "react";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  title: FeedbackTypes;
  onRestartFeedback: MouseEventHandler;
  onFeedbackSend: () => void;
}

export const FeedbackContentStep = ({
  title,
  onRestartFeedback,
  onFeedbackSend,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackInfo = feedbackTypes[title];

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();

    console.log(screenshot, comment);

    onFeedbackSend();
  }

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

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[102px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md border-2 focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo"
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0}
            className="p-2 bg-brand-500 rounded-ms border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {" "}
            Enviar feedback
          </button>
        </div>
      </form>
    </>
  );
};
