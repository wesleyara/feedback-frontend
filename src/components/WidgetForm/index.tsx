import { useState } from "react";

import bugImage from "../../assets/bug.png";
import ideaImage from "../../assets/idea.png";
import thoughtImage from "../../assets/thought.png";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImage,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImage,
      alt: "Imagem de um pensamento",
    },
  },
};

export type FeedbackTypes = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          title={feedbackType}
          onRestartFeedback={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Desenvolvido por{" "}
        <a className="underline underline-offset-2" href="wesleyaraujo.dev">
          Wesley Araújo
        </a>
      </footer>
    </div>
  );
};
