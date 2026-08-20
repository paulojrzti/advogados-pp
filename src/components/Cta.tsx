import ContactTrigger from "@/components/ContactTrigger";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Cta() {
  return (
    <div className="flex justify-center bg-[#ECE7DF] py-12">
      <ContactTrigger className="inline-flex items-center gap-3 rounded-none bg-[#3A43E3] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9]">
        Falar com um especialista
        <ArrowUpRightIcon className="h-4 w-4" />
      </ContactTrigger>
    </div>
  );
}
